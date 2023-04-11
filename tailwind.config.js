/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "5rem",
    },
    extend: {
      colors: {
        wFont: "rgb(71 85 105)",
        primary: "rgb(74 222 128)",
        basecolor: "rgb(51 65 85)",
        basefont: "rgb(203 213 225)",
      },
    },
  },
  plugins: [],
};
