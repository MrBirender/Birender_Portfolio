/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "first-color": "var(--first-color)",
        "title-color": "var(--title-color)",
        "text-color": "var(--text-color)",
        "body-color": "var(--body-color)",
        "container-color": "var(--container-color)",
        "border-color": "var(--border-color)",
        "text-white": "var(--text-white)",
      },
      fontFamily: {
        body: ["var(--body-font)", ...defaultTheme.fontFamily.sans],
        secondary: ["var(--second-font)", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "big": "var(--big-font-size)",
        "h1": "var(--h1-font-size)",
        "h2": "var(--h2-font-size)",
        "h3": "var(--h3-font-size)",
        "large": "var(--large-font-size)",
        "normal": "var(--normal-font-size)",
        "small": "var(--small-font-size)",
        "smaller": "var(--smaller-font-size)",
        "tiny": "var(--tiny-font-size)",
      },
      
    },
  },
  plugins: [],
};
