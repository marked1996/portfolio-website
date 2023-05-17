/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lausanne400: ["TWKLausanne-400", "sans-serif"],
      lausanne350: ["TWKLausanne-350", "sans-serif"],
      lausanne300: ["TWKLausanne-300", "sans-serif"],
    },
    fontSize: {
      title: "clamp(100px, 11vw, 240px)",
      heading: "clamp(48px, 5vw, 100px)",
      subheading: "clamp(32px, 2.5vw, 60rem)",
      text: "clamp(18px, 2vw, 24px)",
      linkText: "clamp(24px, 2.25vw, 30px)",
    },
    colors: {
      bodyCrl: "#070707",
      textClr: "#f1f1f1",
      cardBgClr: "#0e0e0e",
      borderClr: "#212121",
      linkClr: "#4e4e55",
      //same as bodyClr only in rgb
      test: "rgba(7,7,7,0.7)",
    },
    // screens:{
    //   'tablet': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'laptop': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'desktop': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      spacing: {
        //padding
        card: "max(20px, 2vw)",
        //gap
        // outer: "max(10px, 0.75vw)",
        // inner: "max(16px, 3vw)",
      },
      borderRadius: {
        radius: "16px",
      },
      gap: {
        inner: "max(14px, 2.75vw)",
        outer: "max(10px, 0.65vw)",
      },
      height: {
        fullScreen: "100svh",
      },
    },
  },
  plugins: [],
};
