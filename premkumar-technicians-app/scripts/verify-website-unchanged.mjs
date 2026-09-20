import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const EXPECTED_HASHES = {
  '.nojekyll': 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  'LICENSE': 'e2b44cc4d52bc806c97c4097377a971db4a4ac997ba693fe8ecf25cb4995adb6',
  'README.md': 'a3532e5d1cd4347945f398d3c95980d6378700aa1f89cff28c13f87799784ae1',
  'index.html': '9a7f189352bd8d1c526c245507c3e836dcd8eb98370355175aa2cfefdbab33d9',
  'robots.txt': 'e6dc0d29c7c6896e38f1544e0069f1ce093ab8bfa8c03bded05e06aab155acf6',
  'sitemap.xml': 'cfb13ffec45f0210d955718fb2d178fb2a4c3bfff56aa6ad93cbd7037e74db7b',
};

const repoRoot = resolve(import.meta.dirname, '../..');
let failed = false;

for (const [file, expectedHash] of Object.entries(EXPECTED_HASHES)) {
  const filePath = resolve(repoRoot, file);
  try {
    const content = await readFile(filePath);
    const hash = createHash('sha256').update(content).digest('hex');
    if (hash !== expectedHash) {
      console.error(`❌ Hash mismatch for ${file}! Expected ${expectedHash}, got ${hash}`);
      failed = true;
    } else {
      console.log(`✅ ${file} is 100% byte-identical and untouched.`);
    }
  } catch (err) {
    console.error(`❌ Could not read ${file}:`, err.message);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log('\nAll 6 original website files verified untouched and pristine!');
}
