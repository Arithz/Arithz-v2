import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "cs-white": "#ffffff",
        "cs-white2": "#FEFEFE",
        "cs-white-hover": "#F0F3F9",

        "cs-black": "4D4D4D",
        "cs-black2": "#686868",

        "cs-fade": "#BFBFBF",

        "cs-border-fade": "#BFBFBF",

        "cs-accent-red": "#D95050",
      },
      animation: {
        slideUp: "slideUp 0.25s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
