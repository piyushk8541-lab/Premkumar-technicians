/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        app: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
          dark: '#0B1B3D',
          navy: '#0F2042',
          navyLight: '#1B315C',
          amber: '#F59E0B',
          amberDark: '#D97706',
          amberLight: '#FEF3C7',
          emerald: '#10B981',
          emeraldDark: '#059669',
          emeraldLight: '#D1FAE5',
          blue: '#2563EB',
          blueLight: '#DBEAFE',
          slate: '#334155',
          muted: '#64748B',
          border: '#E2E8F0',
          borderLight: '#F1F5F9'
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Noto Sans Devanagari', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px -1px rgba(15, 23, 42, 0.08), 0 1px 3px -1px rgba(15, 23, 42, 0.05)',
        'float': '0 10px 25px -3px rgba(15, 23, 42, 0.12), 0 4px 6px -2px rgba(15, 23, 42, 0.05)',
        'bottomNav': '0 -4px 16px -1px rgba(15, 23, 42, 0.06), 0 -2px 4px -1px rgba(15, 23, 42, 0.04)'
      }
    },
  },
  plugins: [],
};
