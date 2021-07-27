module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        112: "28rem",
        120: "30rem",
      },
      keyframes: {
        headertoptodown: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        headerleftright: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        headerrightleft: {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        headertoptodown: "headertoptodown 1s ease-in-out",
        headerleftright: "headerleftright 1s ease-in-out",
        headerrightleft: "headerrightleft 1s ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

// animation: {
//   headertoptodown: "headertopdown 1s ease-in-out",
// },
// keyframes: {
//   headertoptodown: {
//     "0%": { transform: "translateY(-100%)" },
//     "100%": { transform: "translateX(0)" },
//   },
// },
