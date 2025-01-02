/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "first-color": "hsl(271, 76%, 53%)",
        "title-color": "hsl(0, 0%, 40%)",
        "text-color": "hsl(0, 0%, 50%)",
        "body-color": "hsl(0, 0%, 100%)",
        "container-color": "hsl(0, 0%, 93%)",
        "border-color": "hsl(0, 0%, 87%)",
        "text-white": "#fff",
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
        second: ["Poppins", "sans-serif"],
      },
      fontSize: {
        big: "56px",
        h1: "50px",
        h2: "32px",
        h3: "24px",
        large: "18px",
        normal: "16px",
        small: "15px",
        smaller: "14px",
        tiny: "12px",
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          // Colors
          '--first-color': theme('colors.first-color'),
          '--title-color': theme('colors.title-color'),
          '--text-color': theme('colors.text-color'),
          '--body-color': theme('colors.body-color'),
          '--container-color': theme('colors.container-color'),
          '--border-color': theme('colors.border-color'),
          '--text-white': theme('colors.text-white'),

          // Font Families
          '--font-body': theme('fontFamily.body'),
          '--font-second': theme('fontFamily.second'),

          // Font Sizes
          '--font-big': theme('fontSize.big'),
          '--font-h1': theme('fontSize.h1'),
          '--font-h2': theme('fontSize.h2'),
          '--font-h3': theme('fontSize.h3'),
          '--font-large': theme('fontSize.large'),
          '--font-normal': theme('fontSize.normal'),
          '--font-small': theme('fontSize.small'),
          '--font-smaller': theme('fontSize.smaller'),
          '--font-tiny': theme('fontSize.tiny'),

          // Font Weights
          '--font-weight-400': theme('fontWeight.400'),
          '--font-weight-500': theme('fontWeight.500'),
          '--font-weight-600': theme('fontWeight.600'),
          '--font-weight-700': theme('fontWeight.700'),
          '--font-weight-800': theme('fontWeight.800'),
        },
      });
    },
  ],
};
