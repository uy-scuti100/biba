/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-cream": "#D9E5A3",
        "light-cream": "#F1FCC0",
        black: "#1A1A1A",
        background: "EDEDED",
      },
    },
  },

  plugins: [],
};
