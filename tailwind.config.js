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
      // height: { 111: "112rem" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
