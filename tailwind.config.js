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
          customDark: '#121823',
      },
      padding: {
        '5p': '5%',
      }
    },
  },
  plugins: [],
}