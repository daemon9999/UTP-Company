/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-red': '#bd3531',
        "primary": '#fafafa',
        'secondary': '#eb7e2b'
      },
      transitionProperty: {
        'height': 'height'
    },
    },
  },
  plugins: [],
}

