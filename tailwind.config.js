const plugin = require("tailwindcss/plugin");
// const naj = require("./src/assets/images/night.jpg");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25vh",
      "1/2": "50vh",
      "3/4": "75vh",
      close: "90vh",
      full: "100vh",
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      monitor: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: (theme) => ({
        naj: "url('/src/assets/images/night.jpg')",
      }),
      screens: {
        baller: "1980px",
        // => @media (min-width: 1600px) { ... }

        ridic: "2560px",
        // => @media (min-width: 2560px) { ... }
      },
      colors: {
        // "raisin-black": "#241F1E", // raisin black
        // "chinese-black": "#151515", // chinese black
        // "nd-blue": "#0C2340", // ND blue
        // "dome-gold": "#C99700", // standard dome gold
        // "metallic-gold": "#AE9142", // metallic gold
        // "goldenrod-yellow": "#FBFCD4", // light goldenrod yellow
        // "golden-yellow": "#FFDD03", // golden yellow
        // "golden-poppy": "#FBC403", // golden poppy
        // "irish-green": "#00843D", // Irish green
        "vampire-black": "#0A0A0A", // vampire black
        cloud: "#F3F3F3",
        "light-grey": "#DCE1E3",
        "grey-water": "#5C5F58",
        "bright-red": "#DE354C",
        "red-highlight": "#B73225",
        "deep-red": "#932432",
        "blue-minded": "#004E7C",
        "pure-purple": "#3C1874",
        "purple-tinged-grey": "#283747",
      },
      fontFamily: {
        sans: ["Inter var"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const buttons = {
        ".btn": {
          padding: ".5rem 1rem",
          borderRadius: "12",
          fontWeight: "600",
          backgroundColor: "#004E7C",
          border: "solid 2px #932432",
          color: "#DCE1E3",

          "&:hover": {
            backgroundColor: "#283747",
            border: "solid 2px #DCE1E3",
            color: "#DE354C",
          },
        },
      };

      addComponents(buttons);
    }),
  ],
};
