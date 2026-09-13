#!/usr/bin/env bash
# Run only on an ephemeral, trusted GitHub-hosted runner after environment approval.
# Never source this script, turn on shell tracing, or run it with a build scan/debug log.
set +x
set -euo pipefail
umask 077

: "${RUNNER_TEMP:?GitHub runner temporary directory is required}"
: "${ANDROID_HOME:?Android SDK is required}"
: "${PK_ANDROID_UPLOAD_KEYSTORE_BASE64:?Missing upload keystore secret}"
: "${PK_ANDROID_KEYSTORE_PASSWORD:?Missing keystore password secret}"
: "${PK_ANDROID_KEY_ALIAS:?Missing private-key alias secret}"
: "${PK_ANDROID_KEY_PASSWORD:?Missing private-key password secret}"
: "${PK_ANDROID_UPLOAD_CERT_SHA256:?Missing approved public certificate fingerprint}"
: "${PK_ANDROID_LAST_PLAY_VERSION_CODE:?Set the last Play version code, or 0 for a new app}"
: "${PK_ANDROID_VERSION_CODE:?Missing explicit release version code}"
: "${PK_ANDROID_VERSION_NAME:?Missing explicit release version name}"
[[ "${PK_ANDROID_RELEASE_ENABLED:-}" == true ]] || { echo 'Release signing is not enabled in the protected environment.'; exit 1; }
[[ "${PK_ANDROID_KEY_ALIAS,,}" != androiddebugkey ]] || { echo 'A debug signing key cannot be used for production.'; exit 1; }

key_dir="$(mktemp -d "$RUNNER_TEMP/pk-signing.XXXXXXXX")"
trap 'rm -rf -- "$key_dir"' EXIT
trap 'exit 130' INT
trap 'exit 143' TERM HUP
export PK_ANDROID_KEYSTORE_PATH="$key_dir/upload.keystore"
export PK_ANDROID_CERT_FILE="$key_dir/upload-certificate.der"

# No values from the secret material are echoed, put in command arguments or GitHub outputs.
python3 - <<'PY'
import base64, os, pathlib, re
from scripts.release.request import validate_version
code, _ = validate_version(os.environ['PK_ANDROID_VERSION_CODE'], os.environ['PK_ANDROID_VERSION_NAME'])
previous = os.environ['PK_ANDROID_LAST_PLAY_VERSION_CODE']
assert re.fullmatch(r'0|[1-9][0-9]{0,9}', previous) and int(previous) < int(code), 'Version code must exceed the declared last Play version code.'
fingerprint = re.sub(r'[\s:]', '', os.environ['PK_ANDROID_UPLOAD_CERT_SHA256']).lower()
assert re.fullmatch(r'[0-9a-f]{64}', fingerprint), 'Expected public SHA-256 fingerprint is invalid.'
try:
    data = base64.b64decode(''.join(os.environ['PK_ANDROID_UPLOAD_KEYSTORE_BASE64'].split()), validate=True)
except Exception:
    raise SystemExit('Keystore secret is not valid base64.') from None
assert data, 'Keystore secret decodes to an empty file.'
path = pathlib.Path(os.environ['PK_ANDROID_KEYSTORE_PATH'])
# Exclusive creation; temporary directory is outside the repository and accessible only to this user.
with path.open('xb') as output:
    output.write(data)
path.chmod(0o600)
PY
unset PK_ANDROID_UPLOAD_KEYSTORE_BASE64

# Password is supplied through an environment reference, not a process-list argument.
keytool -exportcert -keystore "$PK_ANDROID_KEYSTORE_PATH" \
  -alias "$PK_ANDROID_KEY_ALIAS" -storepass:env PK_ANDROID_KEYSTORE_PASSWORD \
  -file "$PK_ANDROID_CERT_FILE" > "$key_dir/keytool.log" 2>&1 || {
    echo 'Cannot access the requested signing certificate; check the keystore, alias and store password.'; exit 1;
  }
python3 - <<'PY'
import hashlib, os, pathlib, re
actual = hashlib.sha256(pathlib.Path(os.environ['PK_ANDROID_CERT_FILE']).read_bytes()).hexdigest()
expected = re.sub(r'[\s:]', '', os.environ['PK_ANDROID_UPLOAD_CERT_SHA256']).lower()
assert actual == expected, 'Upload certificate fingerprint does not match the approved public fingerprint.'
PY
openssl x509 -inform DER -in "$PK_ANDROID_CERT_FILE" -checkend 0 -noout > /dev/null
if openssl x509 -inform DER -in "$PK_ANDROID_CERT_FILE" -noout -subject | grep -qi 'Android Debug'; then
  echo 'An Android debug certificate cannot be used for production.'; exit 1
fi

# Disable caches/scans and keep private signing values out of serialized configuration caches.
(cd android && ./gradlew --no-daemon --no-configuration-cache --no-build-cache --console=plain \
  :app:assembleRelease :app:bundleRelease)

# Remove the private key immediately after packaging, before public verification/artifact upload.
rm -rf -- "$key_dir"
unset PK_ANDROID_KEYSTORE_PATH PK_ANDROID_KEYSTORE_PASSWORD PK_ANDROID_KEY_ALIAS PK_ANDROID_KEY_PASSWORD PK_ANDROID_CERT_FILE

apk=android/app/build/outputs/apk/release/app-release.apk
aab=android/app/build/outputs/bundle/release/app-release.aab
[[ -s "$apk" && -s "$aab" ]]
reports=artifacts/release
mkdir -p "$reports"
tools="$ANDROID_HOME/build-tools/35.0.0"
"$tools/apksigner" verify --verbose --print-certs "$apk" > "$reports/apk-signature.txt"
"$tools/aapt" dump badging "$apk" > "$reports/apk-metadata.txt"
"$tools/zipalign" -c -P 16 -v 4 "$apk" > "$reports/apk-alignment.txt"

python3 - <<'PY'
import os, pathlib, re, zipfile
root = pathlib.Path('artifacts/release')
expected = re.sub(r'[\s:]', '', os.environ['PK_ANDROID_UPLOAD_CERT_SHA256']).lower()
certs = re.findall(r'^Signer #\d+ certificate SHA-256 digest: ([0-9a-fA-F]+)$', (root/'apk-signature.txt').read_text(), re.M)
assert [cert.lower() for cert in certs] == [expected], 'APK is not signed solely by the approved upload certificate.'
metadata = (root/'apk-metadata.txt').read_text()
package = next(line for line in metadata.splitlines() if line.startswith('package: '))
values = dict(re.findall(r"([A-Za-z]+)='([^']*)'", package))
assert values['name'] == 'com.premkumar.technicians'
assert values['versionCode'] == os.environ['PK_ANDROID_VERSION_CODE']
assert values['versionName'] == os.environ['PK_ANDROID_VERSION_NAME']
for token in ["sdkVersion:'24'", "targetSdkVersion:'36'", "application-label:'Prem Kumar Technicians'"]:
    assert token in metadata, 'APK identity/SDK does not match the approved app.'
assert 'application-debuggable' not in metadata, 'Release APK is debuggable.'
for path in ['android/app/build/outputs/apk/release/app-release.apk', 'android/app/build/outputs/bundle/release/app-release.aab']:
    with zipfile.ZipFile(path) as archive:
        assert archive.testzip() is None, 'Corrupt package archive.'
        names = archive.namelist()
        assert len(names) == len(set(names)), 'Duplicate package entries.'
        prefix = 'base/' if path.endswith('.aab') else ''
        assert prefix + 'assets/public/index.html' in names, 'Bundled app content is missing.'
(root/'upload-certificate-sha256.txt').write_text(expected + '\n')
PY
expected="$(cat "$reports/upload-certificate-sha256.txt")"
java scripts/release/VerifyBundle.java "$aab" "$expected" > "$reports/aab-signature.txt"
cp "$apk" "$reports/app-release.apk"
cp "$aab" "$reports/app-release.aab"
(cd "$reports" && sha256sum app-release.apk app-release.aab > SHA256SUMS.txt)
printf 'Verified signed APK and AAB. Artifacts only; nothing was published.\n'
