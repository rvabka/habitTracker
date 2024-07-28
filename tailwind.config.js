/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#111111",
        second: "#2d2d2d",
        babyBlue: "#72d7f0",
        fontColor: "#686868",
      },
    },
  },
  plugins: [],
};
