# Implementation and build status

Date: 2026-09-13

## Implemented

Independent Capacitor Android app under `premkumar-android-app/`, on the existing branch `arena/01a09a19-premkumar-technicians`. Application ID `com.premkumar.technicians`; version `0.1.0` / code 1; minimum Android API 24, target/compile API 36.

The website snapshot is bundled locally, including original content, 18 services, all five filters, 28 brands, six reviews, form text and message formats, navigation, colors, animations, developer credits, and contact destinations. PK launcher/splash artwork and Android-specific integration are included. No backend, account system, new booking service, or production website dependency was introduced.

## Verified in this workspace

| Check | Result |
| --- | --- |
| Original-file SHA-256 baseline | PASS: all six original files unchanged |
| Working branch/change boundaries | PASS: correct branch; all new/changed files inside app directory |
| `npm run build` | PASS |
| `npx cap sync android` | PASS |
| `npm run check:config` | PASS |
| `npm audit` | 0 reported vulnerabilities |
| Android XML parsing | PASS: 12 XML files |
| Playwright web-bundle tests | **15 passed** |
| Debug APK build | **BLOCKED before compilation** |
| Native instrumentation tests | Not run; require SDK/JDK/device |
| Physical phone tests | Not run; APK unavailable |
| Final signed AAB | Not prepared/requested |

Browser tests were run with the built Vite preview and npm-bundled Chromium 143 on Linux. They validate the web frontend, not Android installation or native plugin execution. The map iframe is mocked/blocked in automated tests; actual Google Maps loading is not verified here. No real calls or WhatsApp messages were sent.

The test suite covers content/data parity; every service category; mobile menu and anchors; booking validation and encoded messages; failed-open status handling; review controls/form/photo filename workflow; contact destinations; external-asset independence/offline map fallback; the preserved dropdown mismatch; responsive layouts at 360/390/768/1280px; normal-motion AOS/card/counter behavior; and all 18 Book Now navigation actions.

## Latest toolchain recovery attempt (2026-09-13)

This was an additional installation/build attempt, not just a documentation update.

### Searches and installation routes checked

- Read-only root-filesystem search, including `/opt`, `/usr`, `/usr/local`, `/root`, `/home`, `/tmp`, caches and installed node dependencies. No pre-existing Java/JDK, Android SDK, `android.jar`, SDK manager or Gradle runtime was found. Only this project's Gradle wrapper/bootstrap JAR existed.
- Checked PATH, Java/SDK/Gradle environment variables, dpkg's installed packages, APT cache, and alternative package/container tools. No configured toolchain paths or cached APT packages/indexes were present. No Docker, Podman, Conda or existing repository Actions workflows were available.
- Ran APT update with its lists/cache directed into the app's ignored `.cache/` directory. Debian repository connections failed. No system packages were installed and no system source configuration was changed.
- Probed official Adoptium, OpenJDK, Azul, Corretto, Microsoft and Oracle download routes; Gradle distribution/Artifactory/GitHub-release routes; Google's SDK/Maven repositories; Maven Central; JetBrains/Huawei/Tencent alternatives; Debian/Ubuntu alternatives; Conda repositories and public container registries. The necessary binary/dependency hosts consistently terminated connections.
- Tried independent curl, wget, Node HTTPS and Java clients, IPv4/HTTP1.1 and TLS1.2 compatibility modes. Failures occur before successful TLS setup; TLS verification was never disabled.
- Inspected npm/PyPI package metadata rather than running arbitrary installers. The Android npm installer examined only provides adb/fastboot, not SDK Platform 36 or Build Tools. Small Gradle packages are wrappers, not the actual Gradle distribution.
- Checked AOSP prebuilt mirrors accessible through GitHub. The examined JDK21 mirror was empty and the accessible SDK build-tools mirror contained 30.0.3, not the required toolchain. No obsolete/unverified SDK was substituted and the app's target/Capacitor versions were not downgraded.

### Partial success: Java 21 runtime obtained

Downloaded `jdk4py-21.0.8.2-py3-none-manylinux_2_17_x86_64.whl` through the accessible PyPI file service and verified its SHA-256 against PyPI package metadata:

```text
85addfcb57c7051dad6145b9f816fc519337e9a0c705ef01edc9dc7818ee0356
```

Extracted only within the app's ignored cache:

```text
.cache/toolchain/jdk4py/jdk4py/java-runtime
```

`java --version` reports OpenJDK/Temurin **21.0.8**. However, neither `bin/javac` nor `jdk.compiler` exists. `java.compiler` is only the compiler API, not its implementation. An older Java 21 package was also examined and has the same compiler limitation. These packages do not provide a full JDK suitable for the Android compilation. Cached tools are not Git artifacts and may need redownloading if the sandbox is recreated.

### Actual Gradle build retried

With the available runtime, the original app wrapper was invoked again:

```sh
export JAVA_HOME="$PWD/.cache/toolchain/jdk4py/jdk4py/java-runtime"
export GRADLE_USER_HOME="$PWD/.cache/toolchain/gradle-home"
export PATH="$JAVA_HOME/bin:$PATH"
cd android
./gradlew --no-daemon assembleDebug
```

It now gets past Java startup and exits with status 1 during distribution download:

```text
Downloading https://services.gradle.org/distributions/gradle-8.14.3-bin.zip
Exception in thread "main" javax.net.ssl.SSLHandshakeException:
Remote host terminated the handshake
Caused by: java.io.EOFException: SSL peer shut down incorrectly
```

The authenticated GitHub API could read the official Gradle release metadata, but downloading the release asset redirected to `release-assets.githubusercontent.com`, whose connection also terminated. Thus the Gradle distribution itself did not install and Android compilation did not start.

### Precisely what is still missing

| Requirement | State |
| --- | --- |
| Complete JDK 21, including javac and jdk.compiler | Missing; runtime only obtained |
| Gradle 8.14.3 distribution | Missing; wrapper bootstrap exists |
| Android SDK Platform 36 (`platforms/android-36/android.jar` and platform metadata) | Missing |
| Android Build Tools 35.0.0 (including aapt/aapt2, zipalign, apksigner/d8 and supporting files) | Missing |
| Android command-line tools/sdkmanager | Missing; needed for normal SDK installation, not inherently required once a complete SDK is supplied |
| AGP 8.13.0 and all Google/Maven transitive build/runtime dependencies | Not cached; repositories unreachable |

### Is another workspace-local build route available?

No working complete route was found with the current installed tools and network access. Two concrete ways can unblock a build **in this workspace** without changing the website:

1. Restore outbound HTTPS access to the JDK vendor, Gradle distribution hosts/redirects, Google's SDK/Maven repository, and Maven Central. Then install the tools under this app's cache and run the normal build.
2. Supply a trusted **Linux x86-64 offline toolchain bundle**: full JDK 21, Gradle 8.14.3, complete SDK Platform 36/Build Tools 35.0.0, plus an already-populated compatible Gradle/Maven dependency cache (or a reachable internal Maven mirror). Uploading only Java or an SDK zip is insufficient while all dependencies remain inaccessible. Then use an offline Gradle build.

Remote CI is a separate alternative, not a workspace-local build. There is no existing Actions workflow to dispatch. Creating one in this repository's root `.github/` would violate the current app-directory-only boundary; no workflow, push or remote build was created.

## APK verification

After the actual build retry, the following requested file was explicitly checked and **does not exist**:

```text
premkumar-android-app/android/app/build/outputs/apk/debug/app-debug.apk
```

No APK has been fabricated, renamed from a ZIP or advertised as installable. Native compilation/device testing remain pending. The separate web/frontend tests from the prior implementation remain valid but cannot substitute for an APK build.

Diagnostic output is retained under ignored `.cache/toolchain/probes/`; `npm run doctor:android -- --network` provides a reproducible read-only toolchain/network check.

No commit, push, merge, domain, GitHub Pages, Vercel, production setting change, release signing key, AAB, or store submission was made.

## External-build handoff verification (2026-09-13)

No further network/toolchain download attempts were made for this handoff. App runtime code, Java, manifest and resources were left unchanged. The only native build configuration adjustment was to explicitly pin `buildToolsVersion = "35.0.0"` in `android/app/build.gradle`.

A fresh standalone copy of the distributable source, without parent website files or pre-existing dependencies/generated assets, passed cached/offline `npm ci`, the Capacitor configuration type-check, and `npm run sync:android`. The generated assets/plugin wiring, referenced Gradle modules, package/namespace, Java 21 compile targets, Gradle 8.14.3 wrapper, SDK 36 and Build Tools 35.0.0 settings were checked. The Gradle wrapper JAR is present and readable. The original website hash verification passed again.

`BUILDING.md` now contains complete Android Studio steps, full JDK/SDK environment setup, separate POSIX and Windows PowerShell build commands, and post-build APK existence/signature/package checks. This establishes reproducible source preparation, not a successful native compilation or a byte-identical APK guarantee. The actual APK remains absent; no AAB or release signing was prepared.
