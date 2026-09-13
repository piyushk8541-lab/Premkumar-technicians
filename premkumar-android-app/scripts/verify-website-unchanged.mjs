import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));
const baseline = JSON.parse(readFileSync(new URL('../docs/website-baseline.json', import.meta.url), 'utf8'));
const branch = execFileSync('git', ['branch', '--show-current'], { cwd: root, encoding: 'utf8' }).trim();
const expectedBranch = 'arena/01a09a19-premkumar-technicians';
const pinnedCiCheckout = branch === '' && process.env.GITHUB_ACTIONS === 'true' &&
  process.env.GITHUB_REF === `refs/heads/${expectedBranch}`;
if (branch !== expectedBranch && !pinnedCiCheckout) {
  throw new Error(`Unexpected branch: ${branch}`);
}
for (const [path, expected] of Object.entries(baseline.files)) {
  const actual = createHash('sha256').update(readFileSync(root + path)).digest('hex');
  if (actual !== expected) throw new Error(`Original file changed: ${path}`);
}
// Include staged, unstaged, and untracked changes. Android debug/release workflows
// and the existing branch-only Vercel guard are the authorized root exceptions.
// Keep the exception list exact; never allow arbitrary root files or workflows.
const exceptions = new Set(['.github/workflows/android-debug.yml', '.github/workflows/android-release.yml', 'vercel.json']);
const guard = JSON.parse(readFileSync(root + 'vercel.json', 'utf8'));
if (JSON.stringify(guard.git?.deploymentEnabled) !== JSON.stringify({ [expectedBranch]: false })) {
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
console.log(`PASS: branch is ${branch || expectedBranch + " (pinned CI checkout)"}; only app files and approved Android CI/config paths differ.`);
