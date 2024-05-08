/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "age-business-blue": {
          100: "#002FF1",
          200: "#D6DEF0",
          400: "#002480",
        },
        "age-business-orange": {
          100: "#FC5B0E",
          200: "#FF6C0E",
          400: "#FB3315",
        },
      },
      boxShadow: {
        orange:
          "0 5px 30px 6px rgba(251, 51, 21, 0.5), 0 2px 4px -2px rgba(251, 51, 21, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "10rem",
      },
      spacing: {
        "18": "4.5rem",
        "16": "4.2rem",
      },
    },
  },
  plugins: [],
};
