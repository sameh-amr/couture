/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF5F2',
          100: '#FFE6E0',
          200: '#FFD1C6',
          300: '#FFB4A1',
          400: '#FF967C',
          500: '#B87264', // Main rose gold color from logo
          600: '#A65D4E',
          700: '#8A4A3D',
          800: '#6E382D',
          900: '#52261D',
        },
        neutral: {
          50: '#F9F9F9',
          100: '#F0F0F0',
          200: '#E4E4E4',
          300: '#D1D1D1',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Raleway', 'sans-serif'],
      }
    },
  },
  plugins: [],
};