export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {

      /* =========================
         ANIMATIONS
      ========================= */

      animation: {
        zoom: "zoom 20s ease-in-out infinite",
        fadeIn: "fadeIn 1.2s ease forwards",
        fadeUp: "fadeUp 1s ease forwards",
      },

      /* =========================
         KEYFRAMES
      ========================= */

      keyframes: {
        zoom: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1.2)" },
        },

        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },

        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      /* =========================
         LUXURY EASING SYSTEM
      ========================= */

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },

    },
  },

  plugins: [],
};