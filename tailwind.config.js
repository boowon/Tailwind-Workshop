/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'dark-light': '#333333',
        'light-dark': '#f2f2f2',
      },
    },
  },
  plugins: [],
}
