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
      },
      screens: {
        portrait: {raw: "(max-aspect-ratio: 1/1)"},
        tiny: {raw: "(max-aspect-ratio: 1/1) or (max-height: 40rem) or (max-width: 40rem)"},
        medium: {raw: "(max-width: 80rem) or (max-height: 67rem)"}
      }
    }
  },
  plugins: [],
}