/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#080808',
        smoke: '#1C1C1E',
        graphite: '#2E2E30',
        bone: '#F0EBE1',
        muted: '#9A9188',
        gold: '#C4972A',
        'aged-gold': '#8A6A1E',
        navy: '#0D1520',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        ui: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', '"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}
