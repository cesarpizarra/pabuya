/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#141414",
        backDrop: "rgba(0, 0, 0, .3)",
        secondary: "#f1c40f",
        gradient: "rgba(10, 10, 10, 0.6)",
        grayText: "#bfbfbf",
        danger: "#FC4C4C",
      },
    },
  },
  plugins: [],
};
