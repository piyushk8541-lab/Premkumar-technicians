import { defineConfig } from '@playwright/test';
import { bundledBrowser } from './scripts/test-browser.mjs';

const launchOptions = process.env.PK_BUNDLED_CHROMIUM === '1' ? await bundledBrowser() : {};

export default defineConfig({
  testDir: './tests',
  outputDir: './test-results',
  timeout: 30000,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4173',
    viewport: { width: 390, height: 844 },
    contextOptions: { reducedMotion: 'reduce' },
    launchOptions,
    screenshot: 'only-on-failure',
  },
  // Start the preview with npm run preview -- --port 4173 before running tests.
  // No managed server here: the Arena process tools own long-running servers.
});
