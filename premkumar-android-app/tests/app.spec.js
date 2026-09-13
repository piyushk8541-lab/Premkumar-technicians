import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

// Never call or send real WhatsApp messages in automated tests.
test.beforeEach(async ({ page }) => {
  await page.route('https://www.google.com/**', route => route.fulfill({ body: '<p>Map test placeholder</p>', contentType: 'text/html' }));
});

async function load(page) {
  await page.goto('/');
  await expect(page.locator('#services .service-card')).toHaveCount(18);
}

async function captureLinks(page) {
  await page.evaluate(() => {
    window.testLinks = [];
    window.openAppLink = async url => { window.testLinks.push(url); return true; };
  });
}

test('all original content/data is preserved, with no application JS errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await load(page);
  const original = readFileSync(new URL('../../index.html', import.meta.url), 'utf8');
  const copy = readFileSync(new URL('../src/index.html', import.meta.url), 'utf8');
  const result = await page.evaluate(({ original, copy }) => {
    const parse = html => {
      const document = new DOMParser().parseFromString(html, 'text/html');
      document.querySelectorAll('script, style').forEach(node => node.remove());
      return document.body.textContent.replace(/\s+/g, ' ').trim();
    };
    return {
      originalText: parse(original),
      appText: parse(copy),
      services: window.Alpine.$data(document.body).services.length,
      brands: window.Alpine.$data(document.body).brands.length,
      reviews: window.Alpine.$data(document.body).reviews.length,
    };
  }, { original, copy });
  expect(result.appText).toEqual(result.originalText);
  // Verify the dynamic catalog itself (not just the rendered template placeholders).
  const originalData = original.match(/const siteData = ([\s\S]*?);\s*function siteApp/)[1];
  const copyData = copy.match(/const siteData = ([\s\S]*?);\s*function siteApp/)[1];
  expect(copyData).toBe(originalData);
  expect(result).toMatchObject({ services: 18, brands: 28, reviews: 6 });
  await page.evaluate(() => document.fonts.ready);
  expect(errors).toEqual([]);
});

test('service categories display every original service', async ({ page }) => {
  await load(page);
  for (const [category, count] of [['Appliance Repair', 9], ['Electrical Work', 4], ['Installation', 3], ['Parts', 2], ['All', 18]]) {
    await page.getByRole('tab', { name: category, exact: true }).click();
    await expect(page.locator('#services .service-card')).toHaveCount(count);
    await expect(page.getByRole('tab', { name: category, exact: true })).toHaveAttribute('aria-selected', 'true');
  }
});

test('mobile navigation, anchor navigation, Escape and announcement close', async ({ page }) => {
  await load(page);
  await page.getByRole('button', { name: 'Open menu', exact: true }).click();
  await expect(page.locator('#mobile-menu')).toBeVisible();
  await page.locator('#mobile-menu a[href="#services"]').click();
  await expect(page.locator('#mobile-menu')).toBeHidden();
  await expect(page).toHaveURL(/#services$/);
  await page.getByRole('button', { name: 'Open menu', exact: true }).click();
  await page.keyboard.press('Escape');
  await expect(page.locator('#mobile-menu')).toBeHidden();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.getByRole('button', { name: 'Close announcement' }).click();
  await expect(page.locator('#announcement')).toHaveClass(/is-hidden/);
  await expect(page.locator('#site-header')).toHaveCSS('top', '0px');
});

test('booking validates and composes the original encoded WhatsApp message', async ({ page }) => {
  await load(page);
  await captureLinks(page);
  await page.locator('#booking-form button[type="submit"]').click();
  expect(await page.evaluate(() => window.testLinks)).toHaveLength(0);
  await page.locator('#services .service-card').first().getByRole('link', { name: 'Book Now' }).click();
  await expect(page.locator('#booking-device')).toHaveValue('Fridge');
  await page.locator('#booking-name').fill('Test User');
  await page.locator('#booking-phone').fill('9876543210');
  await page.locator('#booking-brand').fill('LG');
  await page.locator('#booking-problem').fill('Testing only — no cooling & display issue');
  await page.locator('#booking-address').fill('Test address, Darbhanga');
  await page.locator('#booking-form button[type="submit"]').click();
  const urls = await page.evaluate(() => window.testLinks);
  expect(urls).toHaveLength(1);
  const url = new URL(urls[0]);
  expect(url.origin + url.pathname).toBe('https://wa.me/918271046196');
  const text = url.searchParams.get('text');
  for (const field of ['Test User', '9876543210', 'Fridge', 'LG', 'Testing only — no cooling & display issue', 'Test address, Darbhanga', 'Sent from Prem Kumar Technicians website']) expect(text).toContain(field);
  await expect(page.locator('#booking-status')).toBeVisible();
});

test('failed external opening does not report a successful booking', async ({ page }) => {
  await load(page);
  await page.evaluate(() => { window.openAppLink = async () => false; });
  await page.locator('#booking-name').fill('Test User');
  await page.locator('#booking-phone').fill('9876543210');
  await page.locator('#booking-device').selectOption('Fridge');
  await page.locator('#booking-problem').fill('Test');
  await page.locator('#booking-form button[type="submit"]').click();
  await expect(page.locator('#booking-status')).toBeHidden();
});

test('reviews carousel, modal, rating and optional photo preserve the WhatsApp workflow', async ({ page }) => {
  await load(page);
  await captureLinks(page);
  await page.evaluate(() => clearInterval(window.Alpine.$data(document.getElementById('reviews')).timer));
  const first = await page.locator('#reviews article').nth(0).locator('blockquote').textContent();
  await page.getByRole('button', { name: 'Next review', exact: true }).click();
  await expect(page.locator('#reviews article').nth(0)).toBeHidden();
  await expect(page.locator('#reviews article').nth(1)).toBeVisible();
  await expect(page.locator('#reviews article').nth(1).locator('blockquote')).not.toHaveText(first);
  await page.getByRole('button', { name: 'Previous review', exact: true }).click();
  await expect(page.locator('#reviews article').nth(1)).toBeHidden();
  await expect(page.locator('#reviews article').nth(0)).toBeVisible();
  await expect(page.locator('#reviews article').nth(0).locator('blockquote')).toHaveText(first);
  await page.getByRole('button', { name: 'Review Likhein' }).click();
  await page.locator('#review-name').fill('Test Reviewer');
  await page.getByRole('button', { name: '4 stars', exact: true }).click();
  await page.locator('#review-service').selectOption('TV Repair');
  await page.locator('#review-text').fill('Test review, not a real customer submission.');
  await page.locator('#review-photo').setInputFiles({ name: 'test-photo.png', mimeType: 'image/png', buffer: Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/l9sAAAAASUVORK5CYII=', 'base64') });
  await page.locator('#review-form button[type="submit"]').click();
  const url = new URL((await page.evaluate(() => window.testLinks))[0]);
  const message = url.searchParams.get('text');
  expect(message).toContain('Rating: 4/5');
  expect(message).toContain('TV Repair');
  expect(message).toContain('test-photo.png (WhatsApp par manually attach karein)');
  await expect(page.locator('#review-status')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('#review-form')).toBeHidden();
});

test('phone, email, map and developer contact destinations are unchanged', async ({ page }) => {
  await load(page);
  await expect(page.locator('#mobile-call')).toHaveAttribute('href', 'tel:+918271046196');
  await expect(page.locator('#contact a[href^="mailto:"]')).toHaveAttribute('href', 'mailto:Premdbg06272@gmail.com');
  await expect(page.locator('#service-area iframe')).toHaveAttribute('src', /Laxmi%20Sagar%20Gas%20Godown%20Darbhanga%20Bihar/);
  await expect(page.locator('#developer a[href^="tel:"]')).toHaveAttribute('href', 'tel:+919234610543');
});

test('core UI loads without any external assets; maps explain offline state', async ({ page }) => {
  const external = [];
  await page.route('**/*', route => {
    const url = new URL(route.request().url());
    if (url.hostname !== '127.0.0.1') {
      external.push(url.href);
      return route.abort();
    }
    return route.continue();
  });
  await load(page);
  await page.evaluate(() => document.fonts.ready);
  expect(external.every(url => url.startsWith('https://www.google.com/maps'))).toBe(true);
  await page.evaluate(() => {
    Object.defineProperty(navigator, 'onLine', { get: () => false, configurable: true });
    window.dispatchEvent(new Event('offline'));
  });
  await expect(page.locator('#service-area iframe')).toBeHidden();
  await expect(page.getByText('The map needs an internet connection.', { exact: false })).toBeVisible();
  await page.getByRole('tab', { name: 'Parts', exact: true }).click();
  await expect(page.locator('#services .service-card')).toHaveCount(2);
});

test('original booking option mismatches are documented, not silently rewritten', async ({ page }) => {
  await load(page);
  const unmatched = await page.evaluate(() => {
    const data = window.Alpine.$data(document.body);
    return data.services.filter(service => !data.bookingServices.includes(service.booking)).map(service => service.booking);
  });
  expect(unmatched).toEqual(['Electrical Fitting', 'Fan/Light/Switch', 'AC Installation', 'Electronic Parts', 'Part Replacement']);
});

for (const width of [360, 390, 768, 1280]) {
  test(`responsive content and typography at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await load(page);
    await expect(page.locator('h1')).toContainText('PREM KUMAR');
    await expect(page.locator('body')).toHaveCSS('font-family', /Poppins/);
    await page.evaluate(() => document.fonts.ready);
    // Wait for initial Alpine/AOS transitions to settle before checking layout.
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(1);
    await page.screenshot({ path: `test-results/home-${width}.png` });
    await page.locator('#services').scrollIntoViewIfNeeded();
    await page.screenshot({ path: `test-results/services-${width}.png` });
  });
}

test('normal-motion animations initialize, counters complete and new filtered cards appear', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await load(page);
  await page.locator('#stats').scrollIntoViewIfNeeded();
  await expect(page.locator('.counter[data-target="10000"]')).toHaveText('10,000+');
  await page.getByRole('tab', { name: 'Parts', exact: true }).click();
  await expect(page.locator('#services .service-card').first()).toHaveCSS('opacity', '1');
  await expect(page.locator('#back-to-top')).toHaveCSS('display', 'grid');
  await expect.poll(() => page.locator('#scroll-progress').evaluate(element => element.getBoundingClientRect().width)).toBeGreaterThan(0);
  await expect(page.locator('.marquee-track').first()).toHaveCSS('animation-name', 'marquee');
});

test('all 18 Book Now buttons navigate and preserve their original booking values', async ({ page }) => {
  await load(page);
  const services = await page.evaluate(() => window.Alpine.$data(document.body).services.map(({ booking }) => booking));
  for (let index = 0; index < services.length; index++) {
    await page.locator('#services .service-card').nth(index).getByRole('link', { name: 'Book Now' }).click();
    await expect(page).toHaveURL(/#contact$/);
    expect(await page.evaluate(() => window.Alpine.$data(document.body).bookingDevice)).toBe(services[index]);
  }
});
