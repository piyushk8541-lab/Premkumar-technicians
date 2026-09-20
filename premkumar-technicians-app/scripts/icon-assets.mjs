import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

export const sourcePath = fileURLToPath(new URL('../resources/approved-icon.png', import.meta.url));
export const resPath = fileURLToPath(new URL('../android/app/src/main/res/', import.meta.url));
export const sourceSha256 = '16d1d187a305b816afe401c90cc9c257ebd0446dcd5643e7b9b1a53aa43095f9';
export const navy = '#031735';
export const densities = { mdpi: 1, hdpi: 1.5, xhdpi: 2, xxhdpi: 3, xxxhdpi: 4 };

export async function approvedSource() {
  const source = await readFile(sourcePath);
  assert.equal(createHash('sha256').update(source).digest('hex'), sourceSha256,
    'The approved source changed. Do not redraw, crop, recolor or replace it silently.');
  const metadata = await sharp(source).metadata();
  assert.equal(metadata.format, 'png');
  assert.equal(metadata.width, 1254);
  assert.equal(metadata.height, 1254);
  return source;
}

// Contain the ENTIRE approved image, including its original white border and lettering.
// Backgrounds/padding are added outside the source only; never trim/extract its pixels.
async function centered(source, canvas, artwork, background) {
  const image = await sharp(source).resize(artwork, artwork, { fit: 'contain', kernel: 'lanczos3' }).png().toBuffer();
  return sharp({ create: { width: canvas, height: canvas, channels: 4, background } })
    .composite([{ input: image, left: Math.floor((canvas - artwork) / 2), top: Math.floor((canvas - artwork) / 2) }])
    .png().toBuffer();
}

export async function renderAssets() {
  const source = await approvedSource();
  const assets = new Map();
  const transparent = { r: 0, g: 0, b: 0, alpha: 0 };
  for (const [density, scale] of Object.entries(densities)) {
    const size = 48 * scale;
    // 32dp square fits entirely inside a legacy 48dp circle, including white corners.
    const legacy = await centered(source, size, 32 * scale, navy);
    assets.set(`mipmap-${density}/ic_launcher.png`, legacy);
    const circle = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`);
    assets.set(`mipmap-${density}/ic_launcher_round.png`, await sharp(legacy)
      .composite([{ input: circle, blend: 'dest-in' }]).png().toBuffer());
    // Android adaptive layers are 108dp. The 46dp square fits inside the 66dp safe circle.
    assets.set(`mipmap-${density}/ic_launcher_foreground.png`,
      await centered(source, 108 * scale, 46 * scale, transparent));
    // Theme.SplashScreen (without an icon background) has a 288dp canvas / 192dp safe circle.
    // 132 * sqrt(2) < 192: even the source's square corners remain unmasked on Android 12+.
    assets.set(`drawable-${density}/splash_icon.png`,
      await centered(source, 288 * scale, 132 * scale, transparent));
  }
  return assets;
}
