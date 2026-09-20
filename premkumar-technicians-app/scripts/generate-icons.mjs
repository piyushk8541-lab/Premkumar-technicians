import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { renderAssets, resPath, sourceSha256 } from './icon-assets.mjs';

const assets = await renderAssets();
for (const [relative, content] of assets) {
  const destination = join(resPath, relative);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, content);
}
console.log(`Generated ${assets.size} Android launcher/splash assets from the exact approved PNG.`);
console.log(`Source SHA-256: ${sourceSha256}`);
console.log('Frontend artwork, app pages, and the original website were not modified.');
