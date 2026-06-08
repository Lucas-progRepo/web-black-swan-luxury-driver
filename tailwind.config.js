/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#1C1C1C',
        ink: '#F5F1E8',
        inkSoft: 'rgba(245, 241, 232, 0.65)',
        accent: '#C9A961',
        accentSoft: 'rgba(201, 169, 97, 0.12)',
        line: 'rgba(245, 241, 232, 0.08)'
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif']
      },
      transitionTimingFunction: {
        'out-strong': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out-strong': 'cubic-bezier(0.77, 0, 0.175, 1)'
      }
    }
  },
  plugins: []
};
