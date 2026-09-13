import { Capacitor, registerPlugin } from '@capacitor/core';
import { App } from '@capacitor/app';

const ExternalLinks = registerPlugin('ExternalLinks');
let messageTimer;

function notify(message) {
  let element = document.getElementById('app-message');
  if (!element) {
    element = document.createElement('div');
    element.id = 'app-message';
    element.className = 'app-message';
    element.setAttribute('role', 'status');
    element.setAttribute('aria-live', 'polite');
    document.body.append(element);
  }
  element.textContent = message;
  element.hidden = false;
  clearTimeout(messageTimer);
  messageTimer = setTimeout(() => { element.hidden = true; }, 6500);
}

export async function openAppLink(rawUrl) {
  let url;
  try { url = new URL(rawUrl); } catch { return false; }
  if (!['https:', 'tel:', 'mailto:'].includes(url.protocol)) return false;
  if (!Capacitor.isNativePlatform()) {
    if (url.protocol === 'https:') window.open(url.href, '_blank', 'noopener,noreferrer');
    else window.location.href = url.href;
    return true;
  }
  try {
    await ExternalLinks.open({ url: url.href });
    return true;
  } catch {
    notify(url.protocol === 'tel:'
      ? 'No phone app is available. Please call the number shown on this page from another phone.'
      : url.protocol === 'mailto:'
        ? 'No email app is available. Please use the email address shown on this page.'
        : 'Unable to open this link. Please install a browser or the relevant app, then try again.');
    return false;
  }
}

export function installNativeIntegration(Alpine) {
  window.openAppLink = openAppLink;
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href]');
    if (!anchor || event.defaultPrevented || event.button > 0) return;
    const href = anchor.getAttribute('href');
    if (!/^(https:|tel:|mailto:)/i.test(href)) return;
    if (!Capacitor.isNativePlatform()) return;
    event.preventDefault();
    void openAppLink(href);
  });

  function closeOverlay() {
    const review = Alpine.$data(document.getElementById('reviews'));
    const site = Alpine.$data(document.body);
    if (review.reviewOpen) { review.reviewOpen = false; return true; }
    if (site.mobileMenu) { site.mobileMenu = false; return true; }
    return false;
  }
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeOverlay();
  });

  if (Capacitor.isNativePlatform()) {
    App.addListener('backButton', ({ canGoBack }) => {
      if (closeOverlay()) return;
      const input = document.activeElement;
      if (input?.matches('input, textarea, select')) { input.blur(); return; }
      if (canGoBack) { window.history.back(); return; }
      if (window.scrollY > 10) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      void App.minimizeApp();
    }).catch(() => notify('Android navigation could not be initialized. Please restart the app.'));
  }

  const map = document.querySelector('iframe.map-frame');
  const offlineMap = document.createElement('p');
  offlineMap.className = 'p-6 text-center text-sm text-slate-600';
  offlineMap.textContent = 'The map needs an internet connection. Our location: Laxmi Sagar, Gas Godown, Darbhanga, Bihar.';
  offlineMap.hidden = true;
  map?.insertAdjacentElement('afterend', offlineMap);
  const updateNetwork = () => {
    offlineMap.hidden = navigator.onLine;
    if (map) {
      map.hidden = !navigator.onLine;
      if (navigator.onLine && map.dataset.wasOffline) {
        map.src = map.src;
        delete map.dataset.wasOffline;
      } else if (!navigator.onLine) map.dataset.wasOffline = 'true';
    }
  };
  window.addEventListener('online', updateNetwork);
  window.addEventListener('offline', updateNetwork);
  updateNetwork();
}
