// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // tells Tailwind to scan your components
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito Sans"', "sans-serif"],
      },
      animation: {
        fadeInDown: "fadeInDown 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        keyframes: {
          jumpIn: {
            "0%": { transform: "scale(0.5) translateY(100px)", opacity: "0" },
            "50%": { transform: "scale(1.1) translateY(-10px)", opacity: "1" },
            "100%": { transform: "scale(1) translateY(0)", opacity: "1" },
          },
        },
        animation: {
          "jump-in": "jumpIn 0.8s ease-out forwards",
        },
      },
    },
  },
  plugins: [],
};
