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
        "chinese-black": "#151515", // chinese black
        "grey-water": "#5C5F58", // vampire black
        "nd-blue": "#0C2340", // ND blue
        "dome-gold": "#C99700", // standard dome gold
        "metallic-gold": "#AE9142", // metallic gold
        "lighter-grey": "#DCE1E3", // light goldenrod yellow
        "golden-yellow": "#FFDD03", // golden yellow
        "golden-poppy": "#FBC403", // golden poppy
        "irish-green": "#00843D", // Irish green
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
        ".btn-intro": {
          padding: ".5rem 1rem",
          borderRadius: "12",
          fontWeight: "600",
          backgroundColor: "#ffdd03",
          border: "solid 2px #0a0a0a",
          color: "#0a0a0a",

          "&:hover": {
            backgroundColor: "#0a0a0a",
            border: "solid 2px #ffdd03",
            color: "#ffdd03",
          },
        },
        ".btn-project": {
          padding: ".5rem 1rem",
          borderRadius: "12",
          fontWeight: "600",
          backgroundColor: "#0c2340",
          color: "#ffdd03",
          "&:hover": {
            backgroundColor: "#ffdd03",
            color: "#0c2340",
          },
        },
        ".btn-cta": {
          padding: ".5rem 1rem",
          borderRadius: "12",
          fontWeight: "600",
          backgroundColor: "#FBC403",
          color: "#0a0a0a",
          "&:hover": {
            backgroundColor: "#0a0a0a",
            color: "#FBC403",
          },
        },
      };

      addComponents(buttons);
    }),
  ],
};
