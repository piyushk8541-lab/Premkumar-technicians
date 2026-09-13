import hashlib
import json
import os
from pathlib import Path
import subprocess
import shutil
import zipfile
import tempfile
import unittest

from request import ACTION, parse_request, validate_version

APP = Path(__file__).resolve().parents[2]
ROOT = APP.parent


class ReleasePreparationTests(unittest.TestCase):
    def test_valid_versions(self):
        for code, name in [(1, '1.0'), (2, '1.0.0'), (2100000000, '2.0.0-rc.1')]:
            self.assertEqual(validate_version(code, name), (str(code), name))

    def test_bad_version_codes_fail_closed(self):
        for code in [None, True, 0, -1, '01', '1.2', '2\nother=value', 2100000001, '9' * 40]:
            with self.subTest(code=code), self.assertRaises(ValueError):
                validate_version(code, '1.0.0')

    def test_unsafe_or_missing_version_names_fail_closed(self):
        for name in ['', None, 'release', '1.0\nsecret=x', '$(env)', '../1.0', '1.' + '0' * 64]:
            with self.subTest(name=name), self.assertRaises(ValueError):
                validate_version(2, name)

    def test_manual_dispatch_requires_explicit_versions(self):
        self.assertEqual(parse_request('workflow_dispatch', {'inputs': {'version_code': '2', 'version_name': '1.0.0'}}), ('2', '1.0.0'))
        with self.assertRaises(ValueError):
            parse_request('workflow_dispatch', {})

    def test_push_requires_artifacts_only_intent(self):
        request = {'action': ACTION, 'versionCode': 2, 'versionName': '1.0.0'}
        self.assertEqual(parse_request('push', {}, request), ('2', '1.0.0'))
        for bad in [None, {}, {**request, 'action': 'publish'}, {**request, 'extra': 'unexpected'}]:
            with self.assertRaises(ValueError):
                parse_request('push', {}, bad)

    def test_pull_request_and_deletion_never_release(self):
        request = {'action': ACTION, 'versionCode': 2, 'versionName': '1.0.0'}
        for event in ['pull_request', 'pull_request_target', 'workflow_run', 'release']:
            with self.assertRaises(ValueError):
                parse_request(event, {}, request)
        with self.assertRaises(ValueError):
            parse_request('push', {'deleted': True}, request)

    def test_signing_script_syntax_and_no_secret_fail_closed(self):
        script = APP / 'scripts/release/sign-and-verify.sh'
        subprocess.run(['bash', '-n', str(script)], check=True)
        with tempfile.TemporaryDirectory() as tmp:
            result = subprocess.run(['bash', str(script)], cwd=APP, env={
                'PATH': os.environ['PATH'], 'RUNNER_TEMP': tmp, 'ANDROID_HOME': tmp,
            }, capture_output=True, text=True)
            self.assertNotEqual(result.returncode, 0)
            self.assertIn('Missing upload keystore secret', result.stderr)
            self.assertEqual(list(Path(tmp).iterdir()), [])  # No key file created.

    def test_private_material_is_ignored(self):
        names = ['upload.jks', 'upload.keystore', 'upload.p12', 'upload.pfx', 'private.pem',
                 'private.key', 'upload.b64', 'upload.base64', 'keystore.properties',
                 'signing.properties', 'release-signing.properties', '.env.release']
        for name in names:
            result = subprocess.run(['git', 'check-ignore', '--quiet', f'premkumar-android-app/{name}'], cwd=ROOT)
            self.assertEqual(result.returncode, 0, name)

    def test_gradle_wrapper_matches_official_checksums(self):
        wrapper = APP / 'android/gradle/wrapper'
        expected_jar = '7d3a4ac4de1c32b59bc6a4eb8ecb8e612ccd0cf1ae1e99f66902da64df296172'
        self.assertEqual(hashlib.sha256((wrapper / 'gradle-wrapper.jar').read_bytes()).hexdigest(), expected_jar)
        props = (wrapper / 'gradle-wrapper.properties').read_text()
        self.assertIn('gradle-8.14.3-bin.zip', props)
        self.assertIn('distributionSha256Sum=bd71102213493060956ec229d946beee57158dbd89d0e62b91bca0fa2c5f3531', props)

    def test_only_signing_step_references_secrets(self):
        workflow = (ROOT / '.github/workflows/android-release.yml').read_text()
        before, signing = workflow.split('      - name: Temporarily load owner key,', 1)
        signing, after = signing.split('      - name: Recheck original website after packaging', 1)
        self.assertNotIn('${{ secrets.', before + after)
        self.assertEqual(signing.count('${{ secrets.'), 4)
        self.assertIn('environment: android-release', before)
        self.assertIn('needs: validate', before)
        self.assertIn('contents: read', before)
        self.assertNotIn('contents: write', workflow)
        self.assertNotIn('pull_request:', workflow)
        self.assertNotIn('pull_request_target:', workflow)
        self.assertIn('      - premkumar-android-app/release/request.json', workflow)
        self.assertNotIn('      - premkumar-android-app/**', workflow)
        self.assertIn('        if: always()', after)
        self.assertNotIn('actions/cache', workflow)
        self.assertNotIn('cache: npm', workflow)
        for line in workflow.splitlines():
            if 'uses:' in line:
                self.assertRegex(line, r'uses: [\w/-]+@[a-f0-9]{40}(?:\s|$)')

    def test_private_key_never_in_artifact_allowlist(self):
        workflow = (ROOT / '.github/workflows/android-release.yml').read_text()
        upload = workflow.split('      - name: Upload only verified', 1)[1].split('      - name: Remove temporary', 1)[0]
        self.assertNotIn('*', upload)
        for extension in ['.keystore', '.jks', '.p12', '.b64', '.properties']:
            self.assertNotIn(extension, upload)
        self.assertIn('artifacts/release/app-release.apk', upload)
        self.assertIn('artifacts/release/app-release.aab', upload)
        script = (APP / 'scripts/release/sign-and-verify.sh').read_text()
        self.assertIn('umask 077', script)
        self.assertIn('mktemp -d "$RUNNER_TEMP/pk-signing.', script)
        self.assertIn('-storepass:env PK_ANDROID_KEYSTORE_PASSWORD', script)
        self.assertIn('--no-configuration-cache --no-build-cache', script)
        self.assertLess(script.index('rm -rf -- "$key_dir"\nunset'), script.index('tools="$ANDROID_HOME'))

    @unittest.skipUnless(shutil.which('java') and shutil.which('javac'), 'Full JDK is not installed; Java verifier is compiled/tested in CI.')
    def test_java_verifier_rejects_unsigned_bundle_without_generating_keys(self):
        with tempfile.TemporaryDirectory() as tmp:
            bundle = Path(tmp) / 'unsigned-test.aab'
            with zipfile.ZipFile(bundle, 'w') as archive:
                archive.writestr('BundleConfig.pb', b'not-a-production-bundle')
                archive.writestr('base/manifest/AndroidManifest.xml', b'unsigned-test-payload')
            result = subprocess.run(['java', str(APP / 'scripts/release/VerifyBundle.java'), str(bundle), '0' * 64], capture_output=True, text=True)
            self.assertNotEqual(result.returncode, 0)
            self.assertIn('Unsigned or multiply signed bundle payload', result.stderr)

    def test_original_website_unchanged(self):
        baseline = json.loads((APP / 'docs/website-baseline.json').read_text())
        for path, expected in baseline['files'].items():
            self.assertEqual(hashlib.sha256((ROOT / path).read_bytes()).hexdigest(), expected, path)


if __name__ == '__main__':
    unittest.main()
