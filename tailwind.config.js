/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-gray': '#282828',
      },
      padding: {
        '5p': '5%',
      }
    },
  },
  plugins: [],
}