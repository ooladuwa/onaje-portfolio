const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
      backgroundImage: {
        hero: "url('/src/assets/images/night.jpg')",
      },
      screens: {
        baller: "1980px",
        // => @media (min-width: 1600px) { ... }

        ridic: "2560px",
        // => @media (min-width: 2560px) { ... }
      },
      colors: {
        "raisin-black": "#241F1E", // raisin black
        "chinese-black": "#151515", // chinese black
        "vampire-black": "#0A0A0A", // vampire black
        "nd-blue": "#0C2340", // ND blue
        "dome-gold": "#C99700", // standard dome gold
        "metallic-gold": "#AE9142", // metallic gold
        "goldenrod-yellow": "#FBFCD4", // light goldenrod yellow
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
          borderRadius: "50%",
          // margin: "1rem",
          fontWeight: "600",
          backgroundColor: "#0a0a0a",
          border: "solid 2px #ffdd03",
          color: "#ffdd03",
          "&:hover": {
            backgroundColor: "#ffdd03",
            border: "solid 2px #0a0a0a",
            color: "#0a0a0a",
          },
        },
        ".btn-project": {
          padding: ".5rem 1rem",
          borderRadius: "60%",
          fontWeight: "600",
          backgroundColor: "#0c2340",
          color: "#ffdd03",
          "&:hover": {
            backgroundColor: "#ffdd03",
            color: "#0c2340",
          },
        },
      };

      addComponents(buttons);
    }),
  ],
};
