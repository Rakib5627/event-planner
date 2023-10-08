/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: { 
      'my-of-white': '#FFF5E0',
      'my-pink': '#FF6969',
      'my-red': '#C70039',
      'my-blue': '#141E46',
    },
  },
  plugins: [require("daisyui")],
}

