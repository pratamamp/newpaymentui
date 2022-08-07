const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        publicsans: ["Public Sans", "sans-serif"],
        windsong: ["WindSong", "cursive"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        amber: colors.amber,
        blue: colors.blue,
        sky: colors.sky,
        red: colors.red,
        cyan: colors.cyan,
        gray: colors.gray,
        orange: colors.orange,
        yellow: colors.yellow,
        emerald: colors.emerald,
        indigo: colors.indigo,
        basecolor: "#E8E9EE",
        h2color: "#9CA1B6",
        h1color: "#6C6C6C",
        activebg: "#DDDDEF",
        activefont: "#5568B9",
        bgthumbgreen: "#00CD77",
      },
      backgroundImage: {
        herobg: "url('/indonesiamap.png')",
      },
    },
  },
  plugins: [],
};
