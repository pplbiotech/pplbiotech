/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2e7d32', // Green
          light: '#60ad5e',
          dark: '#005005',
        },
        accent: {
          DEFAULT: '#fbc02d', // Yellow
          light: '#fff263',
          dark: '#c49000',
        },
        background: '#f5fbe7',
        fontFamily:{
            sans: ['Poppins', 'sans-serif']
        } // Light green background
      },
    },
  },
  plugins: [],
};
