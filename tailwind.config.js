/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        domine: ['Domine', 'sans-serif']
      },
      screens: {
        portrait: {raw: "(max-aspect-ratio: 1/1)"},
        tiny: {raw: "(max-aspect-ratio: 1/1) or (max-height: 40rem) or (max-width: 40rem)"},
        short: {raw: "(max-height: 40rem)"}
      }
    }
  },
  plugins: [],
}