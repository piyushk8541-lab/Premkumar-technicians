/**
 * Prem Kumar Technicians - Darbhanga
 * Business Data Source
 * Verified information extracted from business presence.
 */

export const BUSINESS_INFO = {
  name: 'Prem Kumar Technicians',
  tagline: 'Koi bhi electronic cheez kharab nahi hoti, bas sahi haath chahiye.',
  founder: 'Prem Kumar',
  phone: '082710 46196',
  phoneClean: '918271046196',
  phoneTel: '+918271046196',
  whatsappNumber: '918271046196',
  email: 'Premdbg06272@gmail.com',
  address: 'Laxmi Sagar, Gas Godown, Darbhanga, Bihar - 846004',
  coordinates: {
    lat: 26.1542,
    lng: 85.8918,
  },
  hours: 'Monday – Sunday: 9:00 AM – 8:00 PM (All 7 Days Open)',
  emergencyNote: 'Emergency & Urgent calls accepted 24/7 on phone',
  coverageArea: 'All Darbhanga District (Zone A & Zone B)',
  experience: '10+ Years',
  ratingValue: '4.9',
  reviewCount: '500+',
  completedVisits: '1,000+',
  warrantyPeriod: '6 Months Warranty',
  developer: {
    name: 'Piyush Kumar',
    role: 'Website & Mobile App Developer',
    phone: '9234610543',
    phoneClean: '919234610543',
  },
};

export const PRICING_ZONES = [
  {
    id: 'zone-a',
    name: 'Zone A',
    subtitle: 'Under 3 KM of Laxmi Sagar',
    area: 'Laxmi Sagar, Bela, Donar, Beta, and all localities within 3 KM',
    visitCharge: 'FREE (₹0)',
    diagnosisCharge: 'FREE (₹0)',
    badge: 'BEST VALUE · 100% FREE VISIT',
    highlight: true,
    description: 'Zero home visit charge. The technician inspects your device for free and gives an upfront transparent estimate before any repair work starts.',
  },
  {
    id: 'zone-b',
    name: 'Zone B',
    subtitle: 'Beyond 3 KM — Anywhere in Darbhanga',
    area: 'Laheriasarai, Bahadurpur, Kakarghatti, Mabbi, Ekmi, and all Darbhanga',
    visitCharge: '₹300 Only',
    diagnosisCharge: 'Included in Visit',
    badge: 'ALL DARBHANGA COVERAGE',
    highlight: false,
    description: 'Flat ₹300 one-time home visit and on-spot diagnosis charge anywhere in Darbhanga district. Repair charges depend on the exact fault and parts needed.',
  },
];

export const SERVICE_CATEGORIES = [
  { id: 'All', label: 'All Services', count: 18 },
  { id: 'Appliance Repair', label: 'Appliance Repair', count: 9 },
  { id: 'Electrical Work', label: 'Electrical Work', count: 4 },
  { id: 'Installation', label: 'Installation', count: 3 },
  { id: 'Parts', label: 'Parts & Spares', count: 2 },
];

export const SERVICES = [
  {
    id: 'fridge',
    name: 'Fridge / Refrigerator Repair',
    hindi: 'Fridge thanda nahi kar raha?',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    icon: 'snowflake',
    badge: 'Popular',
    description: 'All brands and models. Gas filling, compressor repair, thermostat, cooling coil, door gasket, and PCB replacement.',
    problems: [
      'Cooling nahi kar raha / Ice jamna band ho gaya',
      'Compressor start nahi ho raha ya awaz kar raha hai',
      'Gas leak / Refrigerant gas charging required',
      'Freezer me abnormal baraf jamna',
      'Door seal loose / Cold air leakage',
      'Inverter refrigerator PCB repair'
    ],
    supportedTypes: ['Single Door', 'Double Door', 'Side by Side', 'Deep Freezer', 'Inverter Models'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Repair charges quoted upfront after physical check.',
    warranty: '6 Months Warranty on replaced parts and repair.'
  },
  {
    id: 'tv',
    name: 'TV Repair (LED / Smart / CRT)',
    hindi: 'LED se CRT tak TV repair',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    icon: 'tv',
    badge: 'Fast Service',
    description: 'LED, LCD, Smart, Android, and CRT TVs. Display backlight, motherboard, HDMI, WiFi, power supply, and sound issues.',
    problems: [
      'Screen blank hai lekin audio/sound aa rahi hai',
      'TV power on nahi ho raha (Red light blinking / dead)',
      'Display screen pe horizontal ya vertical lines',
      'Sound distorted / speaker crackling / No sound',
      'Smart TV WiFi connect nahi ho raha ya reboot loop',
      'HDMI port display detect nahi kar raha'
    ],
    supportedTypes: ['Smart TV', 'Android TV', 'LED TV', 'QLED / OLED', 'CRT TV'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Quote provided before opening device.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine Repair',
    hindi: 'Kapde dhone wali machine specialist',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    icon: 'rotate',
    badge: 'Expert Team',
    description: 'Top load, front load, and semi-automatic washing machines. Motor, drum, drainage, timer, spin cycle, water inlet, and PCB board.',
    problems: [
      'Spin dryer nahi ghoom raha ya ruk jata hai',
      'Pani drain nahi ho raha / Pump blocked',
      'Machine spinning ke dauran tez awaz aur vibration karti hai',
      'Water inlet valve se pani nahi aa raha',
      'Control panel pe error code blinking',
      'Semi-auto timer ya belt toot gaya hai'
    ],
    supportedTypes: ['Top Load Automatic', 'Front Load Automatic', 'Semi-Automatic', 'All Drum Sizes'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Parts billed at transparent MRP.',
    warranty: '6 Months Warranty on all repairs.'
  },
  {
    id: 'ac',
    name: 'AC Repair & Service',
    hindi: 'AC ki cooling wapas laayein',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    icon: 'wind',
    badge: 'Summer Essential',
    description: 'Split, window, and inverter AC. Gas charging, compressor, PCB, cooling issues, water leak, installation, and uninstallation.',
    problems: [
      'AC chalu hai par room thanda nahi ho raha',
      'Indoor unit se pani tapak raha hai (Drain choke)',
      'Compressor bar bar trip ho raha hai',
      'Gas leak test aur gas filling (R32 / R410 / R22)',
      'Indoor fan ya outdoor unit awaz kar raha hai',
      'Deep jet pump foam cleaning service required'
    ],
    supportedTypes: ['Split AC', 'Window AC', 'Inverter 5-Star AC', 'Cassette AC'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Transparent gas & servicing rates.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'cooler',
    name: 'Air Cooler Repair',
    hindi: 'Desert cooler ka complete solution',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    icon: 'fan',
    badge: '',
    description: 'Motor, pump, pad change, swing motor, and wiring ka reliable repair for plastic and sheet metal coolers.',
    problems: [
      'Fan motor jam hai ya slow speed me chal rahi hai',
      'Water submersible pump pani upar nahi fek raha',
      'Swing louvers motor kharab ho gayi hai',
      'Body me current / earthing problem',
      'Honeycomb / Wood wool cooling pads replacement'
    ],
    supportedTypes: ['Desert Cooler', 'Tower Cooler', 'Window Cooler', 'Personal Cooler'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'microwave',
    name: 'Microwave Oven Repair',
    hindi: 'Microwave phir se garam karega',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    icon: 'fire',
    badge: '',
    description: 'Solo, Grill, and Convection microwave ovens. Magnetron, fuse, turntable motor, door switch, and timer repair.',
    problems: [
      'Device on hota hai par khana garam nahi karta',
      'Glass turntable plate rotate nahi ho rahi',
      'Chalu karte hi sparking ya smoke smell aana',
      'Touchpad keys press nahi ho rahe',
      'Chalu karte hi ghar ka MCB trip hona'
    ],
    supportedTypes: ['Solo Microwave', 'Grill Microwave', 'Convection Microwave'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'geyser',
    name: 'Geyser / Water Heater',
    hindi: 'Geyser repair aur installation',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    icon: 'flame',
    badge: '',
    description: 'Element, thermostat, tank leakage, safety valve, wiring, and fresh installation service.',
    problems: [
      'Pani bilkul garam nahi ho raha (Element fault)',
      'Pani bohot kam garam ho raha hai',
      'Geyser switch on karte hi short-circuit / trip',
      'Tank ya inlet connection se water leakage',
      'Thermostat temperature cut-off nahi kar raha'
    ],
    supportedTypes: ['Storage Geyser (10L/15L/25L)', 'Instant Geyser', 'Gas Water Heater'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'kitchen-appliance',
    name: 'Kitchen Appliances',
    hindi: 'Mixer, induction, chimney repair',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    icon: 'utensils',
    badge: '',
    description: 'Motor rewinding, switch, jar coupling, blade, and common kitchen appliance faults.',
    problems: [
      'Mixer grinder motor se smell / sparking',
      'Mixer jar coupling aur teeth tooth gaya',
      'Induction cooktop error code E0, E1, E2',
      'Kitchen chimney motor jam / suction band',
      'Electric kettle auto-cutoff problem'
    ],
    supportedTypes: ['Mixer Grinder', 'Induction Stove', 'Kitchen Chimney', 'Electric Kettle', 'Juicer'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'inverter-battery',
    name: 'Inverter & Battery Repair',
    hindi: 'Backup ki problem ka solution',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    icon: 'battery',
    badge: '',
    description: 'Battery replacement, charging issue, continuous beeping, backup problems, and inverter PCB faults.',
    problems: [
      'Electricity jaane par inverter load nahi le raha',
      'Battery charging indicator full nahi dikha raha',
      'Inverter lagatar beep alarm kar raha hai',
      'Backup time 15-20 minute me khatam ho jata hai',
      'Mosfet / Transformer / Charging relay fault'
    ],
    supportedTypes: ['Sine Wave Inverter', 'Square Wave Inverter', 'Tubular Battery', 'Solar Inverter'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'complete-wiring',
    name: 'Complete Wiring',
    hindi: 'House, shop aur industrial wiring',
    category: 'Electrical Work',
    shortCategory: 'Electrical',
    icon: 'plug',
    badge: 'Full Solution',
    description: 'House, shop, and industrial spaces ke liye safe, neat, and complete wiring with earthing protection.',
    problems: [
      'Naye makan ki complete concealed wall conduit wiring',
      'Purane ghar ki rewiring aur short circuit prevention',
      'Chemical copper earthing pit installation',
      'Heavy appliance ke liye separate 2.5mm / 4mm power circuits',
      'Commercial shop & showroom lighting wiring'
    ],
    supportedTypes: ['Residential Homes', 'Commercial Shops', 'Offices & Godowns', 'Industrial Units'],
    pricingInfo: 'Zone A: Free on-site inspection. Contract or per-point transparent rates.',
    warranty: '6 Months Workmanship Warranty.'
  },
  {
    id: 'mcb-db-board',
    name: 'MCB / RCCB / DB Board',
    hindi: 'Protection board installation',
    category: 'Electrical Work',
    shortCategory: 'Electrical',
    icon: 'shield',
    badge: 'Safety',
    description: 'MCB, RCCB, and DB board ki installation, repair, and replacement for electric shock and short-circuit protection.',
    problems: [
      'Ghar ka MCB bina vajah trip ho raha hai',
      'Main distribution board busbar ya neutral burn ho gaya',
      'Human shock protection ke liye RCCB / ELCB installation',
      'Phase selector / Rotary switch / Changeover setup',
      'Single phase to Three phase DB distribution'
    ],
    supportedTypes: ['Single Pole MCB', 'Double Pole Isolator', '4-Pole RCCB', 'Distribution Enclosures'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'electrical-fitting',
    name: 'Electrical Fitting & Fixture',
    hindi: 'Har type ki electrical fitting',
    category: 'Electrical Work',
    shortCategory: 'Electrical',
    icon: 'lightbulb',
    badge: '',
    description: 'All types of electrical fittings, modular switches, chandeliers, profile lights, and wiring accessories.',
    problems: [
      'Modular switch board loose hai ya spark kar raha hai',
      'Ceiling pop false ceiling profile LED strip installation',
      'Chandelier / Jhoomar fitting with safe hook',
      'Bathroom and kitchen waterproof fixtures',
      'Heavy power plug socket replacement'
    ],
    supportedTypes: ['Modular Switch Plates', 'Decorative Lights', 'Profile Strip Lights', 'Power Outlets'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'motor-pump',
    name: 'Motor Pump Repair',
    hindi: 'Submersible aur monoblock pump',
    category: 'Electrical Work',
    shortCategory: 'Electrical',
    icon: 'pump',
    badge: '',
    description: 'Submersible and monoblock motor pump ka diagnosis, rewinding, starter repair, and servicing.',
    problems: [
      'Motor chalu hai lekin boring se pani nahi aa raha',
      'Starter box capacitor ya relay jal gaya hai',
      'Motor pump jam ho gayi hai aur humming noise kar rahi hai',
      'Copper coil rewinding needed after water damage',
      'Automatic water tank level controller setup'
    ],
    supportedTypes: ['Submersible Pump (0.5HP - 3HP)', 'Monoblock Self-Priming', 'Jet Pump'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'cctv',
    name: 'CCTV Installation & Repair',
    hindi: 'Ghar aur shop ki security',
    category: 'Installation',
    shortCategory: 'Install',
    icon: 'camera',
    badge: 'Security',
    description: 'CCTV camera installation, wiring, DVR setup, mobile phone live view, and repair support.',
    problems: [
      'Naya CCTV security system setup ghar ya dukaan ke liye',
      'Mobile app par cameras offline show ho rahe hain',
      'DVR me hard disk recording stop ho gayi hai',
      'Camera display me blur, flicker, ya black screen',
      'Night vision infrared LEDs work nahi kar rahe'
    ],
    supportedTypes: ['Dome Camera (Indoor)', 'Bullet Camera (Outdoor)', 'WiFi 360 Smart Camera', '4Ch/8Ch DVR'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'fan-light-switch',
    name: 'Fan, Light, Switch Installation',
    hindi: 'Quick home electrical work',
    category: 'Installation',
    shortCategory: 'Install',
    icon: 'toggle',
    badge: 'Quick Fix',
    description: 'Fan, light, switch, and fixture installation with clean finishing and sturdy mounting.',
    problems: [
      'Ceiling fan naya lagwana ya purana replace karna',
      'BLDC energy saving fan with remote setup',
      'LED tubelight / Batten mounting',
      'Exhaust fan installation in glass / wall cut',
      'Wall bracket fan hanging and connection'
    ],
    supportedTypes: ['Ceiling Fans', 'BLDC Fans', 'LED Battens', 'Exhaust Fans', 'Spotlights'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'ac-installation',
    name: 'AC Installation & Uninstallation',
    hindi: 'Safe AC shifting service',
    category: 'Installation',
    shortCategory: 'Install',
    icon: 'wrench',
    badge: 'Careful Shifting',
    description: 'Split, window, and inverter AC ki safe installation and uninstallation with vacuum test and gas protection.',
    problems: [
      'Purane flat se AC safe dismantling with gas locked inside',
      'Naye address par indoor & outdoor bracket mounting',
      'Copper pipe flaring, insulation, and electrical cabling',
      'Core hole cutting on brick wall for pipe routing',
      'Vacuuming and gas leakage soap testing'
    ],
    supportedTypes: ['Split AC 1 Ton - 2 Ton', 'Window AC All Sizes', 'Multi-Split Systems'],
    pricingInfo: 'Fixed affordable packages for Installation & Uninstallation.',
    warranty: '6 Months Installation Workmanship Warranty.'
  },
  {
    id: 'electronic-parts',
    name: 'All Electronic Parts',
    hindi: 'Original aur compatible parts',
    category: 'Parts',
    shortCategory: 'Parts',
    icon: 'chip',
    badge: 'Genuine Spares',
    description: 'All electronic parts available — original brand parts and tested high-quality compatible options.',
    problems: [
      'Specific model number ka appliance spare part chahiye',
      'Capacitors, relays, thermostats, and sensors',
      'Drain pumps, motors, and copper tubing',
      'Original appliance remote controls',
      'Appliance replacement hardware & fasteners'
    ],
    supportedTypes: ['OEM Original Parts', 'Grade-A Tested Spares', 'Electrical Accessories'],
    pricingInfo: 'MRP transparent pricing with bill.',
    warranty: '6 Months Replacement Warranty on genuine spares.'
  },
  {
    id: 'part-replacement',
    name: 'Part Replacement — All Brands',
    hindi: 'Kisi bhi model ka part change',
    category: 'Parts',
    shortCategory: 'Parts',
    icon: 'refresh',
    badge: 'Doorstep',
    description: 'All brands and models ke faulty part ki on-site replacement service with quality check and testing.',
    problems: [
      'Kharab part ko nikal kar naya part lagwana',
      'Washing machine gear box / Pulsator change',
      'Refrigerator compressor & relay kit replacement',
      'LED TV backlight strips set replacement',
      'Microwave magnetron & high-voltage diode replacement'
    ],
    supportedTypes: ['All Appliance Parts', 'All Electronics Components'],
    pricingInfo: 'Upfront estimate of part cost + installation. Old faulty part returned to customer.',
    warranty: '6 Months Warranty on replaced part.'
  }
];

export const TRUST_FEATURES = [
  {
    icon: 'user-gear',
    title: '10+ Years Experience',
    description: 'Experienced master technician Prem Kumar and his trained team know how to diagnose and fix any electronic issue accurately.'
  },
  {
    icon: 'stopwatch',
    title: 'Under 24 Hours Resolution',
    description: 'Call today and get same-day or within 24 hours service across Darbhanga. Quick response for urgent emergencies.'
  },
  {
    icon: 'shield-check',
    title: '6 Months Warranty',
    description: 'Every single repair and replaced spare part comes with a peace-of-mind 6 months service warranty.'
  },
  {
    icon: 'currency-inr',
    title: 'No Hidden Charges',
    description: 'Completely transparent pricing. The technician inspects first, explains the issue clearly, and gives the quotation before work begins.'
  },
  {
    icon: 'home-free',
    title: 'FREE Home Visit (Zone A)',
    description: 'Bilkul FREE home visit and diagnosis within 3 KM of Laxmi Sagar, Darbhanga. Rest of Darbhanga is only ₹300 flat.'
  },
  {
    icon: 'toolbox',
    title: 'All Brands, All Models',
    description: 'We service all Indian and international brands: Samsung, LG, Whirlpool, Godrej, Voltas, Daikin, IFB, Sony, and more.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Select & Contact',
    hindi: 'Contact / Message Karein',
    description: 'Select your service in the app or call/WhatsApp 082710 46196 directly. Tell us what device has the problem.',
    icon: 'phone-message'
  },
  {
    step: 2,
    title: 'Doorstep Visit',
    hindi: 'Technician Home Visit',
    description: 'Our expert technician arrives at your home in Darbhanga at your preferred time slot. Zone A (<3km) is 100% FREE.',
    icon: 'doorstep'
  },
  {
    step: 3,
    title: 'On-Spot Diagnosis',
    hindi: 'On-Spot Device Check',
    description: 'The appliance is inspected on the spot. The technician clearly explains what is faulty and gives an exact quotation.',
    icon: 'diagnosis'
  },
  {
    step: 4,
    title: 'Repair + Warranty',
    hindi: 'Repair + 6 Month Warranty',
    description: 'Expert repair done with tested parts. You get a 6 Months Warranty card for full confidence and peace of mind.',
    icon: 'warranty-check'
  }
];

export const BRANDS = [
  'Samsung', 'LG', 'Whirlpool', 'Godrej', 'Haier', 'Voltas',
  'Daikin', 'Blue Star', 'IFB', 'Bosch', 'Panasonic', 'Sony',
  'MI / Xiaomi', 'Onida', 'Bajaj', 'Crompton', 'Orient', 'Videocon',
  'Hitachi', 'Carrier', 'Lloyd', 'Kelvinator', 'TCL', 'Realme',
  'MarQ', 'Sansui', 'BPL', 'Croma'
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Ramesh Yadav',
    location: 'Laxmi Sagar, Darbhanga',
    service: 'Fridge / Refrigerator Repair',
    rating: 5,
    date: 'Verified Darbhanga Customer',
    quote: 'Prem Kumar ji ne mere LG fridge ko 2 ghante mein theek kar diya. Gas filling ki aur compressor check kiya. 6 mahine ki warranty bhi di. Bahut accha kaam. Highly recommended!'
  },
  {
    id: 2,
    name: 'Sunita Devi',
    location: 'Laheriasarai, Darbhanga',
    service: 'Washing Machine Repair',
    rating: 5,
    date: 'Verified Darbhanga Customer',
    quote: 'Washing machine ka motor kharab ho gaya tha. Subah call kiya, dopahar tak aa gaye. On-spot repair kiya. Charge bhi bahut kam laga. Best service in Darbhanga!'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    location: 'Benta, Darbhanga',
    service: 'AC Repair & Service',
    rating: 5,
    date: 'Verified Darbhanga Customer',
    quote: 'AC mein cooling nahi aa rahi thi. Prem ji ki team ne gas filling ki aur PCB check kiya. Ab ekdum thanda chal raha hai. Professional team hai.'
  },
  {
    id: 4,
    name: 'Pooja Singh',
    location: 'Laxmi Sagar, Darbhanga',
    service: 'TV Repair (LED / Smart / CRT)',
    rating: 4.5,
    date: 'Verified Darbhanga Customer',
    quote: 'Smart TV ka display problem tha. Unhone ghar aakar check kiya aur backlight change ki. Free home visit mila kyunki Laxmi Sagar area mein rehti hoon.'
  },
  {
    id: 5,
    name: 'Rajesh Mishra',
    location: 'Kankarbagh Road, Darbhanga',
    service: 'Complete Wiring',
    rating: 5,
    date: 'Verified Darbhanga Customer',
    quote: 'Poore ghar ki wiring karwayi Prem Kumar ji se. MCB board, DB board sab lagwaya. Bahut neat kaam karte hain. 10 saal se inhi se kaam karwata hoon.'
  },
  {
    id: 6,
    name: 'Neha Kumari',
    location: 'Darbhanga Town',
    service: 'Microwave Oven Repair',
    rating: 5,
    date: 'Verified Darbhanga Customer',
    quote: 'Microwave band ho gaya tha. Doosre technician ne bola naya lo. Prem ji ne ₹800 mein theek kar diya. Paisa bach gaya. Thank you!'
  }
];
