/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        portrait: {raw: "(max-aspect-ratio: 1/1)"},
        short: {raw: "(max-height: 50rem)"},
        narrow: {raw: "(max-width: 40rem)"},
        tiny: {raw: "(max-width: 80rem) or (max-height: 65rem) or (max-aspect-ratio: 1/1)"}
      }
    }
  },
  plugins: [],
}