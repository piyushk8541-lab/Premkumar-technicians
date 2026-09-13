import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';
import { approvedSource, renderAssets, resPath, densities, navy } from './icon-assets.mjs';

const read = relative => readFile(new URL(relative, import.meta.url), 'utf8');
const raw = buffer => sharp(buffer).ensureAlpha().raw().toBuffer();

async function checkArtwork(relative, canvas, artwork, source, circleDiameter) {
  const file = join(resPath, relative);
  const metadata = await sharp(file).metadata();
  assert.equal(metadata.width, canvas, relative);
  assert.equal(metadata.height, canvas, relative);
  assert.equal(metadata.format, 'png', relative);
  const offset = Math.floor((canvas - artwork) / 2);
  const actual = await sharp(file).extract({ left: offset, top: offset, width: artwork, height: artwork })
    .ensureAlpha().raw().toBuffer();
  const expected = await sharp(source).resize(artwork, artwork, { fit: 'contain', kernel: 'lanczos3' })
    .ensureAlpha().raw().toBuffer();
  assert.deepEqual(actual, expected, `Full uncropped approved image must survive: ${relative}`);
  if (circleDiameter) {
    assert.equal(metadata.hasAlpha, true, relative);
    const pixels = await raw(file);
    for (let y = 0; y < canvas; y++) {
      for (let x = 0; x < canvas; x++) {
        if (pixels[(y * canvas + x) * 4 + 3]) {
          assert.ok(Math.hypot(x + 0.5 - canvas / 2, y + 0.5 - canvas / 2) < circleDiameter / 2,
            `Artwork outside Android's safe circle: ${relative} (${x}, ${y})`);
        }
      }
    }
  }
}

test('source is the exact approved 1254px PNG (pinned SHA-256)', async () => {
  await approvedSource();
});

test('all 20 committed raster assets match regeneration from the approved image', async () => {
  const expected = await renderAssets();
  assert.equal(expected.size, 20);
  for (const [relative, buffer] of expected) {
    assert.deepEqual(await raw(join(resPath, relative)), await raw(buffer), `Stale/wrong artwork: ${relative}`);
  }
});

test('legacy, adaptive and splash dimensions preserve every source pixel region without mask clipping', async () => {
  const source = await approvedSource();
  for (const [density, scale] of Object.entries(densities)) {
    await checkArtwork(`mipmap-${density}/ic_launcher.png`, 48 * scale, 32 * scale, source);
    await checkArtwork(`mipmap-${density}/ic_launcher_round.png`, 48 * scale, 32 * scale, source);
    const round = await raw(join(resPath, `mipmap-${density}/ic_launcher_round.png`));
    assert.equal(round[3], 0, 'Round legacy icon must have transparent outer corners');
    await checkArtwork(`mipmap-${density}/ic_launcher_foreground.png`, 108 * scale, 46 * scale, source, 66 * scale);
    await checkArtwork(`drawable-${density}/splash_icon.png`, 288 * scale, 132 * scale, source, 192 * scale);
  }
});

test('both adaptive launcher variants use the navy background and approved foreground on API 26+', async () => {
  for (const name of ['ic_launcher', 'ic_launcher_round']) {
    const xml = await read(`../android/app/src/main/res/mipmap-anydpi-v26/${name}.xml`);
    assert.match(xml, /<adaptive-icon\s/);
    assert.match(xml, /<background android:drawable="@color\/ic_launcher_background"/);
    assert.match(xml, /<foreground android:drawable="@mipmap\/ic_launcher_foreground"/);
  }
  const color = await read('../android/app/src/main/res/values/ic_launcher_background.xml');
  assert.ok(color.toLowerCase().includes(`>${navy}</color>`));
});

test('manifest, app label and launch-only splash theme remain correctly wired', async () => {
  const manifest = await read('../android/app/src/main/AndroidManifest.xml');
  assert.match(manifest, /android:icon="@mipmap\/ic_launcher"/);
  assert.match(manifest, /android:roundIcon="@mipmap\/ic_launcher_round"/);
  assert.match(manifest, /android:label="@string\/app_name"/);
  assert.match(manifest, /android:theme="@style\/AppTheme.NoActionBarLaunch"/);
  assert.match(manifest, /android.intent.category.LAUNCHER/);
  const strings = await read('../android/app/src/main/res/values/strings.xml');
  for (const key of ['app_name', 'title_activity_main']) {
    assert.ok(strings.includes(`<string name="${key}">Prem Kumar Technicians</string>`));
  }
  const styles = await read('../android/app/src/main/res/values/styles.xml');
  const launch = styles.match(/<style name="AppTheme.NoActionBarLaunch" parent="Theme.SplashScreen">([\s\S]*?)<\/style>/)?.[1];
  assert.ok(launch);
  assert.match(launch, /name="windowSplashScreenBackground">@color\/ic_launcher_background</);
  assert.match(launch, /name="windowSplashScreenAnimatedIcon">@drawable\/splash_icon</);
  assert.match(launch, /name="postSplashScreenTheme">@style\/AppTheme.NoActionBar</);
  const activity = await read('../android/app/src/main/java/com/premkumar/technicians/MainActivity.java');
  assert.match(activity, /import androidx.core.splashscreen.SplashScreen;/);
  const install = activity.indexOf('SplashScreen.installSplashScreen(this);');
  assert.ok(install >= 0 && install < activity.indexOf('super.onCreate(savedInstanceState);'));
  assert.match(activity, /registerPlugin\(ExternalLinksPlugin.class\);/);
});

test('obsolete monogram splash bitmaps and Capacitor template vectors are absent', async () => {
  const obsolete = ['drawable/splash.png', 'drawable/ic_launcher_background.xml', 'drawable-v24/ic_launcher_foreground.xml'];
  for (const orientation of ['port', 'land']) {
    for (const density of Object.keys(densities)) obsolete.push(`drawable-${orientation}-${density}/splash.png`);
  }
  for (const relative of obsolete) {
    await assert.rejects(access(join(resPath, relative)), { code: 'ENOENT' });
  }
});
