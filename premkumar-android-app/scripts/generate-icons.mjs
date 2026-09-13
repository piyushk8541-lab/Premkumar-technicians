import sharp from 'sharp';
import { mkdirSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const res = fileURLToPath(new URL('../android/app/src/main/res/', import.meta.url));
const assets = fileURLToPath(new URL('../src/assets/', import.meta.url));
// Vector outlines of the existing PK monogram: no new business imagery or font dependency.
const monogram = '<g fill="#fff"><path d="M30 37h14q12 0 12 12t-12 12h-5v12h-9zm9 8v8h5q4 0 4-4t-4-4z"/><path d="M59 37h9v14l11-14h11L76 54l15 19H80L68 57v16h-9z"/></g>';
const foreground = `<svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108">${monogram}</svg>`;
const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="108" height="108" viewBox="0 0 108 108"><defs><linearGradient id="blue" x2="1" y2="1"><stop stop-color="#60a5fa"/><stop offset="1" stop-color="#1d4ed8"/></linearGradient></defs><rect width="108" height="108" rx="24" fill="url(#blue)"/>${monogram}</svg>`;
mkdirSync(assets, { recursive: true });
writeFileSync(`${assets}/pk-icon.svg`, icon);
for (const [density, size] of Object.entries({ mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192 })) {
  const dir = `${res}/mipmap-${density}`;
  mkdirSync(dir, { recursive: true });
  await sharp(Buffer.from(icon)).resize(size, size).png().toFile(`${dir}/ic_launcher.png`);
  await sharp(Buffer.from(icon)).resize(size, size).png().toFile(`${dir}/ic_launcher_round.png`);
  await sharp(Buffer.from(foreground)).resize(Math.round(size * 2.25)).png().toFile(`${dir}/ic_launcher_foreground.png`);
}
// Replace all generated Capacitor placeholder splash artwork inside this new app project.
for (const dir of readdirSync(res).filter(name => name.startsWith('drawable'))) {
  if (!readdirSync(`${res}/${dir}`).includes('splash.png')) continue;
  const splash = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="480"><rect width="480" height="480" fill="#0f172a"/><g transform="translate(186 186)">${monogram}</g></svg>`;
  await sharp(Buffer.from(splash)).png().toFile(`${res}/${dir}/splash.png`);
}
console.log('Generated PK launcher icons and splash artwork.');
