// Optional bundled Linux browser for restricted build environments. Not shipped in the APK.
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export async function bundledBrowser() {
  const directory = fileURLToPath(new URL('../.cache/toolchain/browser/', import.meta.url));
  mkdirSync(directory, { recursive: true });
  process.env.TMPDIR = directory;
  const { default: chromium } = await import('@sparticuz/chromium');
  const entry = import.meta.resolve('@sparticuz/chromium');
  const { inflate } = await import(new URL('./lambdafs.js', entry));
  const { setupLambdaEnvironment } = await import(new URL('./helper.js', entry));
  await inflate(fileURLToPath(new URL('../../bin/al2023.tar.br', entry)));
  setupLambdaEnvironment(`${directory}/al2023/lib`);
  return { executablePath: await chromium.executablePath(), args: chromium.args.filter(arg => !['--single-process', '--in-process-gpu'].includes(arg)) };
}
