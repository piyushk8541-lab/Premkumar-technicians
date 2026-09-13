# Step 3 — owner-controlled signed release preparation

**Status: workflow prepared, not enabled or executed. No private key has been
created, imported, committed, or requested in chat. No release APK/AAB has been
built by this setup step. Nothing publishes to Google Play.**

## Inspection baseline

- App ID / namespace: `com.premkumar.technicians`.
- App label: **Prem Kumar Technicians**; existing artwork and frontend unchanged.
- Existing debug defaults: version name `0.1.0`, version code `1`.
- Node 22, JDK 21, Gradle 8.14.3, AGP 8.13.0, compile/target SDK 36,
  Build Tools 35.0.0, min SDK 24, Capacitor 8.4.3 remain pinned.
- Existing Gradle signing already consumes four environment values and rejects
  incomplete credentials/unsigned release packaging. Real release packaging now
  also requires explicit release version values and rejects the standard debug
  alias. The debug-only release dry-run remains possible without a real key.
- The wrapper ZIP SHA-256 is pinned; the bootstrap JAR is checked against Gradle's
  official checksum in `check:release`.

## 1. Information the owner must confirm (safe to answer in chat)

1. Has **this exact application ID** ever been uploaded to any Play track,
   including internal/closed testing or drafts?
2. Is Play App Signing enabled, and do you already control its **registered upload
   key**? If not, stop and resolve ownership/upload-key recovery first. Do not
   replace a registered key just because this is a new release workflow.
3. What is the highest version code already used in Play Console across all
   tracks/uploads? Use `0` only if this app has never been uploaded.
4. Desired release version name and version code. For a truly new app, `1.0.0`
   with code `2` is a possible choice, **not selected automatically**. Debug code
   `1` is not evidence of a Play upload. The release code must be greater than
   every previously uploaded Play version code, up to Android's 2100000000 limit.

**Do not send the keystore, its base64 text, either password, or GitHub credentials
in chat, issues, commits, screenshots, build logs, or source archives.**

## 2. Create a protected GitHub environment yourself

Repository → **Settings → Environments → New environment** → `android-release`.

Before putting credentials there:

- Under deployment branches/tags, select **Selected branches and tags** and allow
  only the branch `arena/01a09a19-premkumar-technicians`. Do not allow tags/main.
- Configure at least one trusted **required reviewer**. Use prevent-self-review
  when another trusted reviewer is available; do not enable an approval policy
  that nobody can satisfy. Disable administrator bypass where supported.
- Review the exact requested commit, workflow, Gradle files, signing scripts and
  locked dependencies before approving a signing job. Build scripts execute with
  the key available and must be trusted. Branch restrictions alone are not a
  substitute for review. Limit write/admin access to trusted maintainers.
- These settings are configured in GitHub, **not enforced merely by committing
  the workflow YAML**. They have not been created/changed by this preparation.
- If your repository plan does not support the required protection, **do not
  enable signing**. Agree on an alternative trusted release environment first.

The workflow's GitHub environment is an approval/security boundary. A future run
may create a GitHub environment/deployment record, but it contains no website
hosting or Play deployment action.

### Environment secrets — exactly four

| Secret | Value supplied privately by the owner |
| --- | --- |
| `PK_ANDROID_UPLOAD_KEYSTORE_BASE64` | Base64 of the existing private upload keystore file (JKS recommended; supported PKCS12 stores may also be used). |
| `PK_ANDROID_KEYSTORE_PASSWORD` | Password that opens that keystore. |
| `PK_ANDROID_KEY_ALIAS` | Alias of the **private-key entry**, not a certificate-only entry. |
| `PK_ANDROID_KEY_PASSWORD` | Password that unlocks that private key; may equal the store password. |

Use **environment secrets**, not repository/organization secrets: the debug
workflow must never have access to the release key. Base64 is **not encryption**;
treat it exactly like the original private keystore. Keep an encrypted offline
backup of the key/passwords under owner control. Loss or substitution can block
updates or require an upload-key reset through Play Console.

### Environment variables — public configuration, not passwords

| Variable | Required value |
| --- | --- |
| `PK_ANDROID_UPLOAD_CERT_SHA256` | Expected SHA-256 fingerprint of the upload **certificate**; 64 hex digits, with or without colons. Not the APK hash, keystore-file hash, public-key hash, or Google's separate app-signing certificate. |
| `PK_ANDROID_LAST_PLAY_VERSION_CODE` | Highest code already uploaded in Play Console, including testing/drafts, or `0` for a never-uploaded app. Update it after future Play uploads. CI does not query Play Console. |
| `PK_ANDROID_RELEASE_ENABLED` | Leave unset/`false` during setup. Set to exactly `true` only after environment protections, key ownership, certificate and release intent have been reviewed. |

You do **not** supply `PK_ANDROID_KEYSTORE_PATH`. CI sets it to a private temporary
location outside the checkout. You do not need a Play service-account JSON,
Google password, GitHub PAT or production website credentials for artifact builds.

## 3. Obtain values without exposing the key

If an upload key already exists, inspect it on a **trusted owner-controlled
computer**, outside all repository directories. This command prompts for the
password; do not add a plaintext password to the command line:

```sh
keytool -list -v -keystore /secure/private/location/upload.jks -alias YOUR_UPLOAD_ALIAS
```

Check that the entry is a `PrivateKeyEntry`, that the certificate is valid, and
record its public SHA256 fingerprint. For an existing Play app, compare it with
Play Console's **upload key certificate**, not the app-signing certificate.

Base64 must be produced locally with an offline tool, never an online encoder.
For an owner who has GitHub CLI on that trusted computer, this pipes the encoded
key straight into the environment secret without writing a base64 file:

```sh
python3 -c 'import base64,sys; sys.stdout.buffer.write(base64.b64encode(open(sys.argv[1], "rb").read()))' \
  /secure/private/location/upload.jks | \
  gh secret set PK_ANDROID_UPLOAD_KEYSTORE_BASE64 \
    --env android-release --repo piyushk8541-lab/Premkumar-technicians
```

Enter the other three values in GitHub's environment-secret fields, or use
`gh secret set NAME --env android-release --repo ...` with its secure prompt.
Never pass password values as shell command arguments. Most single-key stores
fit within GitHub's 48 KB per-secret limit after base64 encoding; if yours does
not, stop rather than committing the keystore or improvising public storage.

If you **do not have an upload key**, tell the agent only that fact and the Play
history. Key creation is a separate owner-controlled step, not performed here.
Do not reuse a CI/debug key. A new key should have strong credentials, modern
RSA (at least 2048 bits, commonly 3072), and long certificate validity appropriate
for app updates (commonly 25+ years). Preserve recovery backups privately.

## 4. Deliberately request an artifacts-only build — later

No `release/request.json` file is created in this preparation. Ordinary app or
workflow pushes cannot trigger the new signing workflow.

If GitHub exposes the manual workflow, select **Android signed release artifacts**,
select the Arena branch and supply `version_code` and `version_name` explicitly.
GitHub may not expose manual dispatch while this workflow is absent from the
repository's default branch. **Do not modify main to solve that.**

The branch-only alternative, after the owner explicitly authorizes a build, is
to add/update this exact file on the Arena branch:

`premkumar-android-app/release/request.json`

```json
{
  "action": "build-signed-artifacts-only",
  "versionCode": 2,
  "versionName": "1.0.0"
}
```

Replace the example versions with the approved values. A push changing that
exact request file starts validation; signing then waits for the configured
`android-release` environment approval. No tags, PR triggers, default-branch
merge, GitHub Release, Play publishing, or website deployment is needed.

## 5. What the prepared workflow does

1. Pins checkout to the event's exact commit on the Arena branch; token is
   `contents: read` and checkout does not persist credentials.
2. Validates explicit request/versions, all six original website hashes and the
   unchanged exact-branch Vercel guard.
3. Runs release-preparation tests, icon/config checks, web build/sync, browser
   regressions, release unit tests and lint **without signing secrets**.
4. After the owner's environment approval, rebuilds the same commit on a fresh
   GitHub-hosted runner. No npm/Gradle cache upload is configured in this workflow.
5. Exposes the four signing secrets only to one step. Decodes the key under
   `$RUNNER_TEMP` with a private directory and `0600` file permissions. Verifies
   the expected upload certificate before signing. Passwords are environment
   values, never Gradle `-P` or keytool password command-line arguments.
6. Uses `:app:assembleRelease :app:bundleRelease` with no Gradle daemon,
   configuration cache, build cache, debug/verbose tracing, or build scans.
7. Removes the private key immediately after packaging; also has an EXIT trap
   and an always-run cleanup step. Hosted runners are ephemeral; abrupt runner
   termination may prevent cleanup code, so no key is cached/uploaded.
8. Checks the APK's signature/certificate, ID, label, version, SDK, non-debuggable
   flag, ZIP integrity, and alignment. Checks AAB structure/ZIP integrity and
   authenticates **every payload entry** with JDK JarVerifier against the expected
   upload certificate, including certificate validity. Self-signed Android upload
   certificates are allowed; a public CA chain is not required.
9. Uploads only `app-release.apk`, `app-release.aab`, SHA-256 checksums and public
   verification reports, for seven days. Artifact visibility follows repository/
   Actions permissions; these are distributable binaries, not private keys.

This is **not** full bundletool/Play Console validation, on-device QA or Play
approval. Positive signing verification remains untested until the owner's real
key is configured and a release is explicitly authorized. No fake/private key
is generated just to make that check appear complete.

The APK is signed with the **upload key**. Play-installed APKs are normally signed
with Google's separate app-signing key, so this APK may not update a Play install.
It also will not update an existing differently signed debug install. Plan phone
installation accordingly; an AAB itself is not directly installable on a phone.

## Local preparation checks (no private credentials)

```sh
npm run check:release
npm run check:icons
npm run check:config
npm run verify:website
npm run sync:android
```

The Java unsigned-bundle rejection check is skipped when no full JDK is installed;
it is configured to run on JDK 21 in CI. Never enable shell tracing or add broad
workspace/cache uploads to a job with signing credentials. Ignore rules are an
accident guard, not a security boundary: never force-add private material.
