/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'card': '2px -2px 16px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        text: "#FFFFFF",
        secondary: "#F72585",
        lightSecondary: "rgba(13, 76, 146, 0.2)",
        blackText: "rgba(0, 0, 0, 1)"
      },
      fontFamily:{
        poppins: "Poppins",
        verdana: "Verdana",
        inter: "Inter",
        vollkorn: "Vollkorn SC"
      }
    },
    screens: {
      xs: "360px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  variants: ["responsive", "hover", "focus"],
  plugins: [],
};