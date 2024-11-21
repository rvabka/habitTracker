/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: {
        min: "320px",
        max: "480px",
      },
    },
    extend: {
      colors: {
        first: "#262537",
        second: "#2d2d2d",
        babyBlue: "#7263B9",
        backgroundButton: "#5A4C8C",
        buttonHover: "#4F4277",
        fontColor: "#686868",
      },
      screens: {
        "2xl": "1536px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
