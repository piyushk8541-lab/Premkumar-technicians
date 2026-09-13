# Testing on an Android phone

**An APK must first be built successfully. No APK exists in the current workspace yet.** A browser preview is not an installed Android app.

## Install an APK once available

### Transfer/install

1. Obtain `android/app/build/outputs/apk/debug/app-debug.apk` from the successful build.
2. Transfer it to a phone running Android 7.0 or newer using USB, a trusted file-transfer method, or a download link.
3. Open it in Files/Downloads.
4. If prompted, allow **Install unknown apps** for that trusted file manager/browser.
5. Install **Prem Kumar Technicians**, then turn off the unknown-app installation permission again if desired.
6. Keep Android System WebView/Chrome updated.

Android/Play Protect may flag a sideloaded development build. Verify its source/checksum; do not broadly disable device protections or install untrusted APKs.

### USB/ADB

On a computer physically connected to the phone, enable Developer options and USB debugging, authorize the computer, then:

```sh
adb devices
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
adb shell am start -n com.premkumar.technicians/.MainActivity
```

The remote workspace cannot directly access your phone's USB port. If an existing installation uses a different signing key, an update may be rejected. Uninstalling the old test app removes its local app data; only do so intentionally.

## Functional checklist

- Cold launch online, then airplane-mode cold launch: text, styling, icons, fonts, cards and menus must remain available offline.
- Home, Services, Why Us, How It Works, Reviews, About, Contact, pricing, service area and developer/footer sections.
- Compare colors, original text, gradients, typography and layout against the original mobile website.
- All five filters and 18 services; all Book Now buttons scroll to Contact. See the five preserved dropdown mismatches in APP-CHANGES.md.
- Announcement dismiss, sticky header, scroll progress, counters, back-to-top, marquee, floating WhatsApp and call bar.
- Booking required-field validation; valid input prepares the expected WhatsApp message. Use test data. Do not send a test message without the business owner's agreement.
- Previous/next/dot/automatic review navigation; review modal, star selection, service list and form.
- Review image picker opens and cancels correctly. Selected image filename appears in the prepared message, but the image must be manually attached in WhatsApp.
- Call buttons open the correct number in the dialer; they must not automatically place calls.
- Business and developer WhatsApp links work. Test with WhatsApp absent: the link should use a browser if available or explain that no handler is available.
- Email, Maps and the existing portfolio placeholder open outside the app, never replace the app's local main document.
- Offline map message and recovery after reconnecting. Live Google Maps rendering needs actual device/network verification.
- Android Back closes a review dialog/menu before navigating back; at the top-level screen it minimizes the app.
- Keyboard does not cover focused fields or prevent submission; photo chooser/system keyboard Back behavior.
- Status/navigation bars, display cutouts, portrait/landscape, gesture/three-button navigation and large text.
- Return from WhatsApp/dialer/Maps; background/foreground; low-memory process recreation (unsubmitted forms are not persisted, matching the original site).
- TalkBack navigation and reduced-motion settings.

## Results to record

Phone model, Android version, WebView version, APK checksum, steps, expected/actual result and screenshot. Browser tests do not validate Java intent dispatch, Android Back delivery, keyboard resizing, native file picking or installation. These remain pending until an APK can be built and installed.
