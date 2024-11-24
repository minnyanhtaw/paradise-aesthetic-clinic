/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",

  theme: {
    fontFamily: {
      sans: ["Satoshi", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["Lora", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#f2f7fd",
          100: "#e3eefb",
          200: "#c1ddf6",
          300: "#8bc0ee",
          400: "#4da0e3",
          500: "#2685d1",
          600: "#1768b2",
          700: "#145390",
          800: "#154877",
          900: "#173d63",
          950: "#102946",
        },
        secondary: {
          50: "#e7ffff",
          100: "#c2fffe",
          200: "#8dfffd",
          300: "#3ffffc",
          400: "#00fffe",
          500: "#00e2ff",
          600: "#00b0e0",
          700: "#008bb3",
          800: "#006e8f",
          900: "#015775",
          950: "#003b54",
        },
        heading: {
          50: "#eefaff",
          100: "#dcf4ff",
          200: "#b2ecff",
          300: "#6ddfff",
          400: "#20cfff",
          500: "#00baff",
          600: "#0095df",
          700: "#0076b4",
          800: "#006495",
          900: "#00527a",
          950: "#003b5c",
        },
      },
    },
  },
  plugins: [flowbitePlugin],
};
