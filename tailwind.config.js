module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.jsx",
    "./pages/**/*.js",
    "./components/**/*.js",
    "./components/**/*.jsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      "md-plus": "810px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
    },
    extend: {
      colors: {
        "v-bg": "#111111",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#333",

            a: {
              color: "#1E40AF",
            },
            strong: {
              color: "black",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  // require("@tailwindcss/forms")
  plugins: [require("@tailwindcss/typography")],
};
