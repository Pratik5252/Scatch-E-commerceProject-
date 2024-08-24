/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["CabinetGrotesk-Variable", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
