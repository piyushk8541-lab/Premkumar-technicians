(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const h={tagline:"Koi bhi electronic cheez kharab nahi hoti, bas sahi haath chahiye.",phone:"082710 46196",phoneClean:"918271046196",whatsappNumber:"918271046196",address:"Laxmi Sagar, Gas Godown, Darbhanga, Bihar - 846004",developer:{phoneClean:"919234610543"}},y=[{id:"zone-a",name:"Zone A",subtitle:"Under 3 KM of Laxmi Sagar",area:"Laxmi Sagar, Bela, Donar, Beta, and all localities within 3 KM",visitCharge:"FREE (₹0)",diagnosisCharge:"FREE (₹0)",badge:"BEST VALUE · 100% FREE VISIT",highlight:!0,description:"Zero home visit charge. The technician inspects your device for free and gives an upfront transparent estimate before any repair work starts."},{id:"zone-b",name:"Zone B",subtitle:"Beyond 3 KM — Anywhere in Darbhanga",area:"Laheriasarai, Bahadurpur, Kakarghatti, Mabbi, Ekmi, and all Darbhanga",visitCharge:"₹300 Only",diagnosisCharge:"Included in Visit",badge:"ALL DARBHANGA COVERAGE",highlight:!1,description:"Flat ₹300 one-time home visit and on-spot diagnosis charge anywhere in Darbhanga district. Repair charges depend on the exact fault and parts needed."}],q=[{id:"All",label:"All Services",count:18},{id:"Appliance Repair",label:"Appliance Repair",count:9},{id:"Electrical Work",label:"Electrical Work",count:4},{id:"Installation",label:"Installation",count:3},{id:"Parts",label:"Parts & Spares",count:2}],x=[{id:"fridge",name:"Fridge / Refrigerator Repair",hindi:"Fridge thanda nahi kar raha?",category:"Appliance Repair",shortCategory:"Appliance",icon:"snowflake",badge:"Popular",description:"All brands and models. Gas filling, compressor repair, thermostat, cooling coil, door gasket, and PCB replacement.",problems:["Cooling nahi kar raha / Ice jamna band ho gaya","Compressor start nahi ho raha ya awaz kar raha hai","Gas leak / Refrigerant gas charging required","Freezer me abnormal baraf jamna","Door seal loose / Cold air leakage","Inverter refrigerator PCB repair"],supportedTypes:["Single Door","Double Door","Side by Side","Deep Freezer","Inverter Models"],pricingInfo:"Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Repair charges quoted upfront after physical check.",warranty:"6 Months Warranty on replaced parts and repair."},{id:"tv",name:"TV Repair (LED / Smart / CRT)",hindi:"LED se CRT tak TV repair",category:"Appliance Repair",shortCategory:"Appliance",icon:"tv",badge:"Fast Service",description:"LED, LCD, Smart, Android, and CRT TVs. Display backlight, motherboard, HDMI, WiFi, power supply, and sound issues.",problems:["Screen blank hai lekin audio/sound aa rahi hai","TV power on nahi ho raha (Red light blinking / dead)","Display screen pe horizontal ya vertical lines","Sound distorted / speaker crackling / No sound","Smart TV WiFi connect nahi ho raha ya reboot loop","HDMI port display detect nahi kar raha"],supportedTypes:["Smart TV","Android TV","LED TV","QLED / OLED","CRT TV"],pricingInfo:"Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Quote provided before opening device.",warranty:"6 Months Warranty."},{id:"washing-machine",name:"Washing Machine Repair",hindi:"Kapde dhone wali machine specialist",category:"Appliance Repair",shortCategory:"Appliance",icon:"rotate",badge:"Expert Team",description:"Top load, front load, and semi-automatic washing machines. Motor, drum, drainage, timer, spin cycle, water inlet, and PCB board.",problems:["Spin dryer nahi ghoom raha ya ruk jata hai","Pani drain nahi ho raha / Pump blocked","Machine spinning ke dauran tez awaz aur vibration karti hai","Water inlet valve se pani nahi aa raha","Control panel pe error code blinking","Semi-auto timer ya belt toot gaya hai"],supportedTypes:["Top Load Automatic","Front Load Automatic","Semi-Automatic","All Drum Sizes"],pricingInfo:"Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Parts billed at transparent MRP.",warranty:"6 Months Warranty on all repairs."},{id:"ac",name:"AC Repair & Service",hindi:"AC ki cooling wapas laayein",category:"Appliance Repair",shortCategory:"Appliance",icon:"wind",badge:"Summer Essential",description:"Split, window, and inverter AC. Gas charging, compressor, PCB, cooling issues, water leak, installation, and uninstallation.",problems:["AC chalu hai par room thanda nahi ho raha","Indoor unit se pani tapak raha hai (Drain choke)","Compressor bar bar trip ho raha hai","Gas leak test aur gas filling (R32 / R410 / R22)","Indoor fan ya outdoor unit awaz kar raha hai","Deep jet pump foam cleaning service required"],supportedTypes:["Split AC","Window AC","Inverter 5-Star AC","Cassette AC"],pricingInfo:"Zone A: FREE Visit & Diagnosis. Zone B: ₹300. Transparent gas & servicing rates.",warranty:"6 Months Warranty."},{id:"cooler",name:"Air Cooler Repair",hindi:"Desert cooler ka complete solution",category:"Appliance Repair",shortCategory:"Appliance",icon:"fan",badge:"",description:"Motor, pump, pad change, swing motor, and wiring ka reliable repair for plastic and sheet metal coolers.",problems:["Fan motor jam hai ya slow speed me chal rahi hai","Water submersible pump pani upar nahi fek raha","Swing louvers motor kharab ho gayi hai","Body me current / earthing problem","Honeycomb / Wood wool cooling pads replacement"],supportedTypes:["Desert Cooler","Tower Cooler","Window Cooler","Personal Cooler"],pricingInfo:"Zone A: FREE Visit & Diagnosis. Zone B: ₹300.",warranty:"6 Months Warranty."},{id:"microwave",name:"Microwave Oven Repair",hindi:"Microwave phir se garam karega",category:"Appliance Repair",shortCategory:"Appliance",icon:"fire",badge:"",description:"Solo, Grill, and Convection microwave ovens. Magnetron, fuse, turntable motor, door switch, and timer repair.",problems:["Device on hota hai par khana garam nahi karta","Glass turntable plate rotate nahi ho rahi","Chalu karte hi sparking ya smoke smell aana","Touchpad keys press nahi ho rahe","Chalu karte hi ghar ka MCB trip hona"],supportedTypes:["Solo Microwave","Grill Microwave","Convection Microwave"],pricingInfo:"Zone A: FREE Visit & Diagnosis. Zone B: ₹300.",warranty:"6 Months Warranty."},{id:"geyser",name:"Geyser / Water Heater",hindi:"Geyser repair aur installation",category:"Appliance Repair",shortCategory:"Appliance",icon:"flame",badge:"",description:"Element, thermostat, tank leakage, safety valve, wiring, and fresh installation service.",problems:["Pani bilkul garam nahi ho raha (Element fault)","Pani bohot kam garam ho raha hai","Geyser switch on karte hi short-circuit / trip","Tank ya inlet connection se water leakage","Thermostat temperature cut-off nahi kar raha"],supportedTypes:["Storage Geyser (10L/15L/25L)","Instant Geyser","Gas Water Heater"],pricingInfo:"Zone A: FREE Visit & Diagnosis. Zone B: ₹300.",warranty:"6 Months Warranty."},{id:"kitchen-appliance",name:"Kitchen Appliances",hindi:"Mixer, induction, chimney repair",category:"Appliance Repair",shortCategory:"Appliance",icon:"utensils",badge:"",description:"Motor rewinding, switch, jar coupling, blade, and common kitchen appliance faults.",problems:["Mixer grinder motor se smell / sparking","Mixer jar coupling aur teeth tooth gaya","Induction cooktop error code E0, E1, E2","Kitchen chimney motor jam / suction band","Electric kettle auto-cutoff problem"],supportedTypes:["Mixer Grinder","Induction Stove","Kitchen Chimney","Electric Kettle","Juicer"],pricingInfo:"Zone A: FREE Visit & Diagnosis. Zone B: ₹300.",warranty:"6 Months Warranty."},{id:"inverter-battery",name:"Inverter & Battery Repair",hindi:"Backup ki problem ka solution",category:"Appliance Repair",shortCategory:"Appliance",icon:"battery",badge:"",description:"Battery replacement, charging issue, continuous beeping, backup problems, and inverter PCB faults.",problems:["Electricity jaane par inverter load nahi le raha","Battery charging indicator full nahi dikha raha","Inverter lagatar beep alarm kar raha hai","Backup time 15-20 minute me khatam ho jata hai","Mosfet / Transformer / Charging relay fault"],supportedTypes:["Sine Wave Inverter","Square Wave Inverter","Tubular Battery","Solar Inverter"],pricingInfo:"Zone A: FREE Visit & Diagnosis. Zone B: ₹300.",warranty:"6 Months Warranty."},{id:"complete-wiring",name:"Complete Wiring",hindi:"House, shop aur industrial wiring",category:"Electrical Work",shortCategory:"Electrical",icon:"plug",badge:"Full Solution",description:"House, shop, and industrial spaces ke liye safe, neat, and complete wiring with earthing protection.",problems:["Naye makan ki complete concealed wall conduit wiring","Purane ghar ki rewiring aur short circuit prevention","Chemical copper earthing pit installation","Heavy appliance ke liye separate 2.5mm / 4mm power circuits","Commercial shop & showroom lighting wiring"],supportedTypes:["Residential Homes","Commercial Shops","Offices & Godowns","Industrial Units"],pricingInfo:"Zone A: Free on-site inspection. Contract or per-point transparent rates.",warranty:"6 Months Workmanship Warranty."},{id:"mcb-db-board",name:"MCB / RCCB / DB Board",hindi:"Protection board installation",category:"Electrical Work",shortCategory:"Electrical",icon:"shield",badge:"Safety",description:"MCB, RCCB, and DB board ki installation, repair, and replacement for electric shock and short-circuit protection.",problems:["Ghar ka MCB bina vajah trip ho raha hai","Main distribution board busbar ya neutral burn ho gaya","Human shock protection ke liye RCCB / ELCB installation","Phase selector / Rotary switch / Changeover setup","Single phase to Three phase DB distribution"],supportedTypes:["Single Pole MCB","Double Pole Isolator","4-Pole RCCB","Distribution Enclosures"],pricingInfo:"Zone A: FREE Visit & Diagnosis. Zone B: ₹300.",warranty:"6 Months Warranty."},{id:"electrical-fitting",name:"Electrical Fitting & Fixture",hindi:"Har type ki electrical fitting",category:"Electrical Work",shortCategory:"Electrical",icon:"lightbulb",badge:"",description:"All types of electrical fittings, modular switches, chandeliers, profile lights, and wiring accessories.",problems:["Modular switch board loose hai ya spark kar raha hai","Ceiling pop false ceiling profile LED strip installation","Chandelier / Jhoomar fitting with safe hook","Bathroom and kitchen waterproof fixtures","Heavy power plug socket replacement"],supportedTypes:["Modular Switch Plates","Decorative Lights","Profile Strip Lights","Power Outlets"],pricingInfo:"Zone A: FREE Visit & Diagnosis. Zone B: ₹300.",warranty:"6 Months Warranty."},{id:"motor-pump",name:"Motor Pump Repair",hindi:"Submersible aur monoblock pump",category:"Electrical Work",shortCategory:"Electrical",icon:"pump",badge:"",description:"Submersible and monoblock motor pump ka diagnosis, rewinding, starter repair, and servicing.",problems:["Motor chalu hai lekin boring se pani nahi aa raha","Starter box capacitor ya relay jal gaya hai","Motor pump jam ho gayi hai aur humming noise kar rahi hai","Copper coil rewinding needed after water damage","Automatic water tank level controller setup"],supportedTypes:["Submersible Pump (0.5HP - 3HP)","Monoblock Self-Priming","Jet Pump"],pricingInfo:"Zone A: FREE Visit & Diagnosis. Zone B: ₹300.",warranty:"6 Months Warranty."},{id:"cctv",name:"CCTV Installation & Repair",hindi:"Ghar aur shop ki security",category:"Installation",shortCategory:"Install",icon:"camera",badge:"Security",description:"CCTV camera installation, wiring, DVR setup, mobile phone live view, and repair support.",problems:["Naya CCTV security system setup ghar ya dukaan ke liye","Mobile app par cameras offline show ho rahe hain","DVR me hard disk recording stop ho gayi hai","Camera display me blur, flicker, ya black screen","Night vision infrared LEDs work nahi kar rahe"],supportedTypes:["Dome Camera (Indoor)","Bullet Camera (Outdoor)","WiFi 360 Smart Camera","4Ch/8Ch DVR"],pricingInfo:"Zone A: FREE Visit & Diagnosis. Zone B: ₹300.",warranty:"6 Months Warranty."},{id:"fan-light-switch",name:"Fan, Light, Switch Installation",hindi:"Quick home electrical work",category:"Installation",shortCategory:"Install",icon:"toggle",badge:"Quick Fix",description:"Fan, light, switch, and fixture installation with clean finishing and sturdy mounting.",problems:["Ceiling fan naya lagwana ya purana replace karna","BLDC energy saving fan with remote setup","LED tubelight / Batten mounting","Exhaust fan installation in glass / wall cut","Wall bracket fan hanging and connection"],supportedTypes:["Ceiling Fans","BLDC Fans","LED Battens","Exhaust Fans","Spotlights"],pricingInfo:"Zone A: FREE Visit & Diagnosis. Zone B: ₹300.",warranty:"6 Months Warranty."},{id:"ac-installation",name:"AC Installation & Uninstallation",hindi:"Safe AC shifting service",category:"Installation",shortCategory:"Install",icon:"wrench",badge:"Careful Shifting",description:"Split, window, and inverter AC ki safe installation and uninstallation with vacuum test and gas protection.",problems:["Purane flat se AC safe dismantling with gas locked inside","Naye address par indoor & outdoor bracket mounting","Copper pipe flaring, insulation, and electrical cabling","Core hole cutting on brick wall for pipe routing","Vacuuming and gas leakage soap testing"],supportedTypes:["Split AC 1 Ton - 2 Ton","Window AC All Sizes","Multi-Split Systems"],pricingInfo:"Fixed affordable packages for Installation & Uninstallation.",warranty:"6 Months Installation Workmanship Warranty."},{id:"electronic-parts",name:"All Electronic Parts",hindi:"Original aur compatible parts",category:"Parts",shortCategory:"Parts",icon:"chip",badge:"Genuine Spares",description:"All electronic parts available — original brand parts and tested high-quality compatible options.",problems:["Specific model number ka appliance spare part chahiye","Capacitors, relays, thermostats, and sensors","Drain pumps, motors, and copper tubing","Original appliance remote controls","Appliance replacement hardware & fasteners"],supportedTypes:["OEM Original Parts","Grade-A Tested Spares","Electrical Accessories"],pricingInfo:"MRP transparent pricing with bill.",warranty:"6 Months Replacement Warranty on genuine spares."},{id:"part-replacement",name:"Part Replacement — All Brands",hindi:"Kisi bhi model ka part change",category:"Parts",shortCategory:"Parts",icon:"refresh",badge:"Doorstep",description:"All brands and models ke faulty part ki on-site replacement service with quality check and testing.",problems:["Kharab part ko nikal kar naya part lagwana","Washing machine gear box / Pulsator change","Refrigerator compressor & relay kit replacement","LED TV backlight strips set replacement","Microwave magnetron & high-voltage diode replacement"],supportedTypes:["All Appliance Parts","All Electronics Components"],pricingInfo:"Upfront estimate of part cost + installation. Old faulty part returned to customer.",warranty:"6 Months Warranty on replaced part."}],G=[{step:1,title:"Select & Contact",hindi:"Contact / Message Karein",description:"Select your service in the app or call/WhatsApp 082710 46196 directly. Tell us what device has the problem.",icon:"phone-message"},{step:2,title:"Doorstep Visit",hindi:"Technician Home Visit",description:"Our expert technician arrives at your home in Darbhanga at your preferred time slot. Zone A (<3km) is 100% FREE.",icon:"doorstep"},{step:3,title:"On-Spot Diagnosis",hindi:"On-Spot Device Check",description:"The appliance is inspected on the spot. The technician clearly explains what is faulty and gives an exact quotation.",icon:"diagnosis"},{step:4,title:"Repair + Warranty",hindi:"Repair + 6 Month Warranty",description:"Expert repair done with tested parts. You get a 6 Months Warranty card for full confidence and peace of mind.",icon:"warranty-check"}],Q=["Samsung","LG","Whirlpool","Godrej","Haier","Voltas","Daikin","Blue Star","IFB","Bosch","Panasonic","Sony","MI / Xiaomi","Onida","Bajaj","Crompton","Orient","Videocon","Hitachi","Carrier","Lloyd","Kelvinator","TCL","Realme","MarQ","Sansui","BPL","Croma"],w=[{id:1,name:"Ramesh Yadav",location:"Laxmi Sagar, Darbhanga",service:"Fridge / Refrigerator Repair",rating:5,date:"Verified Darbhanga Customer",quote:"Prem Kumar ji ne mere LG fridge ko 2 ghante mein theek kar diya. Gas filling ki aur compressor check kiya. 6 mahine ki warranty bhi di. Bahut accha kaam. Highly recommended!"},{id:2,name:"Sunita Devi",location:"Laheriasarai, Darbhanga",service:"Washing Machine Repair",rating:5,date:"Verified Darbhanga Customer",quote:"Washing machine ka motor kharab ho gaya tha. Subah call kiya, dopahar tak aa gaye. On-spot repair kiya. Charge bhi bahut kam laga. Best service in Darbhanga!"},{id:3,name:"Amit Kumar",location:"Benta, Darbhanga",service:"AC Repair & Service",rating:5,date:"Verified Darbhanga Customer",quote:"AC mein cooling nahi aa rahi thi. Prem ji ki team ne gas filling ki aur PCB check kiya. Ab ekdum thanda chal raha hai. Professional team hai."},{id:4,name:"Pooja Singh",location:"Laxmi Sagar, Darbhanga",service:"TV Repair (LED / Smart / CRT)",rating:4.5,date:"Verified Darbhanga Customer",quote:"Smart TV ka display problem tha. Unhone ghar aakar check kiya aur backlight change ki. Free home visit mila kyunki Laxmi Sagar area mein rehti hoon."},{id:5,name:"Rajesh Mishra",location:"Kankarbagh Road, Darbhanga",service:"Complete Wiring",rating:5,date:"Verified Darbhanga Customer",quote:"Poore ghar ki wiring karwayi Prem Kumar ji se. MCB board, DB board sab lagwaya. Bahut neat kaam karte hain. 10 saal se inhi se kaam karwata hoon."},{id:6,name:"Neha Kumari",location:"Darbhanga Town",service:"Microwave Oven Repair",rating:5,date:"Verified Darbhanga Customer",quote:"Microwave band ho gaya tha. Doosre technician ne bola naya lo. Prem ji ne ₹800 mein theek kar diya. Paisa bach gaya. Thank you!"}],H={home:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',services:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',bookings:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',reviews:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>',more:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>',phone:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>',whatsapp:'<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.97.53 1.769.814 2.796.814 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm3.376 8.188c-.141.398-.711.758-1.049.807-.33.048-.737.078-2.385-.606-1.649-.684-2.73-2.39-2.812-2.5-.083-.11-.663-.883-.663-1.684 0-.8.419-1.194.568-1.353.149-.159.327-.199.435-.199.109 0 .218.001.313.007.101.006.236-.039.369.28.14.339.479 1.171.521 1.258.042.087.07.189.012.305-.058.116-.087.189-.174.291-.087.102-.183.228-.261.306-.087.087-.178.182-.077.356.101.174.45 0.742.965 1.202.663.591 1.222.774 1.396.861.174.087.276.073.378-.044.102-.116.435-.508.552-.682.116-.174.233-.145.392-.087.159.058 1.006.474 1.18.561.174.087.291.13.334.204.043.072.043.42-.098.818zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.436 5.176L2 22l4.982-1.309A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>',mapPin:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',search:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',close:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>',arrowLeft:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>',chevronRight:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>',check:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>',star:'<svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>',shieldCheck:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',clock:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',calendar:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',sparkles:'<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>',externalLink:'<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>',snowflake:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v20m0-20l3 3m-3-3l-3 3m3 17l3-3m-3 3l-3-3M2 12h20M2 12l3 3m-3-3l3-3m17 0l-3 3m3-3l-3-3m-1.5 13.5L4.5 4.5m0 0l3 0m-3 0l0 3m15 12l-3 0m3 0l0-3M4.5 19.5l15-15m-15 0l3 0m-3 0l0-3m15 15l-3 0m3 0l0 3"/></svg>',tv:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',rotate:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>',wind:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h11a2 2 0 002-2 2 2 0 00-2-2M4 14h11a2 2 0 012 2 2 2 0 01-2 2M6 18h7a2 2 0 002-2 2 2 0 00-2-2"/></svg>',fan:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',fire:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/></svg>',flame:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',utensils:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>',battery:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>',plug:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',shield:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',lightbulb:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>',pump:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',camera:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>',toggle:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>',wrench:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>',chip:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>',refresh:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>',"user-gear":'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>',stopwatch:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',"shield-check":'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',"currency-inr":'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 4h5m-5 0c1.5 0 3-1 3-2.5S11.5 7 10 7H8v12m0-7l5 7"/></svg>',"home-free":'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',toolbox:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',"phone-message":'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>',doorstep:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>',diagnosis:'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>',"warranty-check":'<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'};function n(a,e=""){const s=H[a]||H.services;return e?s.replace("<svg ",`<svg class="${e}" `):s}const t={currentTab:"home",activeCategory:"All",searchQuery:"",selectedServiceForModal:null,isServiceModalOpen:!1,isReviewModalOpen:!1,activeBookingSubTab:"new",reviewFilter:"All",bookingForm:{serviceId:"fridge",customBrand:"",problem:"",zone:"zone-a",address:"",preferredDate:"Today",customDate:"",preferredTime:"Morning (9 AM - 12 PM)",customerName:"",customerPhone:"",notes:""},reviewForm:{name:"",service:"Fridge / Refrigerator Repair",rating:5,comment:""},savedBookings:[]};function U(){try{const a=localStorage.getItem("pkt_saved_bookings");a&&(t.savedBookings=JSON.parse(a))}catch(a){console.error("Error loading bookings from localStorage",a)}}function _(a){try{t.savedBookings.unshift(a),localStorage.setItem("pkt_saved_bookings",JSON.stringify(t.savedBookings))}catch(e){console.error("Error saving booking to localStorage",e)}}async function b(a=h.phoneClean){m();const e=`tel:+${a}`;try{if(window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.ExternalLinks){await window.Capacitor.Plugins.ExternalLinks.open({url:e});return}}catch(s){console.warn("Native ExternalLinksPlugin failed, falling back to window.location",s)}window.location.href=e}async function v(a=""){m();const e=encodeURIComponent(a||"Namaste Prem Kumar Ji, mujhe repair service ke baare mein jankari chahiye."),s=`https://wa.me/${h.whatsappNumber}?text=${e}`;try{if(window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.ExternalLinks){await window.Capacitor.Plugins.ExternalLinks.open({url:s});return}}catch(l){console.warn("Native ExternalLinksPlugin failed, falling back to window.open",l)}window.open(s,"_blank","noopener")}async function J(){m();const a="https://www.google.com/maps/search/?api=1&query=Laxmi+Sagar+Gas+Godown+Darbhanga+Bihar";try{if(window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.ExternalLinks){await window.Capacitor.Plugins.ExternalLinks.open({url:a});return}}catch(e){console.warn("Native ExternalLinksPlugin failed, falling back to window.open",e)}window.open(a,"_blank","noopener")}async function Y(){m();const a=encodeURIComponent("Hi Piyush Kumar, I saw your work on the Prem Kumar Technicians Android app. I also want an app/website built for my business. Please share details."),e=`https://wa.me/${h.developer.phoneClean}?text=${a}`;try{if(window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.ExternalLinks){await window.Capacitor.Plugins.ExternalLinks.open({url:e});return}}catch(s){console.warn("Native ExternalLinksPlugin failed, falling back to window.open",s)}window.open(e,"_blank","noopener")}function m(){navigator&&typeof navigator.vibrate=="function"&&navigator.vibrate(15)}function X(){window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.App&&window.Capacitor.Plugins.App.addListener("backButton",()=>{if(t.isServiceModalOpen){C();return}if(t.isReviewModalOpen){M();return}if(t.currentTab!=="home"){f("home");return}window.Capacitor.Plugins.App.exitApp()})}function f(a){m(),t.currentTab=a,window.scrollTo({top:0,behavior:"smooth"}),u()}function N(a){m();const e=x.find(s=>s.id===a);e&&(t.selectedServiceForModal=e,t.isServiceModalOpen=!0,de())}function C(){t.isServiceModalOpen=!1,t.selectedServiceForModal=null;const a=document.getElementById("modal-container");a&&(a.innerHTML="")}function ee(){m(),t.isReviewModalOpen=!0,Z()}function M(){t.isReviewModalOpen=!1;const a=document.getElementById("review-modal-container");a&&(a.innerHTML="")}function O(a){C(),t.bookingForm.serviceId=a,t.activeBookingSubTab="new",f("bookings")}function te(a){a.preventDefault(),m();const e=x.find(p=>p.id===t.bookingForm.serviceId)||{name:"Appliance Repair"},s=y.find(p=>p.id===t.bookingForm.zone)||y[0],l=t.bookingForm.preferredDate==="Pick Date"?t.bookingForm.customDate:t.bookingForm.preferredDate,o=["🔧 *NEW TECHNICIAN BOOKING REQUEST*","━━━━━━━━━━━━━━━━━━━━",`👤 *Customer:* ${t.bookingForm.customerName}`,`📞 *Phone:* ${t.bookingForm.customerPhone}`,`🛠️ *Service:* ${e.name}`,`🏷️ *Brand:* ${t.bookingForm.customBrand||"Not specified"}`,`📍 *Address:* ${t.bookingForm.address||"Laxmi Sagar area"}`,`🗺️ *Zone:* ${s.name} (${s.subtitle}) - Visit: ${s.visitCharge}`,`📅 *Preferred Date:* ${l}`,`⏰ *Time Slot:* ${t.bookingForm.preferredTime}`,`📝 *Problem:* ${t.bookingForm.problem}`,"━━━━━━━━━━━━━━━━━━━━","⚡ *Sent from Prem Kumar Technicians Android App*"].join(`
`),i={id:"BK-"+Date.now().toString(36).toUpperCase(),timestamp:new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),customerName:t.bookingForm.customerName,customerPhone:t.bookingForm.customerPhone,serviceName:e.name,brand:t.bookingForm.customBrand||"General",zone:s.name,visitCharge:s.visitCharge,date:l,time:t.bookingForm.preferredTime,problem:t.bookingForm.problem,address:t.bookingForm.address,status:"Sent via WhatsApp"};_(i),v(o);const c=document.getElementById("booking-sent-banner");c&&(c.classList.remove("hidden"),setTimeout(()=>{c.classList.add("hidden")},8e3))}function ae(a){a.preventDefault(),m();const e=["⭐ *CUSTOMER FEEDBACK & RATING*","━━━━━━━━━━━━━━━━━━━━",`👤 *Name:* ${t.reviewForm.name}`,`⭐ *Rating:* ${t.reviewForm.rating} / 5 Stars`,`🛠️ *Service Taken:* ${t.reviewForm.service}`,`📝 *Review:* ${t.reviewForm.comment}`,"━━━━━━━━━━━━━━━━━━━━","📍 *Prem Kumar Technicians - Darbhanga*"].join(`
`);v(e),M(),alert("Thank you! WhatsApp is opening to send your review directly to Prem Kumar.")}function ne(){return`
    <header class="sticky top-0 z-30 bg-app-navy text-white px-4 py-3 shadow-md">
      <div class="max-w-md mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-xl bg-app-amber flex items-center justify-center font-bold text-app-navy shadow-sm">
            <span class="text-lg">PK</span>
          </div>
          <div>
            <div class="flex items-center space-x-1.5">
              <h1 class="text-base font-bold tracking-tight text-white leading-tight">Prem Kumar Technicians</h1>
            </div>
            <div class="flex items-center space-x-1 text-xs text-amber-300 font-medium">
              <span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Darbhanga, Bihar · Open 9 AM - 8 PM</span>
            </div>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <button id="header-call-btn" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition" aria-label="Call Prem Kumar">
            ${n("phone","w-4 h-4 text-emerald-400")}
          </button>
          <button id="header-wa-btn" class="w-9 h-9 rounded-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white flex items-center justify-center shadow-sm transition" aria-label="Chat on WhatsApp">
            ${n("whatsapp","w-4 h-4 fill-white")}
          </button>
        </div>
      </div>
    </header>
  `}function oe(){return`
    <nav class="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200 shadow-bottomNav pb-[env(safe-area-inset-bottom)]">
      <div class="max-w-md mx-auto grid grid-cols-5 px-1 py-1">
        ${[{id:"home",label:"Home",icon:"home"},{id:"services",label:"Services",icon:"services"},{id:"bookings",label:"Book",icon:"bookings"},{id:"reviews",label:"Reviews",icon:"reviews"},{id:"more",label:"About",icon:"more"}].map(e=>{const s=t.currentTab===e.id;return`
            <button 
              data-tab="${e.id}"
              class="tab-btn flex flex-col items-center justify-center py-1.5 px-1 transition-all ${s?"text-app-navy font-bold":"text-slate-400 hover:text-slate-600 font-medium"}"
            >
              <div class="relative flex items-center justify-center w-8 h-8 rounded-full transition-transform ${s?"bg-app-navy text-amber-300 scale-105":"text-slate-400"}">
                ${n(e.icon,"w-5 h-5")}
              </div>
              <span class="text-[11px] mt-0.5 tracking-tight">${e.label}</span>
            </button>
          `}).join("")}
      </div>
    </nav>
  `}function K(){const a=x.slice(0,6);return`
    <div class="space-y-4 pb-20 animate-fade-in">
      
      <!-- Top Emergency / Availability Card -->
      <div class="bg-gradient-to-r from-app-navy to-app-navyLight text-white rounded-2xl p-4 shadow-card mx-4 mt-3">
        <div class="flex items-start justify-between">
          <div>
            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-ping"></span> On-Duty Today
            </span>
            <h2 class="text-lg font-extrabold mt-1.5 text-white tracking-tight">Need a Technician at Doorstep?</h2>
            <p class="text-xs text-slate-300 mt-0.5 leading-relaxed">
              Fridge, TV, AC, Washing Machine & Electrical wiring repair in Darbhanga with 6 Months Warranty.
            </p>
          </div>
        </div>

        <!-- Quick 3-Action Buttons -->
        <div class="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/10">
          <button id="home-call-cta" class="touch-press flex items-center justify-center space-x-1.5 bg-white text-app-navy font-bold text-xs py-2.5 px-2 rounded-xl shadow-sm transition hover:bg-slate-100">
            ${n("phone","w-3.5 h-3.5 text-emerald-600")}
            <span>Call Now</span>
          </button>
          <button id="home-wa-cta" class="touch-press flex items-center justify-center space-x-1.5 bg-emerald-500 text-white font-bold text-xs py-2.5 px-2 rounded-xl shadow-sm transition hover:bg-emerald-600">
            ${n("whatsapp","w-3.5 h-3.5 fill-white")}
            <span>WhatsApp</span>
          </button>
          <button id="home-book-cta" class="touch-press flex items-center justify-center space-x-1 bg-app-amber text-app-navy font-extrabold text-xs py-2.5 px-2 rounded-xl shadow-sm transition hover:bg-amber-400">
            ${n("sparkles","w-3.5 h-3.5 text-app-navy")}
            <span>Book Visit</span>
          </button>
        </div>
      </div>

      <!-- Zone Pricing Comparison Card -->
      <div class="mx-4 bg-white rounded-2xl p-4 shadow-card border border-slate-100">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center space-x-2">
            <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600">${n("mapPin","w-4 h-4")}</span>
            <h3 class="font-bold text-sm text-slate-800">Darbhanga Home Visit Charges</h3>
          </div>
          <span class="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Transparent</span>
        </div>

        <div class="grid grid-cols-2 gap-2.5 text-xs">
          <!-- Zone A -->
          <div class="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 flex flex-col justify-between">
            <div>
              <span class="inline-block px-1.5 py-0.5 text-[10px] font-extrabold text-emerald-800 bg-emerald-200/60 rounded">Zone A (&lt; 3 KM)</span>
              <p class="font-black text-lg text-emerald-700 mt-1">FREE (₹0)</p>
              <p class="text-[11px] font-semibold text-slate-700 mt-0.5">Laxmi Sagar & nearby</p>
            </div>
            <p class="text-[10px] text-slate-500 mt-2">Zero home visit & zero inspection fee.</p>
          </div>

          <!-- Zone B -->
          <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <span class="inline-block px-1.5 py-0.5 text-[10px] font-extrabold text-slate-700 bg-slate-200 rounded">Zone B (&gt; 3 KM)</span>
              <p class="font-black text-lg text-app-navy mt-1">₹300 Only</p>
              <p class="text-[11px] font-semibold text-slate-700 mt-0.5">Rest of Darbhanga</p>
            </div>
            <p class="text-[10px] text-slate-500 mt-2">One-time flat visit & diagnosis charge.</p>
          </div>
        </div>

        <div class="mt-2.5 p-2 bg-amber-50 rounded-lg text-[11px] text-amber-900 border border-amber-200/50 flex items-start space-x-1.5">
          <span class="font-bold text-amber-600">ℹ️</span>
          <span>Device is inspected on-spot first. Repair cost depends on the problem & parts. <strong>No hidden charges!</strong></span>
        </div>
      </div>

      <!-- Popular Services Grid -->
      <div class="mx-4">
        <div class="flex items-center justify-between mb-3">
          <div>
            <h3 class="font-bold text-sm text-slate-900">Popular Services</h3>
            <p class="text-[11px] text-slate-500">Quick doorstep repair for all brands</p>
          </div>
          <button id="view-all-services-link" class="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center space-x-0.5">
            <span>View All (18)</span>
            ${n("chevronRight","w-3 h-3")}
          </button>
        </div>

        <div class="grid grid-cols-2 gap-2.5">
          ${a.map(e=>`
            <div class="bg-white p-3 rounded-2xl shadow-card border border-slate-100 flex flex-col justify-between service-card touch-press" data-service-id="${e.id}">
              <div>
                <div class="flex items-center justify-between">
                  <div class="w-9 h-9 rounded-xl bg-slate-100 text-app-navy flex items-center justify-center">
                    ${n(e.icon,"w-5 h-5 text-app-navy")}
                  </div>
                  ${e.badge?`<span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">${e.badge}</span>`:""}
                </div>
                <h4 class="font-bold text-xs text-slate-800 mt-2 leading-snug line-clamp-1">${e.name}</h4>
                <p class="text-[10px] text-slate-500 line-clamp-1 mt-0.5">${e.hindi}</p>
              </div>

              <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span class="text-[10px] font-bold text-emerald-600">6 Mo Warranty</span>
                <button class="text-[11px] font-bold text-blue-600 hover:text-blue-700">Details →</button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Trust Badges Carousel/Grid -->
      <div class="mx-4 bg-app-navy text-white rounded-2xl p-4 shadow-card">
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-bold text-sm text-amber-300">Why Darbhanga Chooses Us</h3>
          <span class="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded-full">10+ Years Trust</span>
        </div>

        <div class="grid grid-cols-2 gap-3 text-xs">
          <div class="flex items-start space-x-2">
            <span class="p-1.5 rounded-lg bg-white/10 text-amber-300 shrink-0">${n("user-gear","w-4 h-4")}</span>
            <div>
              <p class="font-bold text-white text-xs">Expert Master Team</p>
              <p class="text-[10px] text-slate-300 mt-0.5">10+ years hands-on experience</p>
            </div>
          </div>

          <div class="flex items-start space-x-2">
            <span class="p-1.5 rounded-lg bg-white/10 text-emerald-400 shrink-0">${n("shieldCheck","w-4 h-4")}</span>
            <div>
              <p class="font-bold text-white text-xs">6 Months Warranty</p>
              <p class="text-[10px] text-slate-300 mt-0.5">On all repairs and parts</p>
            </div>
          </div>

          <div class="flex items-start space-x-2">
            <span class="p-1.5 rounded-lg bg-white/10 text-blue-300 shrink-0">${n("clock","w-4 h-4")}</span>
            <div>
              <p class="font-bold text-white text-xs">Fast &lt;24h Solution</p>
              <p class="text-[10px] text-slate-300 mt-0.5">Same-day visit in Darbhanga</p>
            </div>
          </div>

          <div class="flex items-start space-x-2">
            <span class="p-1.5 rounded-lg bg-white/10 text-amber-400 shrink-0">${n("currency-inr","w-4 h-4")}</span>
            <div>
              <p class="font-bold text-white text-xs">Zero Hidden Fees</p>
              <p class="text-[10px] text-slate-300 mt-0.5">Quote confirmed before fix</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 4-Step Process -->
      <div class="mx-4 bg-white rounded-2xl p-4 shadow-card border border-slate-100">
        <h3 class="font-bold text-sm text-slate-800 mb-1">How It Works</h3>
        <p class="text-[11px] text-slate-500 mb-3">Simple 4-step doorstep service process</p>

        <div class="space-y-3">
          ${G.map(e=>`
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 rounded-full bg-slate-900 text-amber-300 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                ${e.step}
              </div>
              <div>
                <p class="text-xs font-bold text-slate-800">${e.title} <span class="text-[10px] font-normal text-slate-500">(${e.hindi})</span></p>
                <p class="text-[11px] text-slate-600 mt-0.5 leading-snug">${e.description}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Customer Reviews Preview -->
      <div class="mx-4 bg-white rounded-2xl p-4 shadow-card border border-slate-100">
        <div class="flex items-center justify-between mb-2">
          <div>
            <h3 class="font-bold text-sm text-slate-800">Customer Feedback</h3>
            <div class="flex items-center space-x-1 mt-0.5">
              <div class="flex text-amber-400">${n("star","w-3.5 h-3.5")}${n("star","w-3.5 h-3.5")}${n("star","w-3.5 h-3.5")}${n("star","w-3.5 h-3.5")}${n("star","w-3.5 h-3.5")}</div>
              <span class="text-xs font-bold text-slate-800">4.9 / 5</span>
              <span class="text-[10px] text-slate-500">(500+ verified jobs)</span>
            </div>
          </div>
          <button id="view-all-reviews-link" class="text-xs font-bold text-blue-600 hover:text-blue-700">All Reviews →</button>
        </div>

        <div class="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-800">${w[0].name}</span>
            <span class="text-[10px] text-slate-400">${w[0].location}</span>
          </div>
          <p class="text-[11px] text-slate-600 mt-1 italic leading-relaxed">"${w[0].quote}"</p>
          <div class="mt-2 flex items-center justify-between text-[10px]">
            <span class="font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">${w[0].service}</span>
            <span class="text-amber-500 font-bold">★★★★★ 5.0</span>
          </div>
        </div>
      </div>

      <!-- Emergency Contact Banner -->
      <div class="mx-4 bg-amber-50 border border-amber-200 rounded-2xl p-3.5 text-center">
        <p class="text-xs font-bold text-amber-950">Appliance breakdown outside normal hours?</p>
        <p class="text-[11px] text-amber-800 mt-0.5">Prem Kumar accepts urgent & emergency repair calls 24/7 across Darbhanga.</p>
        <button id="emergency-call-btn" class="mt-2.5 inline-flex items-center space-x-1.5 bg-amber-500 hover:bg-amber-600 text-app-navy font-bold text-xs py-2 px-4 rounded-xl shadow-sm transition">
          ${n("phone","w-3.5 h-3.5 text-app-navy")}
          <span>Call Prem Kumar Directly: 082710 46196</span>
        </button>
      </div>

    </div>
  `}function se(){const a=x.filter(e=>{const s=t.activeCategory==="All"||e.category===t.activeCategory,l=t.searchQuery.toLowerCase().trim();if(!l)return s;const o=e.name.toLowerCase().includes(l)||e.hindi.toLowerCase().includes(l)||e.description.toLowerCase().includes(l)||e.problems.some(i=>i.toLowerCase().includes(l))||e.category.toLowerCase().includes(l);return s&&o});return`
    <div class="space-y-3 pb-20 animate-fade-in">
      
      <!-- Top Title & Search Bar -->
      <div class="bg-white px-4 py-3 shadow-sm border-b border-slate-100 sticky top-[57px] z-20">
        <div class="relative">
          <span class="absolute left-3 top-2.5 text-slate-400">
            ${n("search","w-4 h-4")}
          </span>
          <input 
            type="text" 
            id="service-search-input"
            value="${t.searchQuery}"
            placeholder="Search 18 services (e.g. Fridge, TV, AC, Motor, Wiring)..."
            class="w-full bg-slate-100 rounded-xl pl-9 pr-8 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-app-navy"
          />
          ${t.searchQuery?`<button id="clear-search-btn" class="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600">${n("close","w-4 h-4")}</button>`:""}
        </div>

        <!-- Category Horizontal Filter Tabs -->
        <div class="flex items-center space-x-1.5 overflow-x-auto mt-2.5 pt-1 pb-0.5 no-scrollbar">
          ${q.map(e=>`
            <button 
              data-category="${e.id}"
              class="cat-filter-btn shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${t.activeCategory===e.id?"bg-app-navy text-amber-300 shadow-sm":"bg-slate-100 text-slate-600 hover:bg-slate-200"}"
            >
              ${e.label} (${e.count})
            </button>
          `).join("")}
        </div>
      </div>

      <!-- Services List / Grid -->
      <div class="mx-4 space-y-2.5">
        <div class="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>Showing <strong>${a.length}</strong> of 18 services</span>
          <span class="text-[11px] text-emerald-600 font-semibold">Doorstep Visit Available</span>
        </div>

        ${a.length===0?`
            <div class="bg-white rounded-2xl p-8 text-center shadow-card border border-slate-100">
              <span class="text-3xl">🔍</span>
              <h4 class="font-bold text-sm text-slate-800 mt-2">No matching services found</h4>
              <p class="text-xs text-slate-500 mt-1">Try another keyword or call Prem Kumar directly.</p>
              <button id="search-fallback-call" class="mt-4 inline-flex items-center space-x-1.5 bg-app-navy text-white text-xs font-bold py-2 px-4 rounded-xl">
                ${n("phone","w-3.5 h-3.5 text-amber-300")}
                <span>Call Prem Kumar (082710 46196)</span>
              </button>
            </div>
          `:a.map(e=>`
            <div class="bg-white rounded-2xl p-3.5 shadow-card border border-slate-100 service-item-card touch-press" data-service-id="${e.id}">
              <div class="flex items-start space-x-3">
                <div class="w-11 h-11 rounded-xl bg-slate-100 text-app-navy flex items-center justify-center shrink-0">
                  ${n(e.icon,"w-6 h-6 text-app-navy")}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">${e.category}</span>
                    <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">6 Mo Warranty</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900 mt-1 leading-snug">${e.name}</h4>
                  <p class="text-[11px] font-medium text-amber-700 mt-0.5">${e.hindi}</p>
                  <p class="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">${e.description}</p>
                </div>
              </div>

              <!-- Quick action bar for card -->
              <div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                <span class="text-[11px] font-semibold text-slate-600">
                  Zone A: <strong class="text-emerald-700">FREE Visit</strong>
                </span>
                <div class="flex items-center space-x-2">
                  <button class="open-details-btn text-xs font-bold text-blue-600 hover:text-blue-700 px-2.5 py-1 rounded-lg bg-blue-50 transition" data-service-id="${e.id}">
                    Details
                  </button>
                  <button class="book-this-btn text-xs font-extrabold text-app-navy bg-app-amber hover:bg-amber-400 px-3 py-1 rounded-lg shadow-sm transition" data-service-id="${e.id}">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          `).join("")}
      </div>

    </div>
  `}function re(){x.find(e=>e.id===t.bookingForm.serviceId)||x[0];const a=y.find(e=>e.id===t.bookingForm.zone)||y[0];return`
    <div class="space-y-4 pb-20 animate-fade-in">
      
      <!-- Sub-Tabs Header: New Booking vs Past History -->
      <div class="bg-white px-4 pt-3 pb-2 shadow-sm border-b border-slate-100 sticky top-[57px] z-20">
        <div class="flex bg-slate-100 rounded-xl p-1 max-w-sm mx-auto">
          <button 
            id="booking-subtab-new"
            class="flex-1 py-1.5 text-xs font-bold rounded-lg transition ${t.activeBookingSubTab==="new"?"bg-white text-app-navy shadow-sm":"text-slate-500 hover:text-slate-700"}"
          >
            New Booking Form
          </button>
          <button 
            id="booking-subtab-history"
            class="flex-1 py-1.5 text-xs font-bold rounded-lg transition flex items-center justify-center space-x-1 ${t.activeBookingSubTab==="history"?"bg-white text-app-navy shadow-sm":"text-slate-500 hover:text-slate-700"}"
          >
            <span>My Bookings</span>
            ${t.savedBookings.length>0?`<span class="bg-app-amber text-app-navy text-[10px] px-1.5 py-0.2 rounded-full font-black">${t.savedBookings.length}</span>`:""}
          </button>
        </div>
      </div>

      <!-- Success Notification Banner -->
      <div id="booking-sent-banner" class="hidden mx-4 bg-emerald-50 border border-emerald-300 rounded-2xl p-4 shadow-sm animate-fade-in">
        <div class="flex items-start space-x-2.5">
          <span class="text-xl">✅</span>
          <div>
            <h4 class="font-bold text-xs text-emerald-900">Booking Prepared for WhatsApp!</h4>
            <p class="text-[11px] text-emerald-700 mt-0.5 leading-relaxed">
              Your details have been prefilled. Simply press <strong>Send</strong> in WhatsApp. Prem Kumar will confirm your slot!
            </p>
          </div>
        </div>
      </div>

      ${t.activeBookingSubTab==="new"?`
        <!-- Guided Booking Form -->
        <div class="mx-4 bg-white rounded-2xl p-4 shadow-card border border-slate-100">
          <div class="flex items-center space-x-2 pb-3 border-b border-slate-100">
            <span class="p-2 rounded-xl bg-amber-100 text-amber-800">${n("bookings","w-5 h-5 text-amber-700")}</span>
            <div>
              <h3 class="font-bold text-sm text-slate-900">Doorstep Technician Request</h3>
              <p class="text-[11px] text-slate-500">Sent directly to Prem Kumar on WhatsApp</p>
            </div>
          </div>

          <form id="active-booking-form" class="mt-4 space-y-4">
            
            <!-- 1. Select Service -->
            <div>
              <label for="form-service-select" class="block text-xs font-bold text-slate-800 mb-1">
                Select Service / Device <span class="text-red-500">*</span>
              </label>
              <select 
                id="form-service-select" 
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-app-navy"
                required
              >
                ${x.map(e=>`
                  <option value="${e.id}" ${t.bookingForm.serviceId===e.id?"selected":""}>
                    ${e.name} (${e.hindi})
                  </option>
                `).join("")}
              </select>
            </div>

            <!-- 2. Device Brand -->
            <div>
              <label for="form-brand-input" class="block text-xs font-bold text-slate-800 mb-1">
                Device Brand <span class="text-slate-400 font-normal">(optional)</span>
              </label>
              <input 
                type="text" 
                id="form-brand-input" 
                value="${t.bookingForm.customBrand}"
                placeholder="e.g. Samsung, LG, Whirlpool, Voltas, Godrej, Sony..." 
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-app-navy"
              />
              <!-- Quick Brand Chips -->
              <div class="flex flex-wrap gap-1 mt-1.5">
                ${["Samsung","LG","Whirlpool","Voltas","Godrej","Other"].map(e=>`
                  <button type="button" class="quick-brand-chip text-[10px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md" data-brand="${e}">
                    ${e}
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- 3. Problem Description -->
            <div>
              <label for="form-problem-input" class="block text-xs font-bold text-slate-800 mb-1">
                Problem Kya Hai? <span class="text-red-500">*</span>
              </label>
              <textarea 
                id="form-problem-input" 
                rows="3" 
                required
                placeholder="Apni problem detail me likhein (e.g. Fridge cooling nahi kar raha, awaz aa rahi hai, gas filling chahiye...)"
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-app-navy"
              >${t.bookingForm.problem}</textarea>
            </div>

            <!-- 4. Service Zone Selection -->
            <div>
              <label class="block text-xs font-bold text-slate-800 mb-1.5">
                Select Service Area / Zone <span class="text-red-500">*</span>
              </label>
              <div class="grid grid-cols-2 gap-2">
                <label class="cursor-pointer p-2.5 rounded-xl border text-xs flex flex-col justify-between transition ${t.bookingForm.zone==="zone-a"?"border-emerald-500 bg-emerald-50/80":"border-slate-200 bg-slate-50"}">
                  <div class="flex items-center space-x-1.5">
                    <input type="radio" name="booking-zone" value="zone-a" ${t.bookingForm.zone==="zone-a"?"checked":""} class="zone-radio accent-emerald-600" />
                    <span class="font-bold text-xs text-slate-800">Zone A (&lt; 3 KM)</span>
                  </div>
                  <span class="text-[10px] font-black text-emerald-700 mt-1">FREE Home Visit (₹0)</span>
                  <span class="text-[9px] text-slate-500">Laxmi Sagar & nearby</span>
                </label>

                <label class="cursor-pointer p-2.5 rounded-xl border text-xs flex flex-col justify-between transition ${t.bookingForm.zone==="zone-b"?"border-blue-500 bg-blue-50/80":"border-slate-200 bg-slate-50"}">
                  <div class="flex items-center space-x-1.5">
                    <input type="radio" name="booking-zone" value="zone-b" ${t.bookingForm.zone==="zone-b"?"checked":""} class="zone-radio accent-blue-600" />
                    <span class="font-bold text-xs text-slate-800">Zone B (&gt; 3 KM)</span>
                  </div>
                  <span class="text-[10px] font-black text-app-navy mt-1">₹300 Home Visit</span>
                  <span class="text-[9px] text-slate-500">Anywhere in Darbhanga</span>
                </label>
              </div>
            </div>

            <!-- 5. Address / Locality -->
            <div>
              <label for="form-address-input" class="block text-xs font-bold text-slate-800 mb-1">
                Your Complete Address in Darbhanga <span class="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                id="form-address-input" 
                value="${t.bookingForm.address}"
                required
                placeholder="House No., Street, Landmark, Area (e.g. Laxmi Sagar, Near Gas Godown...)"
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-app-navy"
              />
            </div>

            <!-- 6. Schedule Preference -->
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label class="block text-xs font-bold text-slate-800 mb-1">Preferred Day</label>
                <select id="form-date-select" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-xs font-medium text-slate-800 focus:outline-none">
                  <option value="Today" ${t.bookingForm.preferredDate==="Today"?"selected":""}>Today</option>
                  <option value="Tomorrow" ${t.bookingForm.preferredDate==="Tomorrow"?"selected":""}>Tomorrow</option>
                  <option value="Pick Date" ${t.bookingForm.preferredDate==="Pick Date"?"selected":""}>Pick a Date</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-800 mb-1">Time Slot</label>
                <select id="form-time-select" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-xs font-medium text-slate-800 focus:outline-none">
                  <option value="Morning (9 AM - 12 PM)" ${t.bookingForm.preferredTime==="Morning (9 AM - 12 PM)"?"selected":""}>Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)" ${t.bookingForm.preferredTime==="Afternoon (12 PM - 4 PM)"?"selected":""}>Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)" ${t.bookingForm.preferredTime==="Evening (4 PM - 8 PM)"?"selected":""}>Evening (4 PM - 8 PM)</option>
                </select>
              </div>
            </div>

            <!-- 7. Customer Contact Details -->
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label for="form-name-input" class="block text-xs font-bold text-slate-800 mb-1">
                  Aapka Naam <span class="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="form-name-input" 
                  value="${t.bookingForm.customerName}"
                  required
                  placeholder="Full Name"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-app-navy"
                />
              </div>

              <div>
                <label for="form-phone-input" class="block text-xs font-bold text-slate-800 mb-1">
                  Phone Number <span class="text-red-500">*</span>
                </label>
                <input 
                  type="tel" 
                  id="form-phone-input" 
                  value="${t.bookingForm.customerPhone}"
                  required
                  pattern="[0-9+()\\- ]{10,}"
                  placeholder="10-digit mobile"
                  class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-app-navy"
                />
              </div>
            </div>

            <!-- Summary Card -->
            <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
              <div class="flex items-center justify-between">
                <span class="text-slate-500">Applicable Visit Fee:</span>
                <span class="font-extrabold text-sm ${t.bookingForm.zone==="zone-a"?"text-emerald-700":"text-app-navy"}">
                  ${a.visitCharge}
                </span>
              </div>
              <p class="text-[10px] text-slate-500 mt-1">
                Technician will inspect device on-spot and provide clear quote before repairing. <strong>6 Months Warranty included.</strong>
              </p>
            </div>

            <!-- Submit Button (WhatsApp) -->
            <button 
              type="submit" 
              class="touch-press w-full flex items-center justify-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-md transition"
            >
              ${n("whatsapp","w-5 h-5 fill-white")}
              <span>Send Booking via WhatsApp</span>
            </button>

            <!-- Direct Call Alternative -->
            <div class="text-center pt-1">
              <button type="button" id="form-direct-call-btn" class="text-xs text-blue-700 font-bold hover:underline inline-flex items-center space-x-1">
                ${n("phone","w-3 h-3 text-blue-700")}
                <span>Or Call Prem Kumar Directly: 082710 46196</span>
              </button>
            </div>

          </form>
        </div>
      `:`
        <!-- Booking History Tab -->
        <div class="mx-4 space-y-3">
          <div class="flex items-center justify-between text-xs px-1">
            <h3 class="font-bold text-slate-800">Your Booking History</h3>
            <span class="text-slate-500">Saved on this device</span>
          </div>

          ${t.savedBookings.length===0?`
            <div class="bg-white rounded-2xl p-8 text-center shadow-card border border-slate-100">
              <span class="text-3xl">📋</span>
              <h4 class="font-bold text-sm text-slate-800 mt-2">No bookings placed yet</h4>
              <p class="text-xs text-slate-500 mt-1">Submit your first repair request and track it here.</p>
              <button id="history-new-booking-btn" class="mt-4 inline-flex items-center space-x-1.5 bg-app-navy text-amber-300 text-xs font-bold py-2 px-4 rounded-xl">
                <span>Book a Technician Now</span>
              </button>
            </div>
          `:t.savedBookings.map(e=>`
            <div class="bg-white rounded-2xl p-3.5 shadow-card border border-slate-100">
              <div class="flex items-start justify-between">
                <div>
                  <span class="text-[10px] font-mono text-slate-400 font-semibold">${e.id}</span>
                  <h4 class="font-bold text-sm text-slate-900 mt-0.5">${e.serviceName}</h4>
                  <p class="text-[11px] text-slate-500">Brand: ${e.brand}</p>
                </div>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  ${e.status}
                </span>
              </div>

              <div class="mt-2.5 p-2 bg-slate-50 rounded-lg text-xs space-y-1">
                <div class="flex items-center justify-between text-slate-600 text-[11px]">
                  <span>📅 Slot: ${e.date} · ${e.time}</span>
                  <span class="font-bold text-app-navy">${e.visitCharge}</span>
                </div>
                <p class="text-[11px] text-slate-500 line-clamp-1">📍 ${e.address}</p>
                <p class="text-[11px] text-slate-700 line-clamp-1 font-medium">Issue: ${e.problem}</p>
              </div>

              <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span class="text-[10px] text-slate-400">${e.timestamp}</span>
                <div class="flex items-center space-x-2">
                  <button class="rebook-call-btn text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg transition" data-phone="${h.phoneClean}">
                    Call Followup
                  </button>
                  <button class="rebook-wa-btn text-xs font-bold text-white bg-emerald-500 px-3 py-1 rounded-lg shadow-sm transition" data-booking-id="${e.id}">
                    Chat
                  </button>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      `}

    </div>
  `}function ie(){const a=w;return`
    <div class="space-y-4 pb-20 animate-fade-in">
      
      <!-- Rating Summary Hero Card -->
      <div class="mx-4 mt-3 bg-gradient-to-br from-app-navy to-app-navyLight text-white rounded-2xl p-4 shadow-card">
        <div class="flex items-center justify-between">
          <div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-300">Verified Customer Ratings</span>
            <div class="flex items-baseline space-x-2 mt-1">
              <span class="text-3xl font-black text-white">4.9</span>
              <span class="text-sm text-slate-300">out of 5.0</span>
            </div>
            <div class="flex text-amber-400 mt-1">${n("star","w-4 h-4")}${n("star","w-4 h-4")}${n("star","w-4 h-4")}${n("star","w-4 h-4")}${n("star","w-4 h-4")}</div>
            <p class="text-xs text-slate-300 mt-1.5 font-medium">Based on 500+ home repairs in Darbhanga, Bihar</p>
          </div>

          <div class="text-right">
            <button id="open-write-review-btn" class="touch-press bg-app-amber hover:bg-amber-400 text-app-navy text-xs font-extrabold px-3 py-2 rounded-xl shadow-sm transition">
              ⭐ Rate Us
            </button>
          </div>
        </div>

        <!-- Rating Breakdown Bars -->
        <div class="mt-4 pt-3 border-t border-white/10 space-y-1.5 text-[11px]">
          <div class="flex items-center space-x-2">
            <span class="w-8 text-slate-300">5 Star</span>
            <div class="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
              <div class="h-full bg-amber-400 rounded-full" style="width: 92%"></div>
            </div>
            <span class="w-8 text-right text-slate-300">92%</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="w-8 text-slate-300">4 Star</span>
            <div class="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
              <div class="h-full bg-amber-400 rounded-full" style="width: 7%"></div>
            </div>
            <span class="w-8 text-right text-slate-300">7%</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="w-8 text-slate-300">3 Star</span>
            <div class="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
              <div class="h-full bg-amber-400 rounded-full" style="width: 1%"></div>
            </div>
            <span class="w-8 text-right text-slate-300">1%</span>
          </div>
        </div>
      </div>

      <!-- Verified Customer Reviews List -->
      <div class="mx-4 space-y-3">
        <div class="flex items-center justify-between text-xs px-1">
          <h3 class="font-bold text-slate-800">Verified Darbhanga Customers</h3>
          <span class="text-slate-500">${a.length} Reviews</span>
        </div>

        ${a.map(e=>`
          <div class="bg-white rounded-2xl p-4 shadow-card border border-slate-100 space-y-2">
            <div class="flex items-start justify-between">
              <div>
                <h4 class="font-bold text-sm text-slate-900">${e.name}</h4>
                <p class="text-[11px] text-slate-500 font-medium">📍 ${e.location}</p>
              </div>
              <div class="flex items-center space-x-1 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                <span class="text-amber-500 font-black text-xs">★</span>
                <span class="text-xs font-bold text-amber-900">${e.rating}</span>
              </div>
            </div>

            <p class="text-xs text-slate-700 leading-relaxed italic">"${e.quote}"</p>

            <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
              <span class="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">${e.service}</span>
              <span class="text-slate-400 font-medium">${e.date}</span>
            </div>
          </div>
        `).join("")}
      </div>

    </div>
  `}function le(){return`
    <div class="space-y-4 pb-20 animate-fade-in">
      
      <!-- Business Header & Founder Story -->
      <div class="mx-4 mt-3 bg-white rounded-2xl p-4 shadow-card border border-slate-100">
        <div class="flex items-start space-x-3.5">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-app-navy to-app-navyLight text-amber-300 flex items-center justify-center text-2xl font-black shrink-0 shadow-sm">
            PK
          </div>
          <div>
            <h3 class="font-extrabold text-base text-slate-900 leading-tight">Prem Kumar Technicians</h3>
            <p class="text-xs text-slate-500 mt-0.5">Electronic Appliance Repair & Electrical Services</p>
            <div class="flex items-center space-x-1 mt-1 text-[11px] font-bold text-emerald-600">
              <span>🛡️ 6 Months Warranty on All Repairs</span>
            </div>
          </div>
        </div>

        <blockquote class="mt-3 p-3 bg-amber-50/70 border-l-4 border-app-amber rounded-r-xl text-xs text-slate-800 font-medium italic leading-relaxed">
          “${h.tagline}”
          <footer class="text-[10px] text-slate-500 font-bold not-italic mt-1">— Prem Kumar, Founder & Technician</footer>
        </blockquote>

        <p class="text-xs text-slate-600 mt-3 leading-relaxed">
          Prem Kumar ne bahut kam umar se electronics repair ki duniya me kadam rakha. 10+ saal ke real experience, mehnat aur lagan ke dam par aaj poore Darbhanga ke hazaaron parivar unki service pe bharosa karte hain.
        </p>
      </div>

      <!-- Service Coverage & Location Map Card -->
      <div class="mx-4 bg-white rounded-2xl p-4 shadow-card border border-slate-100">
        <div class="flex items-center justify-between mb-2">
          <div class="flex items-center space-x-2">
            <span class="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">${n("mapPin","w-4 h-4")}</span>
            <h4 class="font-bold text-sm text-slate-900">Service Area & Shop Location</h4>
          </div>
          <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Darbhanga, Bihar</span>
        </div>

        <p class="text-xs text-slate-600 font-medium leading-relaxed">
          <strong>Shop / Workshop Address:</strong><br/>
          ${h.address}
        </p>

        <div class="mt-3 p-3 bg-slate-50 rounded-xl space-y-2 text-xs">
          <div class="flex items-start space-x-2">
            <span class="text-emerald-600 font-bold">Zone A:</span>
            <span class="text-slate-600">Laxmi Sagar, Bela, Donar, Beta (Within 3 KM) — <strong>FREE Visit</strong></span>
          </div>
          <div class="flex items-start space-x-2">
            <span class="text-blue-600 font-bold">Zone B:</span>
            <span class="text-slate-600">Laheriasarai, Bahadurpur, Kakarghatti, Mabbi, All Darbhanga — <strong>₹300 Visit</strong></span>
          </div>
        </div>

        <button id="open-google-maps-btn" class="touch-press mt-3 w-full flex items-center justify-center space-x-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-extrabold py-2.5 px-3 rounded-xl border border-blue-200 transition">
          ${n("mapPin","w-4 h-4 text-blue-600")}
          <span>Open Shop Location in Google Maps</span>
          ${n("externalLink","w-3 h-3 text-blue-500")}
        </button>
      </div>

      <!-- Working Hours & Direct Contact -->
      <div class="mx-4 bg-white rounded-2xl p-4 shadow-card border border-slate-100 space-y-3">
        <h4 class="font-bold text-sm text-slate-900">Contact & Hours</h4>
        
        <div class="space-y-2 text-xs">
          <div class="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
            <div class="flex items-center space-x-2">
              <span class="p-1 rounded-lg bg-emerald-100 text-emerald-800">${n("phone","w-3.5 h-3.5")}</span>
              <div>
                <span class="text-[10px] text-slate-400 block font-semibold">Phone Call</span>
                <span class="font-bold text-slate-800">${h.phone}</span>
              </div>
            </div>
            <button class="call-action-btn text-xs font-bold text-white bg-emerald-600 px-3 py-1 rounded-lg" data-phone="${h.phoneClean}">
              Call
            </button>
          </div>

          <div class="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
            <div class="flex items-center space-x-2">
              <span class="p-1 rounded-lg bg-emerald-100 text-emerald-800">${n("whatsapp","w-3.5 h-3.5 fill-emerald-700")}</span>
              <div>
                <span class="text-[10px] text-slate-400 block font-semibold">WhatsApp Direct</span>
                <span class="font-bold text-slate-800">${h.phone}</span>
              </div>
            </div>
            <button class="wa-action-btn text-xs font-bold text-white bg-emerald-500 px-3 py-1 rounded-lg" data-phone="${h.phoneClean}">
              Chat
            </button>
          </div>

          <div class="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
            <div class="flex items-center space-x-2">
              <span class="p-1 rounded-lg bg-blue-100 text-blue-800">${n("clock","w-3.5 h-3.5")}</span>
              <div>
                <span class="text-[10px] text-slate-400 block font-semibold">Shop Working Hours</span>
                <span class="font-bold text-slate-800">9:00 AM – 8:00 PM (All 7 Days)</span>
              </div>
            </div>
            <span class="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Open Daily</span>
          </div>
        </div>
      </div>

      <!-- 28 Supported Brands Showcase -->
      <div class="mx-4 bg-white rounded-2xl p-4 shadow-card border border-slate-100">
        <h4 class="font-bold text-sm text-slate-900 mb-1">Supported Brands</h4>
        <p class="text-[11px] text-slate-500 mb-3">Parts, repairs, and diagnostics for all 28 major brands</p>

        <div class="flex flex-wrap gap-1.5">
          ${Q.map(a=>`
            <span class="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/60">
              ${a}
            </span>
          `).join("")}
        </div>
      </div>

      <!-- App & Developer Information -->
      <div class="mx-4 bg-slate-900 text-white rounded-2xl p-4 shadow-card space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="font-bold text-xs uppercase tracking-wider text-amber-300">App Information</h4>
          <span class="text-[10px] text-slate-400">v1.0.0 (Standalone)</span>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed">
          Application ID: <code class="text-amber-200 text-[11px]">com.premkumar.technicians</code><br/>
          Platform: Android Native / Capacitor Standalone App<br/>
          Offline Mode: Fully functional offline for browsing & details
        </p>

        <div class="pt-3 border-t border-white/10 flex items-center justify-between">
          <div>
            <p class="text-xs font-bold text-white">App Developed By: <span class="text-amber-300">Piyush Kumar</span></p>
            <p class="text-[10px] text-slate-400">Website & Mobile App Developer</p>
          </div>
          <button id="contact-developer-btn" class="touch-press text-[11px] font-bold text-app-navy bg-emerald-400 hover:bg-emerald-300 px-3 py-1.5 rounded-xl transition">
            Chat Developer
          </button>
        </div>
      </div>

    </div>
  `}function de(){var s,l,o,i,c;const a=t.selectedServiceForModal,e=document.getElementById("modal-container");!e||!a||(e.innerHTML=`
    <div class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity" id="service-modal-backdrop">
      <div class="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col shadow-2xl animate-slide-up overflow-hidden">
        
        <!-- Modal Header -->
        <div class="p-4 bg-app-navy text-white flex items-start justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center text-xl shrink-0">
              ${n(a.icon,"w-6 h-6 text-amber-300")}
            </div>
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-2 py-0.5 rounded-full">${a.category}</span>
              <h3 class="font-extrabold text-base text-white mt-0.5">${a.name}</h3>
              <p class="text-xs text-slate-300 font-medium">${a.hindi}</p>
            </div>
          </div>
          <button id="close-service-modal-btn" class="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10">
            ${n("close","w-6 h-6")}
          </button>
        </div>

        <!-- Modal Body (Scrollable) -->
        <div class="p-4 overflow-y-auto space-y-4 text-xs text-slate-700">
          
          <!-- Description -->
          <div>
            <h4 class="font-bold text-slate-900 mb-1">Service Overview</h4>
            <p class="text-slate-600 leading-relaxed">${a.description}</p>
          </div>

          <!-- Common Problems Handled -->
          <div class="p-3 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 class="font-bold text-slate-900 mb-2">Common Issues Repaired on Doorstep:</h4>
            <ul class="space-y-1.5">
              ${a.problems.map(p=>`
                <li class="flex items-start space-x-2">
                  <span class="text-emerald-600 font-black shrink-0">✓</span>
                  <span class="text-slate-700 leading-tight">${p}</span>
                </li>
              `).join("")}
            </ul>
          </div>

          <!-- Supported Models / Types -->
          <div>
            <h4 class="font-bold text-slate-900 mb-1.5">Supported Types / Models:</h4>
            <div class="flex flex-wrap gap-1">
              ${a.supportedTypes.map(p=>`
                <span class="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                  ${p}
                </span>
              `).join("")}
            </div>
          </div>

          <!-- Pricing & Warranty -->
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
              <span class="text-[10px] font-bold text-emerald-800 uppercase block">Visit Charge</span>
              <span class="font-extrabold text-sm text-emerald-700">Zone A: FREE</span>
              <span class="text-[10px] text-slate-500 block mt-0.5">Zone B: ₹300 only</span>
            </div>
            <div class="p-3 rounded-xl bg-amber-50 border border-amber-200">
              <span class="text-[10px] font-bold text-amber-800 uppercase block">Warranty</span>
              <span class="font-extrabold text-sm text-amber-900">6 Months</span>
              <span class="text-[10px] text-slate-500 block mt-0.5">On all parts & fix</span>
            </div>
          </div>

        </div>

        <!-- Modal Bottom Actions -->
        <div class="p-3 bg-slate-50 border-t border-slate-100 grid grid-cols-3 gap-2">
          <button id="modal-call-btn" class="touch-press flex items-center justify-center space-x-1 bg-white text-app-navy border border-slate-200 font-bold text-xs py-2.5 rounded-xl hover:bg-slate-100">
            ${n("phone","w-3.5 h-3.5 text-emerald-600")}
            <span>Call</span>
          </button>
          <button id="modal-wa-btn" class="touch-press flex items-center justify-center space-x-1 bg-emerald-500 text-white font-bold text-xs py-2.5 rounded-xl hover:bg-emerald-600">
            ${n("whatsapp","w-3.5 h-3.5 fill-white")}
            <span>WhatsApp</span>
          </button>
          <button id="modal-book-btn" class="touch-press flex items-center justify-center space-x-1 bg-app-navy text-amber-300 font-black text-xs py-2.5 rounded-xl hover:bg-slate-800 shadow-sm">
            <span>Book Now</span>
          </button>
        </div>

      </div>
    </div>
  `,(s=document.getElementById("service-modal-backdrop"))==null||s.addEventListener("click",p=>{p.target.id==="service-modal-backdrop"&&C()}),(l=document.getElementById("close-service-modal-btn"))==null||l.addEventListener("click",C),(o=document.getElementById("modal-call-btn"))==null||o.addEventListener("click",()=>b()),(i=document.getElementById("modal-wa-btn"))==null||i.addEventListener("click",()=>{v(`Hi Prem Kumar Ji, I want to inquire about ${a.name} (${a.hindi}).`)}),(c=document.getElementById("modal-book-btn"))==null||c.addEventListener("click",()=>{O(a.id)}))}function Z(){var e,s,l;const a=document.getElementById("review-modal-container");a&&(a.innerHTML=`
    <div class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity" id="review-modal-backdrop">
      <div class="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col shadow-2xl animate-slide-up overflow-hidden">
        
        <div class="p-4 bg-app-navy text-white flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-amber-400 text-lg">⭐</span>
            <h3 class="font-extrabold text-sm text-white">Rate Prem Kumar Technicians</h3>
          </div>
          <button id="close-review-modal-btn" class="p-1 rounded-full text-slate-300 hover:text-white">
            ${n("close","w-5 h-5")}
          </button>
        </div>

        <form id="submit-review-form" class="p-4 space-y-3.5 text-xs overflow-y-auto">
          <div>
            <label class="block font-bold text-slate-800 mb-1">Your Star Rating</label>
            <div class="flex space-x-2" id="star-rating-selector">
              ${[1,2,3,4,5].map(o=>`
                <button type="button" class="star-btn text-2xl transition ${o<=t.reviewForm.rating?"text-amber-400 scale-110":"text-slate-300"}" data-star="${o}">
                  ★
                </button>
              `).join("")}
            </div>
          </div>

          <div>
            <label for="review-name-input" class="block font-bold text-slate-800 mb-1">Aapka Naam <span class="text-red-500">*</span></label>
            <input type="text" id="review-name-input" required placeholder="Full Name" value="${t.reviewForm.name}" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-app-navy" />
          </div>

          <div>
            <label for="review-service-select" class="block font-bold text-slate-800 mb-1">Kaunsi Service Li Thi? <span class="text-red-500">*</span></label>
            <select id="review-service-select" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none">
              ${x.map(o=>`
                <option value="${o.name}" ${t.reviewForm.service===o.name?"selected":""}>${o.name}</option>
              `).join("")}
            </select>
          </div>

          <div>
            <label for="review-comment-input" class="block font-bold text-slate-800 mb-1">Aapka Anubhav / Review <span class="text-red-500">*</span></label>
            <textarea id="review-comment-input" required rows="3" placeholder="Technician ka kaam kaisa laga? Time pe aaye? Problem theek hui?..." class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-app-navy">${t.reviewForm.comment}</textarea>
          </div>

          <button type="submit" class="touch-press w-full flex items-center justify-center space-x-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs py-3 px-4 rounded-xl shadow-md transition">
            ${n("whatsapp","w-4 h-4 fill-white")}
            <span>Send Feedback to Prem Kumar on WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  `,(e=document.getElementById("review-modal-backdrop"))==null||e.addEventListener("click",o=>{o.target.id==="review-modal-backdrop"&&M()}),(s=document.getElementById("close-review-modal-btn"))==null||s.addEventListener("click",M),document.querySelectorAll(".star-btn").forEach(o=>{o.addEventListener("click",()=>{t.reviewForm.rating=parseInt(o.dataset.star,10),Z()})}),(l=document.getElementById("submit-review-form"))==null||l.addEventListener("submit",o=>{var i,c,p;t.reviewForm.name=((i=document.getElementById("review-name-input"))==null?void 0:i.value)||"",t.reviewForm.service=((c=document.getElementById("review-service-select"))==null?void 0:c.value)||"",t.reviewForm.comment=((p=document.getElementById("review-comment-input"))==null?void 0:p.value)||"",ae(o)}))}function ce(){var s,l,o,i,c,p,B,E,S,A,$,P,L,D,j,I,T;document.querySelectorAll(".tab-btn").forEach(r=>{r.addEventListener("click",()=>{const d=r.dataset.tab;d&&f(d)})}),(s=document.getElementById("header-call-btn"))==null||s.addEventListener("click",()=>b()),(l=document.getElementById("header-wa-btn"))==null||l.addEventListener("click",()=>v()),(o=document.getElementById("home-call-cta"))==null||o.addEventListener("click",()=>b()),(i=document.getElementById("home-wa-cta"))==null||i.addEventListener("click",()=>v()),(c=document.getElementById("home-book-cta"))==null||c.addEventListener("click",()=>f("bookings")),(p=document.getElementById("view-all-services-link"))==null||p.addEventListener("click",()=>f("services")),(B=document.getElementById("view-all-reviews-link"))==null||B.addEventListener("click",()=>f("reviews")),(E=document.getElementById("emergency-call-btn"))==null||E.addEventListener("click",()=>b()),document.querySelectorAll(".service-card").forEach(r=>{r.addEventListener("click",()=>{const d=r.dataset.serviceId;d&&N(d)})});const a=document.getElementById("service-search-input");a&&a.addEventListener("input",r=>{t.searchQuery=r.target.value,u();const d=document.getElementById("service-search-input");d&&(d.focus(),d.setSelectionRange(t.searchQuery.length,t.searchQuery.length))}),(S=document.getElementById("clear-search-btn"))==null||S.addEventListener("click",()=>{t.searchQuery="",u()}),document.querySelectorAll(".cat-filter-btn").forEach(r=>{r.addEventListener("click",()=>{m(),t.activeCategory=r.dataset.category,u()})}),document.querySelectorAll(".open-details-btn").forEach(r=>{r.addEventListener("click",d=>{d.stopPropagation(),N(r.dataset.serviceId)})}),document.querySelectorAll(".book-this-btn").forEach(r=>{r.addEventListener("click",d=>{d.stopPropagation(),O(r.dataset.serviceId)})}),(A=document.getElementById("search-fallback-call"))==null||A.addEventListener("click",()=>b()),($=document.getElementById("booking-subtab-new"))==null||$.addEventListener("click",()=>{m(),t.activeBookingSubTab="new",u()}),(P=document.getElementById("booking-subtab-history"))==null||P.addEventListener("click",()=>{m(),t.activeBookingSubTab="history",u()}),(L=document.getElementById("history-new-booking-btn"))==null||L.addEventListener("click",()=>{m(),t.activeBookingSubTab="new",u()});const e=document.getElementById("active-booking-form");e&&(document.querySelectorAll(".quick-brand-chip").forEach(r=>{r.addEventListener("click",()=>{m(),t.bookingForm.customBrand=r.dataset.brand;const d=document.getElementById("form-brand-input");d&&(d.value=r.dataset.brand)})}),document.querySelectorAll(".zone-radio").forEach(r=>{r.addEventListener("change",d=>{m(),t.bookingForm.zone=d.target.value,u()})}),e.addEventListener("submit",r=>{var d,g,k,F,R,V,W,z;t.bookingForm.serviceId=((d=document.getElementById("form-service-select"))==null?void 0:d.value)||"fridge",t.bookingForm.customBrand=((g=document.getElementById("form-brand-input"))==null?void 0:g.value)||"",t.bookingForm.problem=((k=document.getElementById("form-problem-input"))==null?void 0:k.value)||"",t.bookingForm.address=((F=document.getElementById("form-address-input"))==null?void 0:F.value)||"",t.bookingForm.preferredDate=((R=document.getElementById("form-date-select"))==null?void 0:R.value)||"Today",t.bookingForm.preferredTime=((V=document.getElementById("form-time-select"))==null?void 0:V.value)||"Morning (9 AM - 12 PM)",t.bookingForm.customerName=((W=document.getElementById("form-name-input"))==null?void 0:W.value)||"",t.bookingForm.customerPhone=((z=document.getElementById("form-phone-input"))==null?void 0:z.value)||"",te(r)})),(D=document.getElementById("form-direct-call-btn"))==null||D.addEventListener("click",()=>b()),document.querySelectorAll(".rebook-call-btn").forEach(r=>{r.addEventListener("click",()=>b())}),document.querySelectorAll(".rebook-wa-btn").forEach(r=>{r.addEventListener("click",()=>{const d=r.dataset.bookingId,g=t.savedBookings.find(k=>k.id===d);g&&v(`Namaste Prem Kumar Ji, my booking reference is ${g.id} for ${g.serviceName}. Wanted to check the status.`)})}),(j=document.getElementById("open-write-review-btn"))==null||j.addEventListener("click",ee),(I=document.getElementById("open-google-maps-btn"))==null||I.addEventListener("click",J),document.querySelectorAll(".call-action-btn").forEach(r=>r.addEventListener("click",()=>b())),document.querySelectorAll(".wa-action-btn").forEach(r=>r.addEventListener("click",()=>v())),(T=document.getElementById("contact-developer-btn"))==null||T.addEventListener("click",Y)}function u(){const a=document.getElementById("app");if(!a)return;let e="";switch(t.currentTab){case"home":e=K();break;case"services":e=se();break;case"bookings":e=re();break;case"reviews":e=ie();break;case"more":e=le();break;default:e=K()}a.innerHTML=`
    <div class="flex flex-col min-h-screen bg-app-bg text-slate-900 selection:bg-app-amber selection:text-app-navy">
      ${ne()}
      <main class="flex-1 max-w-md w-full mx-auto pb-10">
        ${e}
      </main>
      ${oe()}
      <div id="modal-container"></div>
      <div id="review-modal-container"></div>
    </div>
  `,ce()}document.addEventListener("DOMContentLoaded",()=>{U(),X(),u()});
