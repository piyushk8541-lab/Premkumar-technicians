import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));
const baseline = JSON.parse(readFileSync(new URL('../docs/website-baseline.json', import.meta.url), 'utf8'));
const branch = execFileSync('git', ['branch', '--show-current'], { cwd: root, encoding: 'utf8' }).trim();
if (branch !== 'arena/01a09a19-premkumar-technicians') {
  throw new Error(`Unexpected branch: ${branch}`);
}
for (const [path, expected] of Object.entries(baseline.files)) {
  const actual = createHash('sha256').update(readFileSync(root + path)).digest('hex');
  if (actual !== expected) throw new Error(`Original file changed: ${path}`);
}
// Include staged, unstaged, and untracked changes. The existing branch-only Android
// workflow and Vercel deployment guard were explicitly authorized before this update.
// Keep the exception list exact; never allow arbitrary root files or workflows.
const exceptions = new Set(['.github/workflows/android-debug.yml', 'vercel.json']);
const guard = JSON.parse(readFileSync(root + 'vercel.json', 'utf8'));
if (JSON.stringify(guard.git?.deploymentEnabled) !== JSON.stringify({ [branch]: false })) {
  throw new Error('The branch-only deployment guard changed.');
}
const changed = new Set([
  ...execFileSync('git', ['diff', '--name-only', baseline.commit], { cwd: root, encoding: 'utf8' }).trim().split('\n'),
  ...execFileSync('git', ['ls-files', '--others', '--exclude-standard'], { cwd: root, encoding: 'utf8' }).trim().split('\n'),
].filter(Boolean));
for (const path of changed) {
  if (!path.startsWith('premkumar-android-app/') && !exceptions.has(path)) {
    throw new Error(`Change outside authorized app/CI paths: ${path}`);
  }
}
console.log(`PASS: all ${Object.keys(baseline.files).length} original files match ${baseline.commit}.`);
console.log(`PASS: branch is ${branch}; only app files and the two explicitly approved CI/config paths differ.`);
