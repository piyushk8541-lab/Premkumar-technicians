/**
 * Prem Kumar Technicians - Standalone Android Mobile Application
 * Core Application Logic & State Management
 */

import {
  BUSINESS_INFO,
  PRICING_ZONES,
  SERVICE_CATEGORIES,
  SERVICES,
  TRUST_FEATURES,
  HOW_IT_WORKS_STEPS,
  BRANDS,
  REVIEWS,
} from './data/business.js';
import { ICONS, renderIcon } from './components/icons.js';

// Global App State
const state = {
  currentTab: 'home',
  activeCategory: 'All',
  searchQuery: '',
  selectedServiceForModal: null,
  isServiceModalOpen: false,
  isReviewModalOpen: false,
  activeBookingSubTab: 'new',
  reviewFilter: 'All',
  // Guided Booking Form State
  bookingForm: {
    serviceId: 'fridge',
    customBrand: '',
    problem: '',
    zone: 'zone-a',
    address: '',
    preferredDate: 'Today',
    customDate: '',
    preferredTime: 'Morning (9 AM - 12 PM)',
    customerName: '',
    customerPhone: '',
    notes: '',
  },
  // Submit Review Form State
  reviewForm: {
    name: '',
    service: 'Fridge / Refrigerator Repair',
    rating: 5,
    comment: '',
  },
  // Local Bookings Storage
  savedBookings: [],
};

// Initialize Local Storage
function loadSavedBookings() {
  try {
    const data = localStorage.getItem('pkt_saved_bookings');
    if (data) {
      state.savedBookings = JSON.parse(data);
    }
  } catch (e) {
    console.error('Error loading bookings from localStorage', e);
  }
}

function persistBooking(booking) {
  try {
    state.savedBookings.unshift(booking);
    localStorage.setItem('pkt_saved_bookings', JSON.stringify(state.savedBookings));
  } catch (e) {
    console.error('Error saving booking to localStorage', e);
  }
}

// Native Bridge & Fallback Helpers
async function callPhone(phoneNumber = BUSINESS_INFO.phoneClean) {
  triggerHaptic();
  const telUrl = `tel:+${phoneNumber}`;
  try {
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.ExternalLinks) {
      await window.Capacitor.Plugins.ExternalLinks.open({ url: telUrl });
      return;
    }
  } catch (e) {
    console.warn('Native ExternalLinksPlugin failed, falling back to window.location', e);
  }
  window.location.href = telUrl;
}

async function openWhatsApp(message = '') {
  triggerHaptic();
  const encoded = encodeURIComponent(message || `Namaste Prem Kumar Ji, mujhe repair service ke baare mein jankari chahiye.`);
  const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;
  try {
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.ExternalLinks) {
      await window.Capacitor.Plugins.ExternalLinks.open({ url: waUrl });
      return;
    }
  } catch (e) {
    console.warn('Native ExternalLinksPlugin failed, falling back to window.open', e);
  }
  window.open(waUrl, '_blank', 'noopener');
}

async function openMaps() {
  triggerHaptic();
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=Laxmi+Sagar+Gas+Godown+Darbhanga+Bihar`;
  try {
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.ExternalLinks) {
      await window.Capacitor.Plugins.ExternalLinks.open({ url: mapsUrl });
      return;
    }
  } catch (e) {
    console.warn('Native ExternalLinksPlugin failed, falling back to window.open', e);
  }
  window.open(mapsUrl, '_blank', 'noopener');
}

async function openDeveloperWhatsApp() {
  triggerHaptic();
  const text = encodeURIComponent(
    `Hi Piyush Kumar, I saw your work on the Prem Kumar Technicians Android app. I also want an app/website built for my business. Please share details.`
  );
  const waUrl = `https://wa.me/${BUSINESS_INFO.developer.phoneClean}?text=${text}`;
  try {
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.ExternalLinks) {
      await window.Capacitor.Plugins.ExternalLinks.open({ url: waUrl });
      return;
    }
  } catch (e) {
    console.warn('Native ExternalLinksPlugin failed, falling back to window.open', e);
  }
  window.open(waUrl, '_blank', 'noopener');
}

function triggerHaptic() {
  if (navigator && typeof navigator.vibrate === 'function') {
    navigator.vibrate(15);
  }
}

// Android Hardware Back Button Handling
function setupAndroidBackButton() {
  if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App) {
    window.Capacitor.Plugins.App.addListener('backButton', () => {
      if (state.isServiceModalOpen) {
        closeServiceModal();
        return;
      }
      if (state.isReviewModalOpen) {
        closeReviewModal();
        return;
      }
      if (state.currentTab !== 'home') {
        switchTab('home');
        return;
      }
      // If at home and no modal open, minimize or exit
      window.Capacitor.Plugins.App.exitApp();
    });
  }
}

// Navigation / Tab Switching
export function switchTab(tabName) {
  triggerHaptic();
  state.currentTab = tabName;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

export function openServiceDetails(serviceId) {
  triggerHaptic();
  const service = SERVICES.find((s) => s.id === serviceId);
  if (!service) return;
  state.selectedServiceForModal = service;
  state.isServiceModalOpen = true;
  renderServiceModal();
}

export function closeServiceModal() {
  state.isServiceModalOpen = false;
  state.selectedServiceForModal = null;
  const modalContainer = document.getElementById('modal-container');
  if (modalContainer) modalContainer.innerHTML = '';
}

export function openReviewModal() {
  triggerHaptic();
  state.isReviewModalOpen = true;
  renderReviewModal();
}

export function closeReviewModal() {
  state.isReviewModalOpen = false;
  const modalContainer = document.getElementById('review-modal-container');
  if (modalContainer) modalContainer.innerHTML = '';
}

export function startBookingFromService(serviceId) {
  closeServiceModal();
  state.bookingForm.serviceId = serviceId;
  state.activeBookingSubTab = 'new';
  switchTab('bookings');
}

// Booking Form Actions
function handleBookingSubmit(event) {
  event.preventDefault();
  triggerHaptic();

  const service = SERVICES.find((s) => s.id === state.bookingForm.serviceId) || { name: 'Appliance Repair' };
  const zoneInfo = PRICING_ZONES.find((z) => z.id === state.bookingForm.zone) || PRICING_ZONES[0];
  const dateStr = state.bookingForm.preferredDate === 'Pick Date' ? state.bookingForm.customDate : state.bookingForm.preferredDate;

  // Format WhatsApp message
  const msg = [
    `🔧 *NEW TECHNICIAN BOOKING REQUEST*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Customer:* ${state.bookingForm.customerName}`,
    `📞 *Phone:* ${state.bookingForm.customerPhone}`,
    `🛠️ *Service:* ${service.name}`,
    `🏷️ *Brand:* ${state.bookingForm.customBrand || 'Not specified'}`,
    `📍 *Address:* ${state.bookingForm.address || 'Laxmi Sagar area'}`,
    `🗺️ *Zone:* ${zoneInfo.name} (${zoneInfo.subtitle}) - Visit: ${zoneInfo.visitCharge}`,
    `📅 *Preferred Date:* ${dateStr}`,
    `⏰ *Time Slot:* ${state.bookingForm.preferredTime}`,
    `📝 *Problem:* ${state.bookingForm.problem}`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `⚡ *Sent from Prem Kumar Technicians Android App*`,
  ].join('\n');

  // Save to booking history
  const newBooking = {
    id: 'BK-' + Date.now().toString(36).toUpperCase(),
    timestamp: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    customerName: state.bookingForm.customerName,
    customerPhone: state.bookingForm.customerPhone,
    serviceName: service.name,
    brand: state.bookingForm.customBrand || 'General',
    zone: zoneInfo.name,
    visitCharge: zoneInfo.visitCharge,
    date: dateStr,
    time: state.bookingForm.preferredTime,
    problem: state.bookingForm.problem,
    address: state.bookingForm.address,
    status: 'Sent via WhatsApp',
  };
  persistBooking(newBooking);

  // Open WhatsApp
  openWhatsApp(msg);

  // Show confirmation alert & switch to history tab
  const alertEl = document.getElementById('booking-sent-banner');
  if (alertEl) {
    alertEl.classList.remove('hidden');
    setTimeout(() => {
      alertEl.classList.add('hidden');
    }, 8000);
  }
}

// Review Submission Handler
function handleReviewSubmit(event) {
  event.preventDefault();
  triggerHaptic();

  const msg = [
    `⭐ *CUSTOMER FEEDBACK & RATING*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Name:* ${state.reviewForm.name}`,
    `⭐ *Rating:* ${state.reviewForm.rating} / 5 Stars`,
    `🛠️ *Service Taken:* ${state.reviewForm.service}`,
    `📝 *Review:* ${state.reviewForm.comment}`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `📍 *Prem Kumar Technicians - Darbhanga*`,
  ].join('\n');

  openWhatsApp(msg);
  closeReviewModal();

  alert('Thank you! WhatsApp is opening to send your review directly to Prem Kumar.');
}

// RENDER FUNCTIONS

// Render Top App Bar (Header)
function renderHeader() {
  return `
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
            ${renderIcon('phone', 'w-4 h-4 text-emerald-400')}
          </button>
          <button id="header-wa-btn" class="w-9 h-9 rounded-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white flex items-center justify-center shadow-sm transition" aria-label="Chat on WhatsApp">
            ${renderIcon('whatsapp', 'w-4 h-4 fill-white')}
          </button>
        </div>
      </div>
    </header>
  `;
}

// Render Bottom Navigation
function renderBottomNav() {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'services', label: 'Services', icon: 'services' },
    { id: 'bookings', label: 'Book', icon: 'bookings' },
    { id: 'reviews', label: 'Reviews', icon: 'reviews' },
    { id: 'more', label: 'About', icon: 'more' },
  ];

  return `
    <nav class="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200 shadow-bottomNav pb-[env(safe-area-inset-bottom)]">
      <div class="max-w-md mx-auto grid grid-cols-5 px-1 py-1">
        ${tabs
          .map((tab) => {
            const isActive = state.currentTab === tab.id;
            return `
            <button 
              data-tab="${tab.id}"
              class="tab-btn flex flex-col items-center justify-center py-1.5 px-1 transition-all ${
                isActive ? 'text-app-navy font-bold' : 'text-slate-400 hover:text-slate-600 font-medium'
              }"
            >
              <div class="relative flex items-center justify-center w-8 h-8 rounded-full transition-transform ${
                isActive ? 'bg-app-navy text-amber-300 scale-105' : 'text-slate-400'
              }">
                ${renderIcon(tab.icon, 'w-5 h-5')}
              </div>
              <span class="text-[11px] mt-0.5 tracking-tight">${tab.label}</span>
            </button>
          `;
          })
          .join('')}
      </div>
    </nav>
  `;
}

// Render TAB 1: Home Screen
function renderHomeTab() {
  const popularServices = SERVICES.slice(0, 6);

  return `
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
            ${renderIcon('phone', 'w-3.5 h-3.5 text-emerald-600')}
            <span>Call Now</span>
          </button>
          <button id="home-wa-cta" class="touch-press flex items-center justify-center space-x-1.5 bg-emerald-500 text-white font-bold text-xs py-2.5 px-2 rounded-xl shadow-sm transition hover:bg-emerald-600">
            ${renderIcon('whatsapp', 'w-3.5 h-3.5 fill-white')}
            <span>WhatsApp</span>
          </button>
          <button id="home-book-cta" class="touch-press flex items-center justify-center space-x-1 bg-app-amber text-app-navy font-extrabold text-xs py-2.5 px-2 rounded-xl shadow-sm transition hover:bg-amber-400">
            ${renderIcon('sparkles', 'w-3.5 h-3.5 text-app-navy')}
            <span>Book Visit</span>
          </button>
        </div>
      </div>

      <!-- Zone Pricing Comparison Card -->
      <div class="mx-4 bg-white rounded-2xl p-4 shadow-card border border-slate-100">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center space-x-2">
            <span class="p-1.5 rounded-lg bg-blue-50 text-blue-600">${renderIcon('mapPin', 'w-4 h-4')}</span>
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
            ${renderIcon('chevronRight', 'w-3 h-3')}
          </button>
        </div>

        <div class="grid grid-cols-2 gap-2.5">
          ${popularServices
            .map(
              (s) => `
            <div class="bg-white p-3 rounded-2xl shadow-card border border-slate-100 flex flex-col justify-between service-card touch-press" data-service-id="${s.id}">
              <div>
                <div class="flex items-center justify-between">
                  <div class="w-9 h-9 rounded-xl bg-slate-100 text-app-navy flex items-center justify-center">
                    ${renderIcon(s.icon, 'w-5 h-5 text-app-navy')}
                  </div>
                  ${
                    s.badge
                      ? `<span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-amber-100 text-amber-800">${s.badge}</span>`
                      : ''
                  }
                </div>
                <h4 class="font-bold text-xs text-slate-800 mt-2 leading-snug line-clamp-1">${s.name}</h4>
                <p class="text-[10px] text-slate-500 line-clamp-1 mt-0.5">${s.hindi}</p>
              </div>

              <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span class="text-[10px] font-bold text-emerald-600">6 Mo Warranty</span>
                <button class="text-[11px] font-bold text-blue-600 hover:text-blue-700">Details →</button>
              </div>
            </div>
          `
            )
            .join('')}
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
            <span class="p-1.5 rounded-lg bg-white/10 text-amber-300 shrink-0">${renderIcon('user-gear', 'w-4 h-4')}</span>
            <div>
              <p class="font-bold text-white text-xs">Expert Master Team</p>
              <p class="text-[10px] text-slate-300 mt-0.5">10+ years hands-on experience</p>
            </div>
          </div>

          <div class="flex items-start space-x-2">
            <span class="p-1.5 rounded-lg bg-white/10 text-emerald-400 shrink-0">${renderIcon('shieldCheck', 'w-4 h-4')}</span>
            <div>
              <p class="font-bold text-white text-xs">6 Months Warranty</p>
              <p class="text-[10px] text-slate-300 mt-0.5">On all repairs and parts</p>
            </div>
          </div>

          <div class="flex items-start space-x-2">
            <span class="p-1.5 rounded-lg bg-white/10 text-blue-300 shrink-0">${renderIcon('clock', 'w-4 h-4')}</span>
            <div>
              <p class="font-bold text-white text-xs">Fast &lt;24h Solution</p>
              <p class="text-[10px] text-slate-300 mt-0.5">Same-day visit in Darbhanga</p>
            </div>
          </div>

          <div class="flex items-start space-x-2">
            <span class="p-1.5 rounded-lg bg-white/10 text-amber-400 shrink-0">${renderIcon('currency-inr', 'w-4 h-4')}</span>
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
          ${HOW_IT_WORKS_STEPS.map(
            (step) => `
            <div class="flex items-start space-x-3">
              <div class="w-6 h-6 rounded-full bg-slate-900 text-amber-300 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                ${step.step}
              </div>
              <div>
                <p class="text-xs font-bold text-slate-800">${step.title} <span class="text-[10px] font-normal text-slate-500">(${step.hindi})</span></p>
                <p class="text-[11px] text-slate-600 mt-0.5 leading-snug">${step.description}</p>
              </div>
            </div>
          `
          ).join('')}
        </div>
      </div>

      <!-- Customer Reviews Preview -->
      <div class="mx-4 bg-white rounded-2xl p-4 shadow-card border border-slate-100">
        <div class="flex items-center justify-between mb-2">
          <div>
            <h3 class="font-bold text-sm text-slate-800">Customer Feedback</h3>
            <div class="flex items-center space-x-1 mt-0.5">
              <div class="flex text-amber-400">${renderIcon('star', 'w-3.5 h-3.5')}${renderIcon('star', 'w-3.5 h-3.5')}${renderIcon('star', 'w-3.5 h-3.5')}${renderIcon('star', 'w-3.5 h-3.5')}${renderIcon('star', 'w-3.5 h-3.5')}</div>
              <span class="text-xs font-bold text-slate-800">4.9 / 5</span>
              <span class="text-[10px] text-slate-500">(500+ verified jobs)</span>
            </div>
          </div>
          <button id="view-all-reviews-link" class="text-xs font-bold text-blue-600 hover:text-blue-700">All Reviews →</button>
        </div>

        <div class="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-800">${REVIEWS[0].name}</span>
            <span class="text-[10px] text-slate-400">${REVIEWS[0].location}</span>
          </div>
          <p class="text-[11px] text-slate-600 mt-1 italic leading-relaxed">"${REVIEWS[0].quote}"</p>
          <div class="mt-2 flex items-center justify-between text-[10px]">
            <span class="font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">${REVIEWS[0].service}</span>
            <span class="text-amber-500 font-bold">★★★★★ 5.0</span>
          </div>
        </div>
      </div>

      <!-- Emergency Contact Banner -->
      <div class="mx-4 bg-amber-50 border border-amber-200 rounded-2xl p-3.5 text-center">
        <p class="text-xs font-bold text-amber-950">Appliance breakdown outside normal hours?</p>
        <p class="text-[11px] text-amber-800 mt-0.5">Prem Kumar accepts urgent & emergency repair calls 24/7 across Darbhanga.</p>
        <button id="emergency-call-btn" class="mt-2.5 inline-flex items-center space-x-1.5 bg-amber-500 hover:bg-amber-600 text-app-navy font-bold text-xs py-2 px-4 rounded-xl shadow-sm transition">
          ${renderIcon('phone', 'w-3.5 h-3.5 text-app-navy')}
          <span>Call Prem Kumar Directly: 082710 46196</span>
        </button>
      </div>

    </div>
  `;
}

// Render TAB 2: Services Screen (All 18 Services)
function renderServicesTab() {
  const filtered = SERVICES.filter((s) => {
    const matchesCat = state.activeCategory === 'All' || s.category === state.activeCategory;
    const q = state.searchQuery.toLowerCase().trim();
    if (!q) return matchesCat;
    const matchesQuery =
      s.name.toLowerCase().includes(q) ||
      s.hindi.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.problems.some((p) => p.toLowerCase().includes(q)) ||
      s.category.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  return `
    <div class="space-y-3 pb-20 animate-fade-in">
      
      <!-- Top Title & Search Bar -->
      <div class="bg-white px-4 py-3 shadow-sm border-b border-slate-100 sticky top-[57px] z-20">
        <div class="relative">
          <span class="absolute left-3 top-2.5 text-slate-400">
            ${renderIcon('search', 'w-4 h-4')}
          </span>
          <input 
            type="text" 
            id="service-search-input"
            value="${state.searchQuery}"
            placeholder="Search 18 services (e.g. Fridge, TV, AC, Motor, Wiring)..."
            class="w-full bg-slate-100 rounded-xl pl-9 pr-8 py-2 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-app-navy"
          />
          ${
            state.searchQuery
              ? `<button id="clear-search-btn" class="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600">${renderIcon('close', 'w-4 h-4')}</button>`
              : ''
          }
        </div>

        <!-- Category Horizontal Filter Tabs -->
        <div class="flex items-center space-x-1.5 overflow-x-auto mt-2.5 pt-1 pb-0.5 no-scrollbar">
          ${SERVICE_CATEGORIES.map(
            (cat) => `
            <button 
              data-category="${cat.id}"
              class="cat-filter-btn shrink-0 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                state.activeCategory === cat.id
                  ? 'bg-app-navy text-amber-300 shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }"
            >
              ${cat.label} (${cat.count})
            </button>
          `
          ).join('')}
        </div>
      </div>

      <!-- Services List / Grid -->
      <div class="mx-4 space-y-2.5">
        <div class="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>Showing <strong>${filtered.length}</strong> of 18 services</span>
          <span class="text-[11px] text-emerald-600 font-semibold">Doorstep Visit Available</span>
        </div>

        ${
          filtered.length === 0
            ? `
            <div class="bg-white rounded-2xl p-8 text-center shadow-card border border-slate-100">
              <span class="text-3xl">🔍</span>
              <h4 class="font-bold text-sm text-slate-800 mt-2">No matching services found</h4>
              <p class="text-xs text-slate-500 mt-1">Try another keyword or call Prem Kumar directly.</p>
              <button id="search-fallback-call" class="mt-4 inline-flex items-center space-x-1.5 bg-app-navy text-white text-xs font-bold py-2 px-4 rounded-xl">
                ${renderIcon('phone', 'w-3.5 h-3.5 text-amber-300')}
                <span>Call Prem Kumar (082710 46196)</span>
              </button>
            </div>
          `
            : filtered
                .map(
                  (s) => `
            <div class="bg-white rounded-2xl p-3.5 shadow-card border border-slate-100 service-item-card touch-press" data-service-id="${s.id}">
              <div class="flex items-start space-x-3">
                <div class="w-11 h-11 rounded-xl bg-slate-100 text-app-navy flex items-center justify-center shrink-0">
                  ${renderIcon(s.icon, 'w-6 h-6 text-app-navy')}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">${s.category}</span>
                    <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">6 Mo Warranty</span>
                  </div>
                  <h4 class="font-bold text-sm text-slate-900 mt-1 leading-snug">${s.name}</h4>
                  <p class="text-[11px] font-medium text-amber-700 mt-0.5">${s.hindi}</p>
                  <p class="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">${s.description}</p>
                </div>
              </div>

              <!-- Quick action bar for card -->
              <div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                <span class="text-[11px] font-semibold text-slate-600">
                  Zone A: <strong class="text-emerald-700">FREE Visit</strong>
                </span>
                <div class="flex items-center space-x-2">
                  <button class="open-details-btn text-xs font-bold text-blue-600 hover:text-blue-700 px-2.5 py-1 rounded-lg bg-blue-50 transition" data-service-id="${s.id}">
                    Details
                  </button>
                  <button class="book-this-btn text-xs font-extrabold text-app-navy bg-app-amber hover:bg-amber-400 px-3 py-1 rounded-lg shadow-sm transition" data-service-id="${s.id}">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          `
                )
                .join('')
        }
      </div>

    </div>
  `;
}

// Render TAB 3: Guided Booking Wizard Screen
function renderBookingsTab() {
  const selectedService = SERVICES.find((s) => s.id === state.bookingForm.serviceId) || SERVICES[0];
  const activeZone = PRICING_ZONES.find((z) => z.id === state.bookingForm.zone) || PRICING_ZONES[0];

  return `
    <div class="space-y-4 pb-20 animate-fade-in">
      
      <!-- Sub-Tabs Header: New Booking vs Past History -->
      <div class="bg-white px-4 pt-3 pb-2 shadow-sm border-b border-slate-100 sticky top-[57px] z-20">
        <div class="flex bg-slate-100 rounded-xl p-1 max-w-sm mx-auto">
          <button 
            id="booking-subtab-new"
            class="flex-1 py-1.5 text-xs font-bold rounded-lg transition ${
              state.activeBookingSubTab === 'new'
                ? 'bg-white text-app-navy shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }"
          >
            New Booking Form
          </button>
          <button 
            id="booking-subtab-history"
            class="flex-1 py-1.5 text-xs font-bold rounded-lg transition flex items-center justify-center space-x-1 ${
              state.activeBookingSubTab === 'history'
                ? 'bg-white text-app-navy shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }"
          >
            <span>My Bookings</span>
            ${
              state.savedBookings.length > 0
                ? `<span class="bg-app-amber text-app-navy text-[10px] px-1.5 py-0.2 rounded-full font-black">${state.savedBookings.length}</span>`
                : ''
            }
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

      ${
        state.activeBookingSubTab === 'new'
          ? `
        <!-- Guided Booking Form -->
        <div class="mx-4 bg-white rounded-2xl p-4 shadow-card border border-slate-100">
          <div class="flex items-center space-x-2 pb-3 border-b border-slate-100">
            <span class="p-2 rounded-xl bg-amber-100 text-amber-800">${renderIcon('bookings', 'w-5 h-5 text-amber-700')}</span>
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
                ${SERVICES.map(
                  (s) => `
                  <option value="${s.id}" ${state.bookingForm.serviceId === s.id ? 'selected' : ''}>
                    ${s.name} (${s.hindi})
                  </option>
                `
                ).join('')}
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
                value="${state.bookingForm.customBrand}"
                placeholder="e.g. Samsung, LG, Whirlpool, Voltas, Godrej, Sony..." 
                class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-app-navy"
              />
              <!-- Quick Brand Chips -->
              <div class="flex flex-wrap gap-1 mt-1.5">
                ${['Samsung', 'LG', 'Whirlpool', 'Voltas', 'Godrej', 'Other'].map(
                  (b) => `
                  <button type="button" class="quick-brand-chip text-[10px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md" data-brand="${b}">
                    ${b}
                  </button>
                `
                ).join('')}
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
              >${state.bookingForm.problem}</textarea>
            </div>

            <!-- 4. Service Zone Selection -->
            <div>
              <label class="block text-xs font-bold text-slate-800 mb-1.5">
                Select Service Area / Zone <span class="text-red-500">*</span>
              </label>
              <div class="grid grid-cols-2 gap-2">
                <label class="cursor-pointer p-2.5 rounded-xl border text-xs flex flex-col justify-between transition ${
                  state.bookingForm.zone === 'zone-a'
                    ? 'border-emerald-500 bg-emerald-50/80'
                    : 'border-slate-200 bg-slate-50'
                }">
                  <div class="flex items-center space-x-1.5">
                    <input type="radio" name="booking-zone" value="zone-a" ${
                      state.bookingForm.zone === 'zone-a' ? 'checked' : ''
                    } class="zone-radio accent-emerald-600" />
                    <span class="font-bold text-xs text-slate-800">Zone A (&lt; 3 KM)</span>
                  </div>
                  <span class="text-[10px] font-black text-emerald-700 mt-1">FREE Home Visit (₹0)</span>
                  <span class="text-[9px] text-slate-500">Laxmi Sagar & nearby</span>
                </label>

                <label class="cursor-pointer p-2.5 rounded-xl border text-xs flex flex-col justify-between transition ${
                  state.bookingForm.zone === 'zone-b'
                    ? 'border-blue-500 bg-blue-50/80'
                    : 'border-slate-200 bg-slate-50'
                }">
                  <div class="flex items-center space-x-1.5">
                    <input type="radio" name="booking-zone" value="zone-b" ${
                      state.bookingForm.zone === 'zone-b' ? 'checked' : ''
                    } class="zone-radio accent-blue-600" />
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
                value="${state.bookingForm.address}"
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
                  <option value="Today" ${state.bookingForm.preferredDate === 'Today' ? 'selected' : ''}>Today</option>
                  <option value="Tomorrow" ${state.bookingForm.preferredDate === 'Tomorrow' ? 'selected' : ''}>Tomorrow</option>
                  <option value="Pick Date" ${state.bookingForm.preferredDate === 'Pick Date' ? 'selected' : ''}>Pick a Date</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-800 mb-1">Time Slot</label>
                <select id="form-time-select" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-2 text-xs font-medium text-slate-800 focus:outline-none">
                  <option value="Morning (9 AM - 12 PM)" ${state.bookingForm.preferredTime === 'Morning (9 AM - 12 PM)' ? 'selected' : ''}>Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)" ${state.bookingForm.preferredTime === 'Afternoon (12 PM - 4 PM)' ? 'selected' : ''}>Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)" ${state.bookingForm.preferredTime === 'Evening (4 PM - 8 PM)' ? 'selected' : ''}>Evening (4 PM - 8 PM)</option>
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
                  value="${state.bookingForm.customerName}"
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
                  value="${state.bookingForm.customerPhone}"
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
                <span class="font-extrabold text-sm ${state.bookingForm.zone === 'zone-a' ? 'text-emerald-700' : 'text-app-navy'}">
                  ${activeZone.visitCharge}
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
              ${renderIcon('whatsapp', 'w-5 h-5 fill-white')}
              <span>Send Booking via WhatsApp</span>
            </button>

            <!-- Direct Call Alternative -->
            <div class="text-center pt-1">
              <button type="button" id="form-direct-call-btn" class="text-xs text-blue-700 font-bold hover:underline inline-flex items-center space-x-1">
                ${renderIcon('phone', 'w-3 h-3 text-blue-700')}
                <span>Or Call Prem Kumar Directly: 082710 46196</span>
              </button>
            </div>

          </form>
        </div>
      `
          : `
        <!-- Booking History Tab -->
        <div class="mx-4 space-y-3">
          <div class="flex items-center justify-between text-xs px-1">
            <h3 class="font-bold text-slate-800">Your Booking History</h3>
            <span class="text-slate-500">Saved on this device</span>
          </div>

          ${
            state.savedBookings.length === 0
              ? `
            <div class="bg-white rounded-2xl p-8 text-center shadow-card border border-slate-100">
              <span class="text-3xl">📋</span>
              <h4 class="font-bold text-sm text-slate-800 mt-2">No bookings placed yet</h4>
              <p class="text-xs text-slate-500 mt-1">Submit your first repair request and track it here.</p>
              <button id="history-new-booking-btn" class="mt-4 inline-flex items-center space-x-1.5 bg-app-navy text-amber-300 text-xs font-bold py-2 px-4 rounded-xl">
                <span>Book a Technician Now</span>
              </button>
            </div>
          `
              : state.savedBookings
                  .map(
                    (bk) => `
            <div class="bg-white rounded-2xl p-3.5 shadow-card border border-slate-100">
              <div class="flex items-start justify-between">
                <div>
                  <span class="text-[10px] font-mono text-slate-400 font-semibold">${bk.id}</span>
                  <h4 class="font-bold text-sm text-slate-900 mt-0.5">${bk.serviceName}</h4>
                  <p class="text-[11px] text-slate-500">Brand: ${bk.brand}</p>
                </div>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  ${bk.status}
                </span>
              </div>

              <div class="mt-2.5 p-2 bg-slate-50 rounded-lg text-xs space-y-1">
                <div class="flex items-center justify-between text-slate-600 text-[11px]">
                  <span>📅 Slot: ${bk.date} · ${bk.time}</span>
                  <span class="font-bold text-app-navy">${bk.visitCharge}</span>
                </div>
                <p class="text-[11px] text-slate-500 line-clamp-1">📍 ${bk.address}</p>
                <p class="text-[11px] text-slate-700 line-clamp-1 font-medium">Issue: ${bk.problem}</p>
              </div>

              <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span class="text-[10px] text-slate-400">${bk.timestamp}</span>
                <div class="flex items-center space-x-2">
                  <button class="rebook-call-btn text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg transition" data-phone="${BUSINESS_INFO.phoneClean}">
                    Call Followup
                  </button>
                  <button class="rebook-wa-btn text-xs font-bold text-white bg-emerald-500 px-3 py-1 rounded-lg shadow-sm transition" data-booking-id="${bk.id}">
                    Chat
                  </button>
                </div>
              </div>
            </div>
          `
                  )
                  .join('')
          }
        </div>
      `
      }

    </div>
  `;
}

// Render TAB 4: Reviews Screen
function renderReviewsTab() {
  const filtered =
    state.reviewFilter === 'All' ? REVIEWS : REVIEWS.filter((r) => r.service.toLowerCase().includes(state.reviewFilter.toLowerCase()));

  return `
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
            <div class="flex text-amber-400 mt-1">${renderIcon('star', 'w-4 h-4')}${renderIcon('star', 'w-4 h-4')}${renderIcon('star', 'w-4 h-4')}${renderIcon('star', 'w-4 h-4')}${renderIcon('star', 'w-4 h-4')}</div>
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
          <span class="text-slate-500">${filtered.length} Reviews</span>
        </div>

        ${filtered
          .map(
            (r) => `
          <div class="bg-white rounded-2xl p-4 shadow-card border border-slate-100 space-y-2">
            <div class="flex items-start justify-between">
              <div>
                <h4 class="font-bold text-sm text-slate-900">${r.name}</h4>
                <p class="text-[11px] text-slate-500 font-medium">📍 ${r.location}</p>
              </div>
              <div class="flex items-center space-x-1 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                <span class="text-amber-500 font-black text-xs">★</span>
                <span class="text-xs font-bold text-amber-900">${r.rating}</span>
              </div>
            </div>

            <p class="text-xs text-slate-700 leading-relaxed italic">"${r.quote}"</p>

            <div class="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px]">
              <span class="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">${r.service}</span>
              <span class="text-slate-400 font-medium">${r.date}</span>
            </div>
          </div>
        `
          )
          .join('')}
      </div>

    </div>
  `;
}

// Render TAB 5: Profile / About / More Screen
function renderMoreTab() {
  return `
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
          “${BUSINESS_INFO.tagline}”
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
            <span class="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">${renderIcon('mapPin', 'w-4 h-4')}</span>
            <h4 class="font-bold text-sm text-slate-900">Service Area & Shop Location</h4>
          </div>
          <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Darbhanga, Bihar</span>
        </div>

        <p class="text-xs text-slate-600 font-medium leading-relaxed">
          <strong>Shop / Workshop Address:</strong><br/>
          ${BUSINESS_INFO.address}
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
          ${renderIcon('mapPin', 'w-4 h-4 text-blue-600')}
          <span>Open Shop Location in Google Maps</span>
          ${renderIcon('externalLink', 'w-3 h-3 text-blue-500')}
        </button>
      </div>

      <!-- Working Hours & Direct Contact -->
      <div class="mx-4 bg-white rounded-2xl p-4 shadow-card border border-slate-100 space-y-3">
        <h4 class="font-bold text-sm text-slate-900">Contact & Hours</h4>
        
        <div class="space-y-2 text-xs">
          <div class="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
            <div class="flex items-center space-x-2">
              <span class="p-1 rounded-lg bg-emerald-100 text-emerald-800">${renderIcon('phone', 'w-3.5 h-3.5')}</span>
              <div>
                <span class="text-[10px] text-slate-400 block font-semibold">Phone Call</span>
                <span class="font-bold text-slate-800">${BUSINESS_INFO.phone}</span>
              </div>
            </div>
            <button class="call-action-btn text-xs font-bold text-white bg-emerald-600 px-3 py-1 rounded-lg" data-phone="${BUSINESS_INFO.phoneClean}">
              Call
            </button>
          </div>

          <div class="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
            <div class="flex items-center space-x-2">
              <span class="p-1 rounded-lg bg-emerald-100 text-emerald-800">${renderIcon('whatsapp', 'w-3.5 h-3.5 fill-emerald-700')}</span>
              <div>
                <span class="text-[10px] text-slate-400 block font-semibold">WhatsApp Direct</span>
                <span class="font-bold text-slate-800">${BUSINESS_INFO.phone}</span>
              </div>
            </div>
            <button class="wa-action-btn text-xs font-bold text-white bg-emerald-500 px-3 py-1 rounded-lg" data-phone="${BUSINESS_INFO.phoneClean}">
              Chat
            </button>
          </div>

          <div class="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
            <div class="flex items-center space-x-2">
              <span class="p-1 rounded-lg bg-blue-100 text-blue-800">${renderIcon('clock', 'w-3.5 h-3.5')}</span>
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
          ${BRANDS.map(
            (b) => `
            <span class="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200/60">
              ${b}
            </span>
          `
          ).join('')}
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
  `;
}

// Render Service Detail Bottom Sheet / Modal
function renderServiceModal() {
  const service = state.selectedServiceForModal;
  const container = document.getElementById('modal-container');
  if (!container || !service) return;

  container.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity" id="service-modal-backdrop">
      <div class="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col shadow-2xl animate-slide-up overflow-hidden">
        
        <!-- Modal Header -->
        <div class="p-4 bg-app-navy text-white flex items-start justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 rounded-2xl bg-white/10 text-amber-300 flex items-center justify-center text-xl shrink-0">
              ${renderIcon(service.icon, 'w-6 h-6 text-amber-300')}
            </div>
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-white/10 px-2 py-0.5 rounded-full">${service.category}</span>
              <h3 class="font-extrabold text-base text-white mt-0.5">${service.name}</h3>
              <p class="text-xs text-slate-300 font-medium">${service.hindi}</p>
            </div>
          </div>
          <button id="close-service-modal-btn" class="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10">
            ${renderIcon('close', 'w-6 h-6')}
          </button>
        </div>

        <!-- Modal Body (Scrollable) -->
        <div class="p-4 overflow-y-auto space-y-4 text-xs text-slate-700">
          
          <!-- Description -->
          <div>
            <h4 class="font-bold text-slate-900 mb-1">Service Overview</h4>
            <p class="text-slate-600 leading-relaxed">${service.description}</p>
          </div>

          <!-- Common Problems Handled -->
          <div class="p-3 bg-slate-50 rounded-2xl border border-slate-100">
            <h4 class="font-bold text-slate-900 mb-2">Common Issues Repaired on Doorstep:</h4>
            <ul class="space-y-1.5">
              ${service.problems
                .map(
                  (prob) => `
                <li class="flex items-start space-x-2">
                  <span class="text-emerald-600 font-black shrink-0">✓</span>
                  <span class="text-slate-700 leading-tight">${prob}</span>
                </li>
              `
                )
                .join('')}
            </ul>
          </div>

          <!-- Supported Models / Types -->
          <div>
            <h4 class="font-bold text-slate-900 mb-1.5">Supported Types / Models:</h4>
            <div class="flex flex-wrap gap-1">
              ${service.supportedTypes
                .map(
                  (t) => `
                <span class="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                  ${t}
                </span>
              `
                )
                .join('')}
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
            ${renderIcon('phone', 'w-3.5 h-3.5 text-emerald-600')}
            <span>Call</span>
          </button>
          <button id="modal-wa-btn" class="touch-press flex items-center justify-center space-x-1 bg-emerald-500 text-white font-bold text-xs py-2.5 rounded-xl hover:bg-emerald-600">
            ${renderIcon('whatsapp', 'w-3.5 h-3.5 fill-white')}
            <span>WhatsApp</span>
          </button>
          <button id="modal-book-btn" class="touch-press flex items-center justify-center space-x-1 bg-app-navy text-amber-300 font-black text-xs py-2.5 rounded-xl hover:bg-slate-800 shadow-sm">
            <span>Book Now</span>
          </button>
        </div>

      </div>
    </div>
  `;

  // Bind modal event listeners
  document.getElementById('service-modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'service-modal-backdrop') closeServiceModal();
  });
  document.getElementById('close-service-modal-btn')?.addEventListener('click', closeServiceModal);
  document.getElementById('modal-call-btn')?.addEventListener('click', () => callPhone());
  document.getElementById('modal-wa-btn')?.addEventListener('click', () => {
    openWhatsApp(`Hi Prem Kumar Ji, I want to inquire about ${service.name} (${service.hindi}).`);
  });
  document.getElementById('modal-book-btn')?.addEventListener('click', () => {
    startBookingFromService(service.id);
  });
}

// Render Review Submission Modal
function renderReviewModal() {
  const container = document.getElementById('review-modal-container');
  if (!container) return;

  container.innerHTML = `
    <div class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity" id="review-modal-backdrop">
      <div class="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col shadow-2xl animate-slide-up overflow-hidden">
        
        <div class="p-4 bg-app-navy text-white flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-amber-400 text-lg">⭐</span>
            <h3 class="font-extrabold text-sm text-white">Rate Prem Kumar Technicians</h3>
          </div>
          <button id="close-review-modal-btn" class="p-1 rounded-full text-slate-300 hover:text-white">
            ${renderIcon('close', 'w-5 h-5')}
          </button>
        </div>

        <form id="submit-review-form" class="p-4 space-y-3.5 text-xs overflow-y-auto">
          <div>
            <label class="block font-bold text-slate-800 mb-1">Your Star Rating</label>
            <div class="flex space-x-2" id="star-rating-selector">
              ${[1, 2, 3, 4, 5]
                .map(
                  (star) => `
                <button type="button" class="star-btn text-2xl transition ${
                  star <= state.reviewForm.rating ? 'text-amber-400 scale-110' : 'text-slate-300'
                }" data-star="${star}">
                  ★
                </button>
              `
                )
                .join('')}
            </div>
          </div>

          <div>
            <label for="review-name-input" class="block font-bold text-slate-800 mb-1">Aapka Naam <span class="text-red-500">*</span></label>
            <input type="text" id="review-name-input" required placeholder="Full Name" value="${state.reviewForm.name}" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-app-navy" />
          </div>

          <div>
            <label for="review-service-select" class="block font-bold text-slate-800 mb-1">Kaunsi Service Li Thi? <span class="text-red-500">*</span></label>
            <select id="review-service-select" class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none">
              ${SERVICES.map(
                (s) => `
                <option value="${s.name}" ${state.reviewForm.service === s.name ? 'selected' : ''}>${s.name}</option>
              `
              ).join('')}
            </select>
          </div>

          <div>
            <label for="review-comment-input" class="block font-bold text-slate-800 mb-1">Aapka Anubhav / Review <span class="text-red-500">*</span></label>
            <textarea id="review-comment-input" required rows="3" placeholder="Technician ka kaam kaisa laga? Time pe aaye? Problem theek hui?..." class="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-app-navy">${state.reviewForm.comment}</textarea>
          </div>

          <button type="submit" class="touch-press w-full flex items-center justify-center space-x-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs py-3 px-4 rounded-xl shadow-md transition">
            ${renderIcon('whatsapp', 'w-4 h-4 fill-white')}
            <span>Send Feedback to Prem Kumar on WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  `;

  // Bind review modal events
  document.getElementById('review-modal-backdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'review-modal-backdrop') closeReviewModal();
  });
  document.getElementById('close-review-modal-btn')?.addEventListener('click', closeReviewModal);

  document.querySelectorAll('.star-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.reviewForm.rating = parseInt(btn.dataset.star, 10);
      renderReviewModal();
    });
  });

  document.getElementById('submit-review-form')?.addEventListener('submit', (e) => {
    state.reviewForm.name = document.getElementById('review-name-input')?.value || '';
    state.reviewForm.service = document.getElementById('review-service-select')?.value || '';
    state.reviewForm.comment = document.getElementById('review-comment-input')?.value || '';
    handleReviewSubmit(e);
  });
}

// Global Event Binding
function bindAppEvents() {
  // Tab buttons
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      if (tab) switchTab(tab);
    });
  });

  // Header buttons
  document.getElementById('header-call-btn')?.addEventListener('click', () => callPhone());
  document.getElementById('header-wa-btn')?.addEventListener('click', () => openWhatsApp());

  // Home Screen CTAs
  document.getElementById('home-call-cta')?.addEventListener('click', () => callPhone());
  document.getElementById('home-wa-cta')?.addEventListener('click', () => openWhatsApp());
  document.getElementById('home-book-cta')?.addEventListener('click', () => switchTab('bookings'));
  document.getElementById('view-all-services-link')?.addEventListener('click', () => switchTab('services'));
  document.getElementById('view-all-reviews-link')?.addEventListener('click', () => switchTab('reviews'));
  document.getElementById('emergency-call-btn')?.addEventListener('click', () => callPhone());

  // Popular Service Cards on Home Screen
  document.querySelectorAll('.service-card').forEach((card) => {
    card.addEventListener('click', () => {
      const sId = card.dataset.serviceId;
      if (sId) openServiceDetails(sId);
    });
  });

  // Services Screen Filtering & Search
  const searchInput = document.getElementById('service-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderApp();
      // Restore focus
      const updatedInput = document.getElementById('service-search-input');
      if (updatedInput) {
        updatedInput.focus();
        updatedInput.setSelectionRange(state.searchQuery.length, state.searchQuery.length);
      }
    });
  }

  document.getElementById('clear-search-btn')?.addEventListener('click', () => {
    state.searchQuery = '';
    renderApp();
  });

  document.querySelectorAll('.cat-filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      triggerHaptic();
      state.activeCategory = btn.dataset.category;
      renderApp();
    });
  });

  document.querySelectorAll('.open-details-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openServiceDetails(btn.dataset.serviceId);
    });
  });

  document.querySelectorAll('.book-this-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      startBookingFromService(btn.dataset.serviceId);
    });
  });

  document.getElementById('search-fallback-call')?.addEventListener('click', () => callPhone());

  // Bookings Tab Buttons & Subtabs
  document.getElementById('booking-subtab-new')?.addEventListener('click', () => {
    triggerHaptic();
    state.activeBookingSubTab = 'new';
    renderApp();
  });

  document.getElementById('booking-subtab-history')?.addEventListener('click', () => {
    triggerHaptic();
    state.activeBookingSubTab = 'history';
    renderApp();
  });

  document.getElementById('history-new-booking-btn')?.addEventListener('click', () => {
    triggerHaptic();
    state.activeBookingSubTab = 'new';
    renderApp();
  });

  // Guided Booking Form Inputs Sync & Submit
  const bookingFormEl = document.getElementById('active-booking-form');
  if (bookingFormEl) {
    // Brand quick chips
    document.querySelectorAll('.quick-brand-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        triggerHaptic();
        state.bookingForm.customBrand = chip.dataset.brand;
        const brandInput = document.getElementById('form-brand-input');
        if (brandInput) brandInput.value = chip.dataset.brand;
      });
    });

    // Zone radio
    document.querySelectorAll('.zone-radio').forEach((radio) => {
      radio.addEventListener('change', (e) => {
        triggerHaptic();
        state.bookingForm.zone = e.target.value;
        renderApp();
      });
    });

    // Form submit
    bookingFormEl.addEventListener('submit', (e) => {
      state.bookingForm.serviceId = document.getElementById('form-service-select')?.value || 'fridge';
      state.bookingForm.customBrand = document.getElementById('form-brand-input')?.value || '';
      state.bookingForm.problem = document.getElementById('form-problem-input')?.value || '';
      state.bookingForm.address = document.getElementById('form-address-input')?.value || '';
      state.bookingForm.preferredDate = document.getElementById('form-date-select')?.value || 'Today';
      state.bookingForm.preferredTime = document.getElementById('form-time-select')?.value || 'Morning (9 AM - 12 PM)';
      state.bookingForm.customerName = document.getElementById('form-name-input')?.value || '';
      state.bookingForm.customerPhone = document.getElementById('form-phone-input')?.value || '';
      handleBookingSubmit(e);
    });
  }

  document.getElementById('form-direct-call-btn')?.addEventListener('click', () => callPhone());

  // Re-book / History Actions
  document.querySelectorAll('.rebook-call-btn').forEach((btn) => {
    btn.addEventListener('click', () => callPhone());
  });

  document.querySelectorAll('.rebook-wa-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const bId = btn.dataset.bookingId;
      const bk = state.savedBookings.find((b) => b.id === bId);
      if (bk) {
        openWhatsApp(`Namaste Prem Kumar Ji, my booking reference is ${bk.id} for ${bk.serviceName}. Wanted to check the status.`);
      }
    });
  });

  // Reviews Tab Actions
  document.getElementById('open-write-review-btn')?.addEventListener('click', openReviewModal);

  // Profile / More Tab Actions
  document.getElementById('open-google-maps-btn')?.addEventListener('click', openMaps);
  document.querySelectorAll('.call-action-btn').forEach((b) => b.addEventListener('click', () => callPhone()));
  document.querySelectorAll('.wa-action-btn').forEach((b) => b.addEventListener('click', () => openWhatsApp()));
  document.getElementById('contact-developer-btn')?.addEventListener('click', openDeveloperWhatsApp);
}

// Master Render Function
export function renderApp() {
  const root = document.getElementById('app');
  if (!root) return;

  let contentHtml = '';
  switch (state.currentTab) {
    case 'home':
      contentHtml = renderHomeTab();
      break;
    case 'services':
      contentHtml = renderServicesTab();
      break;
    case 'bookings':
      contentHtml = renderBookingsTab();
      break;
    case 'reviews':
      contentHtml = renderReviewsTab();
      break;
    case 'more':
      contentHtml = renderMoreTab();
      break;
    default:
      contentHtml = renderHomeTab();
  }

  root.innerHTML = `
    <div class="flex flex-col min-h-screen bg-app-bg text-slate-900 selection:bg-app-amber selection:text-app-navy">
      ${renderHeader()}
      <main class="flex-1 max-w-md w-full mx-auto pb-10">
        ${contentHtml}
      </main>
      ${renderBottomNav()}
      <div id="modal-container"></div>
      <div id="review-modal-container"></div>
    </div>
  `;

  bindAppEvents();
}

// Entrypoint
document.addEventListener('DOMContentLoaded', () => {
  loadSavedBookings();
  setupAndroidBackButton();
  renderApp();
});
