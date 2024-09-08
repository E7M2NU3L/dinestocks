// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        light: {
          1 : "#F2F2F2",
          2 : "#BFD9D6",
          3 : "#4F8C64",
          4 : "#023440",
          5 : "#012E40"
        },
        dark : {
          1 : "#4F5059",
          2 : "#181B26",
          3 : "#E4EBF2",
          4 : "#D2D9D9",
          5 : "#0D0D0D"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwind-scrollbar-hide")]
}