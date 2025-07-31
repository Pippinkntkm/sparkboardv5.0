/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'boomerang': {
          'black': '#000000',
          'silver': '#C0C0C0',
          'navy': '#04045E',
          'blue': '#023E89',
          'light-blue': '#3E84C6',
        }
      }
    },
  },
  plugins: [],
} 