/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'background': '#FFFFFF',
      "inputcolors": "#E5EDF5",
    },

    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
} 