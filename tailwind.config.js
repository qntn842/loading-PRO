/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mousse: {
          DEFAULT: '#2E4036',
          light: '#3E5549',
          dark: '#1D2A23',
          surface: '#24342C',
          glow: 'rgba(46, 64, 54, 0.15)',
        },
        argile: {
          DEFAULT: '#CC5833',
          hover: '#DB643E',
          dark: '#B04724',
          subtle: 'rgba(204, 88, 51, 0.12)',
        },
        creme: {
          DEFAULT: '#F2F0E9',
          light: '#FAF9F5',
          card: '#E8E5DA',
          border: 'rgba(46, 64, 54, 0.12)',
        },
        charbon: {
          DEFAULT: '#1A1A1A',
          dark: '#0F0F12',
          surface: '#151515',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Outfit', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        '2rem': '2rem',
        '2.5rem': '2.5rem',
        '3rem': '3rem',
        '4rem': '4rem',
      },
      boxShadow: {
        'subtle': '0 10px 30px -10px rgba(26, 26, 26, 0.08)',
        'elevated': '0 20px 40px -15px rgba(46, 64, 54, 0.12)',
        'magnetic': '0 12px 32px -4px rgba(204, 88, 51, 0.28)',
      },
      transitionTimingFunction: {
        'magnetic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-elastic': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }
    },
  },
  plugins: [],
};
