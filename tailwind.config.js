/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "primary-bg": "#13131C",
      primary: "#00C2D1",
      "primary-2": "#006BA6",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      sky: colors.sky,
      orange: colors.orange,
      teal: colors.teal,
      "pastel-green": "rgb(var(--color-pastel-green-number) / <alpha-value>)",
      "pastel-pink": "rgb(var(--color-pastel-pink-number) / <alpha-value>)",
      "pastel-blue": "rgb(var(--color-pastel-blue-number) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [],
};
