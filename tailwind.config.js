/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      primary: "#00A3FF",
      dark: "#041823",
      black: "#000000",
      white: "#FFFFFF",
    },
    fontFamily: {
      DM: ["DM Sans", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
