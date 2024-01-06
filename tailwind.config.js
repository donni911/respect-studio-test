/** @type {import('tailwindcss').Config} */

// vw - based from design ( min-screens should be in px )
// calculation -- (px in design) / (width of screen) * 100% 
// https://web-development.space/tools/px-to-vw/

export default {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    colors: {
      primary: "#E63E3A",
      black: "#101820",
      'muted':'#5D646B'
    },
    extend: {
      fontSize: {
        xs:'0.677vw',
        base: "0.8333vw",
        sm: "0.9375vw",
        regular: "1.146vw",
        md: "1.979vw",
        lg: "3.125vw",
        xl: "3.646vw",
        xxl: "5.8333vw",
        xxxl: "7.031vw",
      },
    },
  },
  extends:{
    colors: {
      primary: "#E63E3A",
      black: "#101820",
    },
  },
  plugins: [],
};
