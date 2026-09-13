import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  root: fileURLToPath(new URL('./src', import.meta.url)),
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'chrome60',
    cssTarget: 'chrome60',
  },
  server: { host: '0.0.0.0', allowedHosts: ['.e2b.app'] },
  preview: { host: '0.0.0.0', allowedHosts: ['.e2b.app'] },
});
