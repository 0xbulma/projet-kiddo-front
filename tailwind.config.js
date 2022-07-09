/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kiddoOrange: '#fc664e',
        kiddoGreen: '#3ac9bb',
        kiddoPurple: '#a59df1',
        kiddoYellow: '#ffc20b',
        kiddoSalmon: '#fb9058',
        kiddoBlue: '#41c6f0',
        kiddoBlack: '#0f0f0f',
        kiddoSection: '#edebfc',
        kiddoGray: '#e4e3e3',
        kiddoShadow: '#9ca3af',
        kiddoLightGray: '#8A8787',
      },
      fontFamily: {
        lovely: ['lovely_nathalie', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
  ],
};
