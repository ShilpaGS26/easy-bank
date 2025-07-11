/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // Angular templates and TS files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Public Sans"', 'sans-serif'],
      },
      colors: {
        'grey-1': '#777777',
        'grey-600': '#F4F5F7',
        'blue-450': '#2D314E',
        'white-1': '#FAFAFA'
      },
    }
  },
  plugins: [],
};
