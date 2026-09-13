# Third-party notices

The original website's MIT license is preserved in `LICENSE`. Complete redistribution notices for the bundled web runtime are included in `src/public/licenses/` and copied unchanged into the app by Vite/Capacitor.

| Component | Version | License / notice |
| --- | --- | --- |
| Capacitor core/Android | 8.4.3 | MIT (`capacitor-MIT.txt`, `capacitor-android-MIT.txt`) |
| Capacitor App | 8.1.1 | MIT (`capacitor-app-MIT.txt`) |
| Alpine.js | 3.17.2 | MIT (`alpine-MIT.txt`) |
| Vue reactivity/shared (Alpine dependencies) | See package-lock.json | MIT (`vue-*-MIT.txt`) |
| AOS | 2.3.4 | MIT (`aos-MIT.txt`) |
| lodash debounce/throttle (AOS dependencies) | See package-lock.json | MIT (`lodash-*-MIT.txt`) |
| classlist-polyfill (AOS dependency) | See package-lock.json | Unlicense (`classlist-Unlicense.txt`) |
| Tailwind generated CSS | 3.4.19 | MIT (`tailwind-MIT.txt`) |
| Font Awesome Free | 6.5.2 | Icons CC BY 4.0, fonts SIL OFL 1.1, code MIT (`fontawesome.txt`) |
| Poppins via Fontsource | 5.2.7 package | SIL OFL 1.1 (`poppins-OFL.txt`) |
| Noto Sans Devanagari via Fontsource | 5.2.8 package | SIL OFL 1.1 (`noto-sans-devanagari-OFL.txt`) |

Alpine's npm package omits a standalone license file; the preserved license was retrieved from the official `alpinejs/alpine` repository at tag `v3.17.2`.

Gradle/Android Gradle Plugin, AndroidX and Apache Cordova retain their upstream Apache-2.0/other applicable notices. Android dependency notice files are handled by their upstream AAR/JAR packaging; review the final dependency tree before a public release. No release has been prepared.

Vite, TypeScript, PostCSS, Autoprefixer, Sharp, Playwright, the optional bundled Chromium testing package and Capacitor CLI are development tools, not bundled web runtime modules. Their dependencies/licenses are tracked in package-lock.json. Chromium tooling and extracted native binaries are excluded from the APK and Git.

Google Maps and WhatsApp are external services, not copied/provided by this application. Their availability and terms are controlled by their respective providers. The app includes no owner photo or image not present in the original website; the new launcher/splash monogram is derived from the existing PK branding.
