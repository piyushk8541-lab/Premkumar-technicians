# Approved Android launcher and splash artwork

`approved-icon.png` is the **byte-identical 1254 × 1254 PNG** uploaded as
`approved-icon..png` in Arena-branch commit `fb45a73`. The owner authorized moving
that newly uploaded root file here; none of the original website files was moved.

SHA-256: `16d1d187a305b816afe401c90cc9c257ebd0446dcd5643e7b9b1a53aa43095f9`

The latest approved image includes the plumbing symbol/word. It is preserved along
with all other artwork, lettering, original navy gradient, and white outer border.
This does **not** add a plumbing service to the app or change any page/catalog.
There is no redrawing, background removal, recoloring, stretching, or source crop.
Only proportional downscaling and external padding/masking are performed.

## Android configuration

- Manifest already references `@mipmap/ic_launcher` and
  `@mipmap/ic_launcher_round`; those references are intentionally unchanged.
- Both `app_name` and `title_activity_main` remain **Prem Kumar Technicians**.
- Legacy square and round PNGs cover mdpi, hdpi, xhdpi, xxhdpi and xxxhdpi:
  48, 72, 96, 144 and 192 px. The complete image occupies a centered 32dp square.
  A navy backing is used; only the round backing's outer corners are transparent.
- Existing `mipmap-anydpi-v26` adaptive XMLs serve Android 8+, including Android
  12+. Each uses a solid `#031735` navy background plus a transparent 108dp
  foreground canvas (108, 162, 216, 324 and 432 px). The complete source fits in a
  46dp square, whose diagonal is smaller than the 66dp adaptive safe circle.
- No separate monochrome/themed silhouette is invented from the approved image.
- All text is retained, but the detailed lettering will naturally be small at
  launcher sizes. Enlarging the complete artwork beyond safe bounds would clip
  it on circular/adaptive launchers; that is deliberately avoided.

## Native splash

`AppTheme.NoActionBarLaunch`, based on `Theme.SplashScreen`, uses the same navy
background and `@drawable/splash_icon`. Each density gets a 288dp transparent
canvas (288, 432, 576, 864 and 1152 px) with the full artwork centered in a 132dp
square. Its diagonal fits inside Android 12+'s 192dp safe circle for a splash
icon without an icon background. It is never scaled to fill/stretch across the
screen. The OS/AndroidX centers the same asset in portrait and landscape.

`SplashScreen.installSplashScreen(this)` is called before `super.onCreate` in
`MainActivity`, using the existing AndroidX core-splashscreen dependency. Android
12+ uses its native splash and Android 7–11 use the compatible theme. No splash
plugin, network call, timer, onboarding page, or extra permission is added. The
post-splash theme, bridge initialization, link plugin, and all frontend content
remain unchanged. Obsolete, unused PK splash bitmaps and Capacitor template
vectors were removed to avoid retaining contradictory branding.

## Reproduce and validate

From `premkumar-android-app/` with Node 22:

```sh
npm ci
npm run icons
npm run check:icons
npm run check:config
npm run verify:website
npm run sync:android
```

`check:icons` pins the approved PNG hash, checks all 20 generated PNGs against
regeneration, verifies density sizes and the complete resized image, checks every
nontransparent foreground pixel against Android's safe circles, and verifies
manifest/label/theme/splash wiring. The generator never writes frontend assets.

The existing Playwright suite still runs with `npm test` after starting the Vite
preview on port 4173. In constrained Linux environments use
`PK_BUNDLED_CHROMIUM=1 npm test` with the existing bundled-browser helper.

With JDK 21 and the project's Android SDK installed:

```sh
cd android
./gradlew :app:assembleDebug :app:testDebugUnitTest :app:lintDebug :app:assembleDebugAndroidTest
```

The owner-approved existing Android workflow runs these native checks and
`check:icons`, verifies the APK and app label, and uploads the APK plus reports.
Compiling the instrumentation APK is **not** device/emulator execution. Physical
launcher masks, splash transitions, and device functionality still need phone
validation. No release signing, AAB or Play publication is part of this update.
