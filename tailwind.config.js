/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*"],
  theme: {
    extend: {
      colors: {
        navColor: "#314584",
        btnColor: "#ff3946",
        pColor: "#6e757a",
        cardColor: "#ff3946",
      },
      fontSize: {
        navSize: "24px",
        titleSize: "74px",
        pSize: "18px",
        SecTitleSize: "45px",
        section2Size: "28px",
        pSSize: "15px",
        footerTitleSize: "49px",
      },

      fontFamily: {
        fontNav: ["Work Sans"],
      },
    },
  },
  plugins: [],
};
