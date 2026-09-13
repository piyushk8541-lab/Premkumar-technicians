import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.premkumar.technicians',
  appName: 'Prem Kumar Technicians',
  webDir: 'dist',
  // No server.url: the Android app always loads its own bundled content.
  server: {
    androidScheme: 'https',
    cleartext: false,
  },
  plugins: {
    SystemBars: { insetsHandling: 'css', style: 'DARK' },
  },
  android: {
    backgroundColor: '#0f172a',
  },
};

export default config;
