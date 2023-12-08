/** @type {import('tailwindcss').Config} */
// import { require } from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "synthwave",
      "night",
    ],
  },
}

