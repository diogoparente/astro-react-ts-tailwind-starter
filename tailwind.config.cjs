const colors = require("tailwindcss/colors");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

const breakpoints = {
  sm: "400px",
  m: "767px",
  lg: "1024px",
};

const themeColors = {
  white: "#FEFEFE",
  black: "#252525",
};

const dark = {
  c1: themeColors.black,
  c2: themeColors.white,
};

const light = {
  c1: themeColors.white,
  c2: themeColors.black,
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,astro}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "sm-max": { max: breakpoints.sm },
        "md-max": { max: breakpoints.m },
        "lg-max": { max: breakpoints.lg },
      },
      colors: {
        ...colors,
        c1: "var(--colors-c1)",
        c2: "var(--colors-c2)",
      },
      variables: {
        DEFAULT: {
          colors: light,
          breakpoints,
        },
      },
      darkVariables: {
        DEFAULT: {
          colors: dark,
        },
      },
    },
  },
  plugins: [
    require("@mertasan/tailwindcss-variables"),
    require("tailwind-scrollbar-hide"),
  ],
};
