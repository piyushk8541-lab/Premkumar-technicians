import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import {
  BUSINESS_INFO,
  PRICING_ZONES,
  SERVICE_CATEGORIES,
  SERVICES,
  TRUST_FEATURES,
  HOW_IT_WORKS_STEPS,
  BRANDS,
  REVIEWS,
} from '../src/data/business.js';

const appRoot = resolve(import.meta.dirname, '..');

describe('Business Data & Requirements Verification', () => {
  it('contains verified business contact details', () => {
    assert.equal(BUSINESS_INFO.phoneClean, '918271046196');
    assert.equal(BUSINESS_INFO.whatsappNumber, '918271046196');
    assert.equal(BUSINESS_INFO.email, 'Premdbg06272@gmail.com');
    assert.match(BUSINESS_INFO.address, /Laxmi Sagar/);
    assert.match(BUSINESS_INFO.address, /Darbhanga/);
  });

  it('contains exactly 18 standalone services across 4 categories', () => {
    assert.equal(SERVICES.length, 18, 'Must have exactly 18 services');
    const categories = new Set(SERVICES.map((s) => s.category));
    assert.ok(categories.has('Appliance Repair'));
    assert.ok(categories.has('Electrical Work'));
    assert.ok(categories.has('Installation'));
    assert.ok(categories.has('Parts'));

    SERVICES.forEach((s) => {
      assert.ok(s.id, 'Service must have an id');
      assert.ok(s.name, 'Service must have a name');
      assert.ok(s.hindi, 'Service must have a hindi subtitle');
      assert.ok(s.description, 'Service must have a description');
      assert.ok(s.problems && s.problems.length > 0, 'Service must list common problems');
      assert.ok(s.pricingInfo, 'Service must have pricing info');
      assert.ok(s.warranty, 'Service must have warranty note');
    });
  });

  it('contains Zone A (Free) and Zone B (₹300) pricing logic', () => {
    assert.equal(PRICING_ZONES.length, 2);
    const zoneA = PRICING_ZONES.find((z) => z.id === 'zone-a');
    const zoneB = PRICING_ZONES.find((z) => z.id === 'zone-b');
    assert.ok(zoneA, 'Zone A must exist');
    assert.ok(zoneB, 'Zone B must exist');
    assert.match(zoneA.visitCharge, /FREE/);
    assert.match(zoneB.visitCharge, /300/);
  });

  it('contains trust indicators and 4-step workflow', () => {
    assert.ok(TRUST_FEATURES.length >= 6);
    assert.equal(HOW_IT_WORKS_STEPS.length, 4);
    assert.ok(BRANDS.length >= 25);
    assert.ok(REVIEWS.length >= 6);
  });
});

describe('Android Project Configuration', () => {
  it('has correct capacitor.config.json', async () => {
    const raw = await readFile(resolve(appRoot, 'capacitor.config.json'), 'utf-8');
    const config = JSON.parse(raw);
    assert.equal(config.appId, 'com.premkumar.technicians');
    assert.equal(config.appName, 'Prem Kumar Technicians');
    assert.equal(config.webDir, 'dist');
    assert.equal(config.server?.androidScheme, 'https');
    assert.equal(config.server?.cleartext, false);
  });

  it('has AndroidManifest.xml configured with application id and splash theme', async () => {
    const manifestPath = resolve(appRoot, 'android/app/src/main/AndroidManifest.xml');
    const manifest = await readFile(manifestPath, 'utf-8');
    assert.match(manifest, /android:label="@string\/app_name"/);
    assert.match(manifest, /android:icon="@mipmap\/ic_launcher"/);
    assert.match(manifest, /android:theme="@style\/AppTheme"/);
    assert.match(manifest, /android\.permission\.INTERNET/);
    // Ensure no dangerous SMS / contacts permissions are requested
    assert.doesNotMatch(manifest, /android\.permission\.READ_CONTACTS/);
    assert.doesNotMatch(manifest, /android\.permission\.SEND_SMS/);
  });

  it('has string resource values configured', async () => {
    const stringsPath = resolve(appRoot, 'android/app/src/main/res/values/strings.xml');
    const strings = await readFile(stringsPath, 'utf-8');
    assert.match(strings, /Prem Kumar Technicians/);
  });

  it('has app icon assets for all standard Android densities', async () => {
    const densities = ['mdpi', 'hdpi', 'xhdpi', 'xxhdpi', 'xxxhdpi'];
    for (const d of densities) {
      await access(resolve(appRoot, `android/app/src/main/res/mipmap-${d}/ic_launcher.png`));
      await access(resolve(appRoot, `android/app/src/main/res/mipmap-${d}/ic_launcher_round.png`));
      await access(resolve(appRoot, `android/app/src/main/res/mipmap-${d}/ic_launcher_foreground.png`));
      await access(resolve(appRoot, `android/app/src/main/res/drawable-${d}/splash_icon.png`));
    }
  });

  it('has synced standalone web assets inside android/app/src/main/assets/public', async () => {
    await access(resolve(appRoot, 'android/app/src/main/assets/public/index.html'));
    const indexContent = await readFile(
      resolve(appRoot, 'android/app/src/main/assets/public/index.html'),
      'utf-8'
    );
    assert.match(indexContent, /Prem Kumar Technicians/);
  });
});
