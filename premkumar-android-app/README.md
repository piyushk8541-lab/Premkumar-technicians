# Prem Kumar Technicians — independent Android app

A standalone Capacitor 8 Android application with a locally bundled copy of the website. **The original website is not a build input and is not modified.** This directory can be copied to another machine and built independently.

## Current status

- Web production build and Capacitor Android synchronization succeed.
- Automated browser tests cover preserved content, all service categories, forms, navigation, offline assets, and responsive layouts.
- The Android project, manifest, Gradle wrapper, PK icons/splash, and external-link plugin are implemented.
- **No APK has been built in this workspace:** a Java 21 runtime was obtained through PyPI, but the full JDK compiler, Android SDK, Gradle distribution and Maven dependencies remain unavailable. Required toolchain download hosts terminate connections. See [build status](docs/BUILD-STATUS.md).
- No final signing configuration or AAB has been prepared.

## Identity and compatibility

- Name: **Prem Kumar Technicians**
- Application ID: `com.premkumar.technicians`
- Version name/code: `0.1.0` / `1`
- Android minimum: **Android 7.0 (API 24)**; keep Android System WebView/Chrome updated.
- Compile/target SDK: **36**
- Android Build Tools: **35.0.0**, explicitly pinned
- Capacitor core, Android, CLI: **8.4.3**
- Capacitor App plugin: **8.1.1**
- Java: **JDK 21**; Node.js: **22 or newer**
- Gradle wrapper: **8.14.3**; Android Gradle Plugin: **8.13.0**

## Quick start

Run these commands **inside this directory**, never the website root:

```sh
npm ci
npm run build
npm run sync:android
```

For local web development: `npm run dev`. For a built-bundle preview: `npm run preview -- --port 4173`.

To build a debug APK after installing JDK 21 and the Android SDK:

```sh
npm run apk:debug
```

Expected output **after a successful build**:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

See [BUILDING.md](docs/BUILDING.md) for Android Studio, Windows, SDK configuration, and download requirements; see [PHONE-TESTING.md](docs/PHONE-TESTING.md) for installation/testing.

## Project boundaries

Only `premkumar-android-app/` is new. The six website files remain byte-for-byte identical to commit `31baa098959ccf22ea79d4716bb01f8c09b94eec`.

Work stays on `arena/01a09a19-premkumar-technicians`. No push, merge, deployment, GitHub Pages, Vercel, domain, or production configuration change has been made.

`npm run verify:website` checks original-file SHA-256 hashes, the branch, and change boundaries when run in the original checkout. This optional repository safeguard is not required to build the standalone app.

## Architecture

- `src/index.html`: independent website snapshot with the original content, layout, CSS and business data.
- `src/scripts/main.js`: local font/icon/library imports and Alpine startup.
- `src/scripts/native-integration.js`: link opening, Android Back, and offline map fallback.
- `src/styles/app.css`: Tailwind entry point and minimal WebView accommodations.
- `src/public/licenses/`: packaged dependency license notices.
- `android/`: native Android project; `ExternalLinksPlugin.java` opens the dialer, email client, and HTTPS App Links/browser.
- `tests/`: Playwright functional/content/responsive checks.
- `docs/`: build, testing, compatibility notes, and original-file baseline.

There is no production `server.url`, no shared frontend directory, and no live-update connection to the original website. CSS, JavaScript, fonts and icons are packaged in the application. Maps and external contact services require connectivity.

## Preserved behavior and known limitations

The app retains all 18 services, 28 brands, six reviews, pricing, forms, contact numbers, developer credit and placeholders. Booking/review submissions prepare a WhatsApp message; the user still needs to press **Send**. Reviews are not published automatically. A chosen review photo must still be attached manually in WhatsApp.

Five existing service-to-booking dropdown mismatches were deliberately not silently changed. See [APP-CHANGES.md](docs/APP-CHANGES.md).

## Tests

Start the built preview in one terminal:

```sh
npm run build
npm run preview -- --port 4173
```

Then in another:

```sh
npx playwright install chromium
npm test
```

On a Linux sandbox unable to download Playwright's browser, the npm-bundled Chromium alternative can be used:

```sh
PK_BUNDLED_CHROMIUM=1 npm test
```

The browser helper's extracted binaries stay in ignored `.cache/`, are not shipped in the app, and are not committed. Browser tests are **not** a substitute for physical Android testing.

## License

MIT, preserving the website's existing copyright. Third-party packages retain their respective licenses; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
