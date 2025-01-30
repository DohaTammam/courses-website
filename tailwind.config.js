/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Add path to Angular component files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B8FF",
        secondary: "#FD6F00",
        third: "#A6E51C",
        fourth: "#FF3E54",
        pinkColor: "#F232BD",
        bgColor: "#0E1F51",
        boxColor: "#808080",
        textColor: "#0E1F51",
        textTitleCard: "#0F172A",
        textCard: "#334155",
        textCard2: "#101828",
        borderColor: "#E2E8F0",
        starColor: "#EAB308",
        black: "#000",
        white: "#fff",
      },
    },
    fontFamily: {
      Raleway: ["Raleway"],
    },
  },
  plugins: [],
};
