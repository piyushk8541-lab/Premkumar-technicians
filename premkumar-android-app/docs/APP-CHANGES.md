# Scope, adaptations and preserved behavior

## Untouched source website

The six original repository files are protected by `website-baseline.json`, captured before app implementation from commit `31baa098959ccf22ea79d4716bb01f8c09b94eec`. All implementation files are under `premkumar-android-app/` on `arena/01a09a19-premkumar-technicians`. No commit, push, merge, production change or deployment settings change was performed.

The build uses `src/index.html` in this app folder, never the parent website file. Only the optional content-parity test and repository-integrity checker read the parent file.

## Deliberate app-only adaptations

1. Replace CDN scripts/styles/fonts in the copied HTML with a Vite module and locally packaged assets. Use Tailwind 3.4.19 with the same colors, font families, shadows and source classes; Alpine 3.17.2 pins the formerly floating 3.x dependency.
2. Keep the original markup, visible business wording, inline custom CSS, `siteData` object, service descriptions, prices, reviews and contact destinations intact.
3. Three existing WhatsApp form handlers become async and call `openAppLink` instead of `window.open`, so Android can dispatch HTTPS links reliably and a failed launch does not show a success message. The original message text (including the word “website”) is retained.
4. Intercept explicit HTTPS/tel/mailto anchor taps only on Android. Internal anchors continue to scroll within the app. HTTPS may open WhatsApp/Maps through Android App Links, or the browser; tel opens the dialer without CALL_PHONE permission; mailto uses ACTION_SENDTO. Unsupported schemes are rejected by the custom Java plugin.
5. Handle Android Back: close review/menu first, unfocus editable controls if necessary, navigate local history, scroll home, then minimize at the root. Add Escape support for the web preview.
6. Use Capacitor 8 SystemBars inset handling, a non-cover viewport and a light native theme to preserve the website's light/dark sections. The default inset handling keeps the web content clear of system bars on modern edge-to-edge Android. `adjustResize` accommodates the keyboard; actual device validation is pending.
7. Add only small WebView CSS accommodations: horizontal overflow containment for offscreen AOS animation transforms, input scroll margins, reduced-motion visibility, and safe-area padding where applicable. No business redesign.
8. Add an offline message inside the existing map container and restore the map iframe on reconnection. All core content/assets are local; Maps/WhatsApp remain network-dependent.
9. Replace new-project Capacitor icon/splash placeholders with PK artwork based on the existing monogram and blue/navy palette.
10. Disable cleartext traffic and native backup. No camera, contacts, storage, call or location runtime permissions are requested. Android's system file chooser is used for the existing optional review image input.

## Deliberately unchanged existing limitations

- Booking and review submission compose a WhatsApp message. The user presses Send. There is no backend/database, automatic booking confirmation or automatic review publication.
- Review file selection records the filename in the text only; manual attachment in WhatsApp remains required.
- Five card booking values are absent from the original booking dropdown: `Electrical Fitting`, `Fan/Light/Switch`, `AC Installation`, `Electronic Parts`, `Part Replacement`. These cards scroll to Contact, but users must select an available device/Other. No silent catalog/dropdown correction was made; an app-only correction requires separate approval.
- There are no owner photos in the repository. Existing CSS/text PK artwork is retained; missing photo/social-image placeholders are not invented.
- The developer's `https://example.com` placeholder, all credit text, original copyright year, review content/ratings and business claims are retained. The website README flags illustrative reviews for verification before public launch.
- GitHub Pages URLs in metadata and the Vercel sitemap discrepancy are not “fixed.” Metadata does not cause the native app to load the production site.

## Independence

No `server.url`, no remote web-app loader, no symlink/shared source, no automatic website-to-app updates, no root-level npm setup and no website deployment configuration. Sync/build only writes inside this app project's generated folders (normal system SDK/Gradle caches may be maintained by installed tools).

## Release boundary

Only a debug APK is targeted. No production signing keystore, upload key, Play Console setup, release credentials, AAB or store submission has been created.
