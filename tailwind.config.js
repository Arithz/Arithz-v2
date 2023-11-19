/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cs-white": "#ffffff",
        "cs-white2": "#FEFEFE",
        "cs-white-hover": "#F0F3F9",

        "cs-black": "#3A3A3A",
        "cs-black2": "#686868",
        "cs-black3": "#838383",

        "cs-fade": "#BFBFBF",

        "cs-border-fade": "#BFBFBF",

        "cs-accent-red": "#D95050",
        "cs-accent-red-hover": "#F94040",
      },
      animation: {
        slideUp: "slideUp 0.3s ease forwards",
        slideDown: "slideDown 0.3s ease forwards",
        slideLeft: "slideLeft 0.3s ease forwards",
        slideLeftInverse: "slideLeftInverse 0.3s ease forwards",
        slideRight: "slideRight 0.3s ease forwards",
        slideRightInverse: "slideRightInverse 0.3s ease forwards",
        fadeIn: "fadeIn 0.3s ease forwards",
        fadeOut: "fadeOut 0.3s ease forwards",
        scaleIn: "scaleIn 0.2s ease forwards",
        scaleOut: "scaleOut 0.2s ease forwards",
      },
    },
    plugins: [],
  },
};
