/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        jet: "#353535",
        blueGray: "#5b6371",
        gray: "#8A897C",
        lightGray: "#BDBBB0",
        lightBlueGray: "#D2D7DF",
      },
      fontFamily: {
        sans: ["Inconsolata", "sans-serif"],
        serif: ["Inconsolata", "serif"],
      },
    },
  },
  plugins: [],
}
