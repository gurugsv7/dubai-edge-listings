/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        church: {
          gold: '#D4AF37',
          green: {
            DEFAULT: '#1B4D3E',
            light: '#2A7D66',
          },
        },
      },
    },
  },
  plugins: [],
};