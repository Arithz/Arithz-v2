import type { Config } from "tailwindcss";

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
        "cs-bg": "#f6f6f6",

        "cs-white": "#ffffff",

        "cs-fade": "#f2f2f2",
        "cs-fade1": "#e6e6e6",
        "cs-fade3": "#cccccc",

        "cs-red": "#ff0000",
        "cs-accent": "#0000ff",
      },
    },
  },
  plugins: [],
};
export default config;
