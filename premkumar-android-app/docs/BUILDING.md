# Build the debug APK on an external computer

**No APK exists yet.** These instructions build the actual Android APK on a computer with the native toolchain installed. No signed AAB, upload key, Play Console account, deployment or website change is involved.

## 1. Open the correct project

The standalone app directory is:

```text
premkumar-android-app/
```

Its location in this workspace is:

```text
/home/user/Premkumar-technicians/premkumar-android-app/
```

Copy the current app directory to your computer. You do not need the original website's root `index.html` or other website files. Include `package-lock.json`, `src/`, the configuration files and the complete `android/` source project, including the Gradle wrapper JAR and both wrapper scripts.

Do not copy machine-specific `node_modules/`, `.cache/`, `android/local.properties` or Gradle/build caches from this workspace. They are not needed for a normal online build. Install dependencies for your own computer using `npm ci`.

**All commands below start in `premkumar-android-app/`, not the original website root.** Do not initialize another Capacitor project or run `cap add android`: the Android project already exists.

## 2. Required versions

| Component | Required value | Where it is configured |
| --- | --- | --- |
| Application ID / namespace | `com.premkumar.technicians` | `capacitor.config.ts`, `android/app/build.gradle` |
| App display name | `Prem Kumar Technicians` | Capacitor configuration and Android string resources |
| Version name / code | `0.1.0` / `1` | `android/app/build.gradle` |
| Node.js | 22 or newer | `package.json` engines |
| npm | Included with Node; verification used 10.9.8 | Install using the committed lockfile |
| Complete JDK | **21**, including `java`, `javac` and `keytool` | Java compile targets in generated `android/app/capacitor.build.gradle`; local JDK selected below |
| Gradle | **8.14.3** | `android/gradle/wrapper/gradle-wrapper.properties` |
| Android Gradle Plugin | **8.13.0** | `android/build.gradle` |
| Android SDK Platform | **36** | `compileSdkVersion` / `targetSdkVersion` in `android/variables.gradle` |
| Android SDK Build Tools | **35.0.0**, explicitly pinned | `android/app/build.gradle` |
| Minimum Android version | API 24 / Android 7.0 | `android/variables.gradle` |
| Capacitor core / CLI / Android | **8.4.3** | `package.json` and `package-lock.json` |
| Capacitor App plugin | **8.1.1** | `package.json` and `package-lock.json` |

Install an Android Studio version supporting Android Gradle Plugin 8.13.0. Use the project's **Gradle wrapper**, not a globally installed Gradle or an IDE-suggested version upgrade. No NDK, emulator, Firebase setup, backend or Maps API key is required for this debug build.

A Java runtime alone is insufficient: both `java -version` and `javac -version` must report **21**. The partial runtime obtained in this sandbox is not suitable as your build JDK.

## 3. Exact Android Studio procedure

1. Install Node.js 22+ and a **full JDK 21** for your computer's operating system/architecture. Android Studio's bundled JDK is acceptable only if it is a full JDK 21.
2. In Android Studio, open **Tools → SDK Manager** (or **More Actions → SDK Manager** on the welcome screen).
3. On **SDK Platforms**, install **Android API 36 / Android 16**. Record the **Android SDK Location** shown by the manager.
4. On **SDK Tools**, enable **Show Package Details**. Expand **Android SDK Build-Tools**, select **35.0.0**, and also install **Android SDK Platform-Tools** and **Android SDK Command-line Tools (latest)**. Click **Apply**, accept the SDK licenses, and finish installation. Emulator/system images are optional and not needed to produce the APK.
5. In a terminal in `premkumar-android-app/`, run:

   ```sh
   npm ci
   npm run sync:android
   ```

   This builds the local frontend and regenerates the ignored Capacitor/native assets and plugin wiring. Always do it before building Android after frontend/dependency changes.
6. Open **`premkumar-android-app/android/`** in Android Studio with **File → Open**, or run `npm run android` from the app folder. Open the `android/` directory, not `src/`, `android/app/`, or the website root.
7. Open **Settings → Build, Execution, Deployment → Build Tools → Gradle**. On macOS use **Android Studio → Settings**. Set **Gradle JDK** to your full **JDK 21**. If a Gradle distribution selector is shown, choose the **wrapper / gradle-wrapper.properties** option. Do not accept prompts to upgrade the project merely to match the IDE.
8. Allow Gradle project sync to finish. If the SDK path is missing, set it to the SDK Manager location; Android Studio normally writes an ignored `android/local.properties` file containing `sdk.dir`. Keep Gradle **Offline Mode disabled for the first build**, unless every required dependency is already cached.
9. Open **View → Tool Windows → Build Variants** and choose **debug** for the `app` module.
10. Build the debug APK using **Build → Build Bundle(s) / APK(s) → Build APK(s)**. Some newer Android Studio versions label this **Build → Generate App Bundles / APKs → Generate APKs**. Do **not** choose **Generate Signed Bundle / APK**. A menu-independent alternative is to execute the Gradle task **`:app:assembleDebug`** from the Gradle tool window, or use the exact terminal commands below.
11. Wait for **BUILD SUCCESSFUL**. Click **Locate** in the APK build notification, or open:

    ```text
    premkumar-android-app/android/app/build/outputs/apk/debug/app-debug.apk
    ```

An IDE sync alone does not create an APK. Verify that the file actually exists after the build task succeeds.

## 4. Exact terminal build: Linux / macOS

From `premkumar-android-app/`, configure your installed toolchain. Replace the example paths with your actual paths:

```sh
export JAVA_HOME="/absolute/path/to/jdk-21"
export ANDROID_HOME="/absolute/path/to/Android/sdk"
export PATH="$JAVA_HOME/bin:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$PATH"
java -version
javac -version
node --version
npm --version
```

Common SDK defaults are `$HOME/Android/Sdk` on Linux and `$HOME/Library/Android/sdk` on macOS; the SDK Manager's displayed location is authoritative. On macOS with a registered JDK 21, `export JAVA_HOME="$(/usr/libexec/java_home -v 21)"` can select it.

If SDK packages/licenses were not already handled in Android Studio:

```sh
sdkmanager --licenses
sdkmanager --install "platforms;android-36" "build-tools;35.0.0" "platform-tools"
```

Then build:

```sh
npm ci
npm run sync:android
cd android
./gradlew --version
./gradlew --no-daemon assembleDebug
```

`./gradlew --version` must show **Gradle 8.14.3** and **JVM 21**. If an archive/file transfer lost the wrapper's executable bit, run `chmod +x gradlew` inside `android/` and retry.

The existing shortcut, from the app root after `npm ci`, is:

```sh
npm run apk:debug
```

It runs the web build, Capacitor sync, and `./gradlew assembleDebug`.

## 5. Exact terminal build: Windows PowerShell

From `premkumar-android-app/`, configure your paths (adjust the JDK path and SDK location to your installations):

```powershell
$env:JAVA_HOME = "C:\Path\To\jdk-21"
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
$env:Path = "$env:JAVA_HOME\bin;$env:ANDROID_HOME\cmdline-tools\latest\bin;$env:ANDROID_HOME\platform-tools;$env:Path"
java -version
javac -version
node --version
npm --version
```

If SDK packages/licenses were not already handled in Android Studio:

```powershell
& "$env:ANDROID_HOME\cmdline-tools\latest\bin\sdkmanager.bat" --licenses
& "$env:ANDROID_HOME\cmdline-tools\latest\bin\sdkmanager.bat" --install "platforms;android-36" "build-tools;35.0.0" "platform-tools"
```

Build:

```powershell
npm ci
npm run sync:android
cd android
.\gradlew.bat --version
.\gradlew.bat --no-daemon assembleDebug
```

The npm `apk:debug` shortcut uses the POSIX wrapper. Use the explicit `gradlew.bat` commands on Windows. Android Studio's Gradle JDK setting and terminal `JAVA_HOME` are separate; configure both when using both routes.

## 6. Output and verification

The expected output **only after a successful build** is:

```text
premkumar-android-app/android/app/build/outputs/apk/debug/app-debug.apk
```

Return to the app root first (`cd ..` if your terminal is still in `android/`). On Linux/macOS:

```sh
test -s android/app/build/outputs/apk/debug/app-debug.apk
ls -lh android/app/build/outputs/apk/debug/app-debug.apk
"$ANDROID_HOME/build-tools/35.0.0/apksigner" verify --verbose android/app/build/outputs/apk/debug/app-debug.apk
"$ANDROID_HOME/build-tools/35.0.0/aapt" dump badging android/app/build/outputs/apk/debug/app-debug.apk
```

On Windows PowerShell, from the app root:

```powershell
Test-Path .\android\app\build\outputs\apk\debug\app-debug.apk
Get-Item .\android\app\build\outputs\apk\debug\app-debug.apk
& "$env:ANDROID_HOME\build-tools\35.0.0\apksigner.bat" verify --verbose .\android\app\build\outputs\apk\debug\app-debug.apk
& "$env:ANDROID_HOME\build-tools\35.0.0\aapt.exe" dump badging .\android\app\build\outputs\apk\debug\app-debug.apk
```

Verify application ID `com.premkumar.technicians`, version `0.1.0` / code `1`, and minimum SDK `24`. Android tooling signs the debug APK automatically using a development debug key. No production/upload signing key is needed, and no AAB is generated by these commands.

For phone installation and testing, see [PHONE-TESTING.md](PHONE-TESTING.md). Building an APK does not by itself validate native link handling, Android Back behavior, keyboard resizing or the system photo picker; test these on a phone afterward.

## 7. Reproducibility and verified scope

On 2026-09-13, a clean copy of only this app's distributable source was created in an ignored verification directory. It contained no original website files, old `node_modules`, generated frontend bundle or copied Android assets. Using existing cached npm packages only:

- `npm ci --offline --no-audit --no-fund` succeeded from `package-lock.json`.
- `npm run check:config` succeeded.
- `npm run sync:android` rebuilt the frontend and regenerated native web assets, XML config, Capacitor plugin wiring and the Cordova compatibility module successfully.
- Required project files, Gradle module paths, package/namespace, version settings and XML were checked.
- The six original website files still match their recorded SHA-256 hashes.

This verifies a repeatable **dependency installation, frontend build and Capacitor preparation** from the standalone source. It is **not** a claim that native Java compilation, APK installation, or byte-identical APK reproducibility has been verified. The first actual native build is still pending on the external computer.

Generated files and machine-specific paths are intentionally ignored; they are recreated by the preparation commands. Do not delete source files or add a root-level website build setup to compensate for an omitted `npm ci` or `npm run sync:android` step.

## 8. Environment requirements still missing in this workspace

This sandbox lacks a full build-capable JDK 21, Gradle 8.14.3 distribution, SDK Platform 36, Build Tools 35.0.0, and cached Google/Maven native dependencies. A Java 21 runtime alone was obtainable, but it has no compiler. No further toolchain download attempts are part of this external-build handoff.

On your normal computer, first-time builds need network access to npm, your JDK vendor, Gradle distributions and redirects, Google's Android SDK/Maven repository (`dl.google.com`), and Maven Central (`repo.maven.apache.org`). Accept the SDK licenses and provide a writable SDK/cache directory. If your network requires an organizational proxy or Maven mirror, configure it locally; do not commit credentials or machine-specific settings.

Optional read-only local checks, from the app root with `JAVA_HOME` / `ANDROID_HOME` set:

```sh
npm run doctor:android
```

The repository integrity check `npm run verify:website` is optional and only applies in the original Git checkout. It is not a dependency of the standalone app build.
