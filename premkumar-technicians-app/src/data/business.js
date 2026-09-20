/**
 * Prem Kumar Technicians - Darbhanga
 * Business Data Source
 * Preserves exact business information from the reference website.
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
  hours: 'Morning 9:00 AM to 8:00 PM · All 7 Days Open',
  contactNote: 'Shop band ho toh bhi phone pe contact kar sakte hain.',
  coverageArea: 'Poora Darbhanga, Bihar',
  experience: '10+ Years Experience',
  ratingValue: '4.9',
  reviewCount: '500',
  homeVisits: '1000+ Home Visits',
  warrantyPeriod: '6 Months Warranty',
  developer: {
    name: 'Piyush Kumar',
    role: 'Website & App Developer',
    phone: '9234610543',
    phoneClean: '919234610543',
  },
};

export const PRICING_ZONES = [
  {
    id: 'zone-a',
    name: 'Zone A',
    subtitle: 'Under 3 KM of Laxmi Sagar',
    area: 'Laxmi Sagar aur aas-paas 3 KM ke andar',
    visitCharge: 'FREE (₹0)',
    diagnosisCharge: 'FREE',
    badge: 'BEST VALUE',
    highlight: true,
    description: 'Home Visit: ₹0 (FREE). Diagnosis: FREE. Repair charge problem aur part ke type par depend karega.',
  },
  {
    id: 'zone-b',
    name: 'Zone B',
    subtitle: 'Beyond 3 KM — Anywhere in Darbhanga',
    area: 'Poore Darbhanga, Bihar mein',
    visitCharge: '₹300 Only',
    diagnosisCharge: 'Included in home visit',
    badge: 'ALL DARBHANGA',
    highlight: false,
    description: 'Home Visit: ₹300 one-time charge. Diagnosis included in home visit. Repair charge problem aur part ke type par depend karega.',
  },
];

export const SERVICE_CATEGORIES = [
  { id: 'All', label: 'All Services', count: 18 },
  { id: 'Appliance Repair', label: 'Appliance Repair', count: 9 },
  { id: 'Electrical Work', label: 'Electrical Work', count: 4 },
  { id: 'Installation', label: 'Installation', count: 3 },
  { id: 'Parts', label: 'Parts', count: 2 },
];

export const SERVICES = [
  {
    id: 'fridge',
    name: 'Fridge / Refrigerator Repair',
    hindi: 'Fridge thanda nahi kar raha?',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    booking: 'Fridge',
    icon: 'snowflake',
    badge: 'Popular',
    description: 'All brands aur models. Gas filling, compressor, thermostat, cooling, door seal aur PCB repair.',
    problems: [
      'Cooling nahi kar raha',
      'Gas filling required',
      'Compressor problem',
      'Thermostat fault',
      'Door seal problem',
      'PCB repair'
    ],
    supportedTypes: ['All Brands', 'All Models', 'Single Door', 'Double Door'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Repair charge problem aur part pe depend karega.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'tv',
    name: 'TV Repair',
    hindi: 'LED se CRT tak TV repair',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    booking: 'TV',
    icon: 'tv',
    badge: '',
    description: 'LED, LCD, Smart, Android aur CRT TV. Display, backlight, motherboard, HDMI, WiFi aur sound issues.',
    problems: [
      'Display problem',
      'Backlight replacement',
      'Motherboard issue',
      'HDMI connection',
      'WiFi connectivity',
      'Sound problem'
    ],
    supportedTypes: ['LED TV', 'LCD TV', 'Smart TV', 'Android TV', 'CRT TV'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Repair charge problem aur part pe depend karega.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine Repair',
    hindi: 'Kapde dhone wali machine specialist',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    booking: 'Washing Machine',
    icon: 'rotate',
    badge: '',
    description: 'Top load, front load aur semi-auto. Motor, drum, drainage, timer, spin, inlet aur PCB board.',
    problems: [
      'Motor issue',
      'Drum balance / spin issue',
      'Drainage problem',
      'Timer fault',
      'Inlet valve',
      'PCB board repair'
    ],
    supportedTypes: ['Top Load', 'Front Load', 'Semi-Automatic'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Repair charge problem aur part pe depend karega.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'ac',
    name: 'AC Repair & Service',
    hindi: 'AC ki cooling wapas laayein',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    booking: 'AC',
    icon: 'wind',
    badge: 'Popular',
    description: 'Split, window aur inverter AC. Gas, compressor, PCB, cooling, water leak, installation aur uninstallation.',
    problems: [
      'Cooling nahi aa rahi',
      'Gas filling required',
      'Compressor fault',
      'PCB repair',
      'Water leak',
      'Installation / Uninstallation'
    ],
    supportedTypes: ['Split AC', 'Window AC', 'Inverter AC'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Repair charge problem aur part pe depend karega.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'cooler',
    name: 'Air Cooler Repair',
    hindi: 'Desert cooler ka complete solution',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    booking: 'Cooler',
    icon: 'fan',
    badge: '',
    description: 'Motor, pump, pad change, swing motor aur wiring ka reliable repair.',
    problems: [
      'Motor fault',
      'Pump repair / change',
      'Pad change',
      'Swing motor repair',
      'Wiring repair'
    ],
    supportedTypes: ['Desert Cooler', 'All Cooler Models'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Repair charge problem aur part pe depend karega.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'microwave',
    name: 'Microwave Oven Repair',
    hindi: 'Microwave phir se garam karega',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    booking: 'Microwave',
    icon: 'fire',
    badge: '',
    description: 'Magnetron, fuse, turntable motor, door switch aur timer repair.',
    problems: [
      'Garam nahi kar raha',
      'Magnetron problem',
      'Fuse issue',
      'Turntable motor',
      'Door switch / Timer repair'
    ],
    supportedTypes: ['Solo', 'Grill', 'Convection'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Repair charge problem aur part pe depend karega.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'geyser',
    name: 'Geyser / Water Heater',
    hindi: 'Geyser repair aur installation',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    booking: 'Geyser',
    icon: 'flame',
    badge: '',
    description: 'Element, thermostat, leakage, wiring aur installation service.',
    problems: [
      'Heating element problem',
      'Thermostat issue',
      'Water leakage',
      'Wiring fault',
      'Installation service'
    ],
    supportedTypes: ['Storage Geyser', 'Instant Geyser'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Repair charge problem aur part pe depend karega.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'kitchen-appliance',
    name: 'Kitchen Appliances',
    hindi: 'Mixer, induction, chimney repair',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    booking: 'Kitchen Appliance',
    icon: 'utensils',
    badge: '',
    description: 'Motor rewinding, switch, jar coupling, blade aur common kitchen appliance faults.',
    problems: [
      'Mixer motor rewinding',
      'Switch replacement',
      'Jar coupling & blade',
      'Induction repair',
      'Chimney repair'
    ],
    supportedTypes: ['Mixer Grinder', 'Induction', 'Chimney'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Repair charge problem aur part pe depend karega.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'inverter-battery',
    name: 'Inverter & Battery Repair',
    hindi: 'Backup ki problem ka solution',
    category: 'Appliance Repair',
    shortCategory: 'Appliance',
    booking: 'Inverter/Battery',
    icon: 'battery',
    badge: '',
    description: 'Battery replacement, charging issue, beeping, backup aur inverter faults.',
    problems: [
      'Battery replacement',
      'Charging issue',
      'Beeping sound',
      'Backup problem',
      'Inverter fault'
    ],
    supportedTypes: ['Home Inverters', 'Batteries'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Repair charge problem aur part pe depend karega.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'complete-wiring',
    name: 'Complete Wiring',
    hindi: 'House, shop aur industrial wiring',
    category: 'Electrical Work',
    shortCategory: 'Electrical',
    booking: 'Electrical Wiring',
    icon: 'plug',
    badge: '',
    description: 'House, shop aur industrial spaces ke liye safe, neat aur complete wiring.',
    problems: [
      'House wiring',
      'Shop wiring',
      'Industrial wiring',
      'Neat & safe electrical setup'
    ],
    supportedTypes: ['House', 'Shop', 'Industrial'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Work according to requirement.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'mcb-db-board',
    name: 'MCB / RCCB / DB Board',
    hindi: 'Protection board installation',
    category: 'Electrical Work',
    shortCategory: 'Electrical',
    booking: 'MCB/DB Board',
    icon: 'shield',
    badge: '',
    description: 'MCB, RCCB aur DB board ki installation, repair aur replacement.',
    problems: [
      'MCB installation / repair',
      'RCCB setup',
      'DB board replacement',
      'Protection board wiring'
    ],
    supportedTypes: ['MCB', 'RCCB', 'DB Board'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Repair charge problem aur part pe depend karega.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'electrical-fitting',
    name: 'Electrical Fitting & Fixture',
    hindi: 'Har type ki electrical fitting',
    category: 'Electrical Work',
    shortCategory: 'Electrical',
    booking: 'Electrical Fitting',
    icon: 'lightbulb',
    badge: '',
    description: 'All types of electrical fittings, fixtures aur wiring accessories.',
    problems: [
      'Electrical fitting installation',
      'Fixture replacement',
      'Wiring accessories setup'
    ],
    supportedTypes: ['All Electrical Fittings & Fixtures'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Repair charge problem aur part pe depend karega.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'motor-pump',
    name: 'Motor Pump Repair',
    hindi: 'Submersible aur monoblock pump',
    category: 'Electrical Work',
    shortCategory: 'Electrical',
    booking: 'Motor Pump',
    icon: 'pump',
    badge: '',
    description: 'Submersible aur monoblock motor pump ka diagnosis, repair aur servicing.',
    problems: [
      'Submersible pump repair',
      'Monoblock pump issue',
      'Motor pump diagnosis & servicing'
    ],
    supportedTypes: ['Submersible Pump', 'Monoblock Pump'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Repair charge problem aur part pe depend karega.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'cctv',
    name: 'CCTV Installation & Repair',
    hindi: 'Ghar aur shop ki security',
    category: 'Installation',
    shortCategory: 'Install',
    booking: 'CCTV',
    icon: 'camera',
    badge: '',
    description: 'CCTV camera installation, wiring, DVR, view aur repair support.',
    problems: [
      'CCTV camera installation',
      'Wiring & setup',
      'DVR configuration',
      'Repair support'
    ],
    supportedTypes: ['Home CCTV', 'Shop Security Cameras'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'fan-light-switch',
    name: 'Fan, Light, Switch Installation',
    hindi: 'Quick home electrical work',
    category: 'Installation',
    shortCategory: 'Install',
    booking: 'Fan/Light/Switch',
    icon: 'toggle',
    badge: '',
    description: 'Fan, light, switch aur fixture installation with clean finishing.',
    problems: [
      'Fan installation',
      'Light fixture fitting',
      'Switch replacement'
    ],
    supportedTypes: ['Ceiling Fans', 'Lights', 'Switches & Sockets'],
    pricingInfo: 'Zone A: FREE Visit & Diagnosis. Zone B: ₹300.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'ac-installation',
    name: 'AC Installation & Uninstallation',
    hindi: 'Safe AC shifting service',
    category: 'Installation',
    shortCategory: 'Install',
    booking: 'AC Installation',
    icon: 'wrench',
    badge: '',
    description: 'Split, window aur inverter AC ki installation aur safe uninstallation.',
    problems: [
      'AC installation',
      'AC uninstallation / safe shifting'
    ],
    supportedTypes: ['Split AC', 'Window AC', 'Inverter AC'],
    pricingInfo: 'Competitive transparent charges.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'electronic-parts',
    name: 'All Electronic Parts',
    hindi: 'Original aur compatible parts',
    category: 'Parts',
    shortCategory: 'Parts',
    booking: 'Electronic Parts',
    icon: 'chip',
    badge: '',
    description: 'All electronic parts available — original aur compatible options.',
    problems: [
      'Appliance spare parts',
      'Original & compatible parts availability'
    ],
    supportedTypes: ['Original Parts', 'Compatible Parts'],
    pricingInfo: 'Transparent pricing with warranty.',
    warranty: '6 Months Warranty.'
  },
  {
    id: 'part-replacement',
    name: 'Part Replacement — All Brands',
    hindi: 'Kisi bhi model ka part change',
    category: 'Parts',
    shortCategory: 'Parts',
    booking: 'Part Replacement',
    icon: 'refresh',
    badge: '',
    description: 'All brands aur models ke faulty part ki replacement service.',
    problems: [
      'Faulty part replacement',
      'Component changing'
    ],
    supportedTypes: ['All Brands', 'All Models'],
    pricingInfo: 'Clear quote before replacement.',
    warranty: '6 Months Warranty on replaced parts.'
  }
];

export const TRUST_FEATURES = [
  {
    icon: 'user-gear',
    title: 'Best Experienced Team',
    description: '10+ saal ka experience. Trained professional team jo har problem ka solution jaanti hai.'
  },
  {
    icon: 'stopwatch',
    title: 'Under 24 Hours Solution',
    description: 'Aaj call karo, 24 ghante ke andar problem solve. Super fast service.'
  },
  {
    icon: 'shield-check',
    title: '6 Months Warranty',
    description: 'Har repair pe poore 6 mahine ki warranty. Tension-free service.'
  },
  {
    icon: 'currency-inr',
    title: 'No Hidden Charges',
    description: 'Jo charge batayenge wohi lagega. Problem pe depend karega charge — transparent pricing.'
  },
  {
    icon: 'home-free',
    title: 'FREE Home Visit',
    description: 'Laxmi Sagar Darbhanga ke 3 KM andar bilkul FREE home visit. Bahar ₹300 only.'
  },
  {
    icon: 'toolbox',
    title: 'All Brands, All Models',
    description: 'Market ke sabhi company aur model ke electronic device ke all parts repairing & changing.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: 'Contact / Message Karein',
    description: '082710 46196 pe Prem Kumar se directly call ya WhatsApp message karein. Apni problem batayein.',
    icon: 'phone-message'
  },
  {
    step: 2,
    title: 'Home Visit',
    description: 'Expert technician aapke ghar aayenge. Under 3 KM FREE, baaki Darbhanga ₹300 only.',
    icon: 'doorstep'
  },
  {
    step: 3,
    title: 'On-Spot Diagnosis',
    description: 'Device wahi check hoga. Problem, faulty part aur charge pehle clearly batayenge.',
    icon: 'diagnosis'
  },
  {
    step: 4,
    title: 'Repair + 6 Month Warranty',
    description: 'On-the-spot repair aur part change ke baad 6 months warranty ke saath deliver.',
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
    service: 'Fridge Repair',
    rating: 5,
    date: 'Customer shared feedback',
    quote: 'Prem Kumar ji ne mere LG fridge ko 2 ghante mein theek kar diya. Gas filling ki aur compressor check kiya. 6 mahine ki warranty bhi di. Bahut accha kaam. Highly recommended!'
  },
  {
    id: 2,
    name: 'Sunita Devi',
    location: 'Laheriasarai, Darbhanga',
    service: 'Washing Machine Repair',
    rating: 5,
    date: 'Customer shared feedback',
    quote: 'Washing machine ka motor kharab ho gaya tha. Subah call kiya, dopahar tak aa gaye. On-spot repair kiya. Charge bhi bahut kam laga. Best service in Darbhanga!'
  },
  {
    id: 3,
    name: 'Amit Kumar',
    location: 'Benta, Darbhanga',
    service: 'AC Repair',
    rating: 5,
    date: 'Customer shared feedback',
    quote: 'AC mein cooling nahi aa rahi thi. Prem ji ki team ne gas filling ki aur PCB check kiya. Ab ekdum thanda chal raha hai. Professional team hai.'
  },
  {
    id: 4,
    name: 'Pooja Singh',
    location: 'Laxmi Sagar, Darbhanga',
    service: 'TV Repair',
    rating: 4.5,
    date: 'Customer shared feedback',
    quote: 'Smart TV ka display problem tha. Unhone ghar aakar check kiya aur backlight change ki. Free home visit mila kyunki Laxmi Sagar area mein rehti hoon.'
  },
  {
    id: 5,
    name: 'Rajesh Mishra',
    location: 'Kankarbagh Road, Darbhanga',
    service: 'Electrical Wiring',
    rating: 5,
    date: 'Customer shared feedback',
    quote: 'Poore ghar ki wiring karwayi Prem Kumar ji se. MCB board, DB board sab lagwaya. Bahut neat kaam karte hain. 10 saal se inhi se kaam karwata hoon.'
  },
  {
    id: 6,
    name: 'Neha Kumari',
    location: 'Darbhanga Town',
    service: 'Microwave Repair',
    rating: 5,
    date: 'Customer shared feedback',
    quote: 'Microwave band ho gaya tha. Doosre technician ne bola naya lo. Prem ji ne ₹800 mein theek kar diya. Paisa bach gaya. Thank you!'
  }
];
