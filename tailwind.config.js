const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  darkMode: "media" /* media, false */,
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
