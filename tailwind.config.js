/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        lobster: ["Lobster", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "480px",
          md: "720px",
          lg: "960px",
          xl: "1140px",
        },
      },
      backgroundImage: {
        bgBlue: "linear-gradient(to right, #1e3a8a, #1e40af, #1e293b)",
      },
    },
  },
  plugins: [],
};