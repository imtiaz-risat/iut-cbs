/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      aspectRatio: {
        "1/2": "1 / 2",
        "2/1": "2 / 1",
      },
    },
    screens: {
      sm: "640px",
      md: "850px", // Changed the default md breakpoint to 850px
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      gold: "rgba(255, 215, 0, 0.8)",
      silver: "rgba(161, 161, 170, 0.8)",
      bronze: "rgba(205, 127, 50, 0.75)",
    },
  },
  plugins: [],
});
