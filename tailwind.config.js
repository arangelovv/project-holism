module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        "custom-inner": "inset -12px -8px 40px rgba(70, 70, 70, 0.12)",
      },
    },
  },
  plugins: [],
};
