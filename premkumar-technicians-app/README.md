# Prem Kumar Technicians — Standalone Android Mobile Application

A brand-new, standalone Android application designed and developed from scratch for **Prem Kumar Technicians, Darbhanga, Bihar**.

---

## 1. Absolute Website Protection & Repository Architecture

This application is completely isolated from the existing website:

```
Premkumar-technicians/
├── .nojekyll                  # [EXISTING WEBSITE - UNTOUCHED]
├── LICENSE                    # [EXISTING WEBSITE - UNTOUCHED]
├── README.md                  # [EXISTING WEBSITE - UNTOUCHED]
├── index.html                 # [EXISTING WEBSITE - UNTOUCHED]
├── robots.txt                 # [EXISTING WEBSITE - UNTOUCHED]
├── sitemap.xml                # [EXISTING WEBSITE - UNTOUCHED]
├── vercel.json                # Vercel branch deployment guard
│
└── premkumar-technicians-app/  # DEDICATED ANDROID APPLICATION
    ├── android/               # Native Android Gradle Project (Capacitor 8.4.3)
    │   ├── app/               # Application module (Manifest, Java, Resources)
    │   ├── gradle/            # Gradle wrapper (8.14.3)
    │   └── build.gradle       # Root build configuration
    ├── resources/             # High-res approved brand icon & splash source
    ├── src/                   # Standalone Mobile App Frontend
    │   ├── components/        # Self-contained SVG icon registry
    │   ├── data/              # Verified business data (18 services, reviews, pricing)
    │   ├── styles/            # Mobile-first Tailwind styling & safe-area insets
    │   └── app.js             # Core reactive app logic, routing & intents
    ├── scripts/               # Icon generator & website hash integrity verifier
    ├── tests/                 # Automated unit and integration test suite
    ├── capacitor.config.json  # Capacitor native app configuration
    ├── package.json           # Isolated dependencies & scripts
    └── README.md              # Application documentation
```

### Hash Verification
All 6 original website files in the repository root are strictly preserved:
- `.nojekyll` (SHA256: `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`)
- `LICENSE` (SHA256: `e2b44cc4d52bc806c97c4097377a971db4a4ac997ba693fe8ecf25cb4995adb6`)
- `README.md` (SHA256: `a3532e5d1cd4347945f398d3c95980d6378700aa1f89cff28c13f87799784ae1`)
- `index.html` (SHA256: `9a7f189352bd8d1c526c245507c3e836dcd8eb98370355175aa2cfefdbab33d9`)
- `robots.txt` (SHA256: `e6dc0d29c7c6896e38f1544e0069f1ce093ab8bfa8c03bded05e06aab155acf6`)
- `sitemap.xml` (SHA256: `cfb13ffec45f0210d955718fb2d178fb2a4c3bfff56aa6ad93cbd7037e74db7b`)

---

## 2. Product Philosophy: Real Mobile App vs Website

| Aspect | Existing Website | New Android Application |
|---|---|---|
| **Product Purpose** | Promotional desktop/mobile web page | Dedicated service companion & booking app |
| **Navigation** | Sticky desktop navbar with anchor links | 5-Tab Native Bottom Navigation Bar |
| **Visual Identity** | Cyan/blue light gradient layout | Deep Navy (`#0F2042`), Amber Gold (`#F59E0B`), and Emerald (`#10B981`) |
| **Booking UX** | Single HTML form at page bottom | 5-Step Guided Booking Wizard with Local History |
| **Offline Support** | Requires internet connection | 100% self-contained offline standalone UI |
| **Hardware Back Button** | Handled by web browser | Custom Android back-button stack (modals → tabs → exit) |
| **External Actions** | Simple web links | Native Android `ACTION_DIAL`, WhatsApp & Google Maps intents |

---

## 3. App Information Architecture

### Bottom Navigation Bar (5 Tabs)
1. 🏠 **Home**:
   - Availability status: *"🟢 Available Today (9 AM - 8 PM) · Darbhanga"*
   - Quick action bar: **Call Now**, **WhatsApp Chat**, **Book Visit**
   - Transparent Zone Pricing Card: Zone A (Free < 3km) vs Zone B (₹300)
   - Popular Services Quick-Book Grid (Fridge, TV, Washing Machine, AC, Wiring, Motor Pump)
   - Why Choose Us (10+ Years Experience, 6 Months Warranty, Under 24h Resolution, Zero Hidden Charges)
   - How It Works (4-Step process)
   - Verified Reviews preview (4.9⭐ rating)
   - 24/7 Emergency call banner

2. 🛠️ **Services (All 18 Services)**:
   - Instant real-time search filtering across names, Hindi titles, and problem descriptions
   - Category filter pills: *All (18)*, *Appliance Repair (9)*, *Electrical Work (4)*, *Installation (3)*, *Parts (2)*
   - Full service cards with Hindi colloquial subtitles
   - Detailed Service Bottom Sheet:
     - Full diagnosis checklist
     - Supported appliance types & brands
     - Transparent pricing note & 6 Months Warranty badge
     - Direct Action Buttons: "Book This Service", "Call Prem Kumar", "WhatsApp Enquiry"

3. 📅 **Bookings**:
   - **Guided Booking Wizard**:
     - Step 1: Select Service (all 18 services prefilled)
     - Step 2: Device Brand & Model
     - Step 3: Problem Description
     - Step 4: Service Zone & Complete Address in Darbhanga
     - Step 5: Schedule Preference (Today / Tomorrow / Pick Date + Morning / Afternoon / Evening slot)
     - Step 6: Customer Name & Mobile Number
     - Review Summary Card with transparent visit fee estimate
     - Send Booking via WhatsApp (preformatted message)
   - **My Bookings Tab**:
     - Local storage history of all past bookings placed on the device
     - Re-book and follow-up status tracking

4. ⭐ **Reviews**:
   - Overall rating banner: 4.9 ⭐ based on 500+ satisfied clients
   - Star breakdown bars (5★ 92%, 4★ 7%, 3★ 1%)
   - 6 Verified Darbhanga Customer Testimonials (Ramesh Yadav, Sunita Devi, Amit Kumar, Pooja Singh, Rajesh Mishra, Neha Kumari)
   - Interactive "Rate Us" submission flow directly to Prem Kumar on WhatsApp

5. 👤 **Profile / More**:
   - Prem Kumar's story, 10+ years background, and motto: *"Koi bhi electronic cheez kharab nahi hoti, bas sahi haath chahiye."*
   - Service Area Breakdown & Google Maps shop locator
   - 28 Supported Brands Showcase (Samsung, LG, Whirlpool, Godrej, Voltas, Daikin, etc.)
   - Shop working hours & 24/7 emergency support details
   - App developer credits: **Piyush Kumar** (Phone/WhatsApp: 9234610543)
   - Version & Standalone Offline Status indicator

---

## 4. Technical Details & Build Configuration

- **Application ID**: `com.premkumar.technicians`
- **Application Name**: `Prem Kumar Technicians`
- **Framework**: Capacitor 8.4.3
- **Minimum Android SDK**: 24 (Android 7.0 Nougat)
- **Target Android SDK**: 36 (Android 15)
- **Compile Android SDK**: 36
- **Build Tools Version**: 35.0.0
- **Gradle Version**: 8.14.3
- **Android Gradle Plugin**: 8.13.0
- **Assets**: Zero external CDN runtime dependencies; 100% self-contained vector SVGs & bundled stylesheets.

---

## 5. Development & Testing Commands

Inside `premkumar-technicians-app/`:

```bash
# Install isolated dependencies
npm install

# Start local mobile preview dev server
npm run dev

# Run automated test suite
npm test

# Verify original website files remain 100% untouched
node scripts/verify-website-unchanged.mjs

# Generate all 20 Android launcher and splash icon assets
npm run icons

# Build production web bundle
npm run build

# Synchronize web assets with native Android project
npm run sync:android
```

---

## 6. Business Contact Summary

- **Business**: Prem Kumar Technicians
- **Owner / Technician**: Prem Kumar
- **Phone / Call**: `082710 46196` (`+918271046196`)
- **WhatsApp**: `918271046196`
- **Email**: `Premdbg06272@gmail.com`
- **Address**: Laxmi Sagar, Gas Godown, Darbhanga, Bihar - 846004
- **Working Hours**: Mon – Sun: 9:00 AM – 8:00 PM (All 7 Days Open)
- **App Developer**: Piyush Kumar (Phone/WhatsApp: 9234610543)
