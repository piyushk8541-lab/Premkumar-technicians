export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        brand: '#1E40AF',
        electric: '#3B82F6',
        amber: '#F59E0B',
        success: '#22C55E',
      },
      fontFamily: {
        sans: ['Poppins', 'Noto Sans Devanagari', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,.12), 0 20px 60px rgba(15,23,42,.12)',
        'glow-blue': '0 16px 44px rgba(37,99,235,.30)',
      },
    },
  },
  plugins: [],
};
