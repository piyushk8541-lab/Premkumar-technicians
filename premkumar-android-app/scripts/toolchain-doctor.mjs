import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';

// Read-only diagnostic. It does not install tools, rewrite Gradle settings, or access the website.
const isWindows = process.platform === 'win32';
const executable = name => name + (isWindows ? '.exe' : '');
let failed = false;
function report(ok, label, detail = '') {
  console.log(`${ok ? 'PASS' : 'MISSING'}: ${label}${detail ? ` — ${detail}` : ''}`);
  if (!ok) failed = true;
}
function probe(command, args) {
  try {
    return execFileSync(command, args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 15000 }).trim();
  } catch { return null; }
}
const javaHome = process.env.JAVA_HOME;
const java = javaHome ? join(javaHome, 'bin', executable('java')) : executable('java');
const javac = javaHome ? join(javaHome, 'bin', executable('javac')) : executable('javac');
// Java prints -version to stderr, so use --version for a captured, machine-readable check.
const version = probe(java, ['--version']);
report(Boolean(version?.match(/(?:openjdk|java) 21[.\s]/)), 'Java 21 runtime', version?.split('\n')[0] || java);
const compiler = probe(javac, ['--version']);
report(Boolean(compiler?.match(/^javac 21[.\s]/)), 'JDK 21 javac compiler', compiler || javac);
const modules = probe(java, ['--list-modules']);
report(Boolean(modules?.includes('jdk.compiler@21')), 'JDK 21 compiler module');

const sdk = process.env.ANDROID_HOME || process.env.ANDROID_SDK_ROOT;
report(Boolean(sdk && existsSync(sdk)), 'Android SDK directory', sdk || 'Set ANDROID_HOME or ANDROID_SDK_ROOT');
report(Boolean(sdk && existsSync(join(sdk, 'platforms', 'android-36', 'android.jar'))), 'Android SDK Platform 36');
for (const tool of ['aapt', 'zipalign', 'apksigner']) {
  const filename = tool === 'apksigner' && isWindows ? 'apksigner.bat' : executable(tool);
  const path = sdk ? join(sdk, 'build-tools', '35.0.0', filename) : '(SDK not configured)';
  report(Boolean(sdk && existsSync(path)), `Android Build Tools 35.0.0 / ${tool}`, path);
}
report(existsSync(resolve('android/gradle/wrapper/gradle-wrapper.jar')), 'Gradle wrapper bootstrap JAR');
console.log('NOTE: The wrapper JAR is not the Gradle distribution. Gradle 8.14.3 and the Google/Maven dependencies must be downloadable or cached.');

if (process.argv.includes('--network')) {
  console.log('\nRead-only HTTPS probes (TLS verification remains enabled):');
  const urls = [
    'https://services.gradle.org/distributions/gradle-8.14.3-bin.zip.sha256',
    'https://dl.google.com/android/repository/repository2-1.xml',
    'https://dl.google.com/dl/android/maven2/com/android/tools/build/gradle/8.13.0/gradle-8.13.0.pom',
    'https://repo.maven.apache.org/maven2/org/jetbrains/kotlin/kotlin-stdlib/2.2.0/kotlin-stdlib-2.2.0.pom',
  ];
  await Promise.all(urls.map(async url => {
    try {
      const response = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(15000) });
      report(response.ok, url, `HTTP ${response.status}`);
    } catch (error) {
      report(false, url, `${error.message}; ${error.cause?.code || 'no connection'}`);
    }
  }));
}
console.log(`\n${failed ? 'NOT READY: native compilation prerequisites are missing.' : 'Basic tools detected. Run the actual Gradle build to verify dependencies/compilation.'}`);
process.exitCode = failed ? 1 : 0;
