import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: "2.5rem",
              fontWeight: "bold",
            },
            h2: {
              fontSize: "2rem",
              fontWeight: "semibold",
            },
            h3: {
              fontSize: "1.75rem",
              fontWeight: "medium",
            },
            h4: {
              fontSize: "1.5rem",
              fontWeight: "medium",
            },
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("@tailwindcss/typography")],
};
