/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#141414",
        darkSecondary: "rgba(44, 44, 44, .349)",
        modalBackground: "rgba(0, 0, 0, .3)",
        backDrop: "rgba(0, 0, 0, .3)",
        secondary: "#f1c40f",
        gradient: "rgba(10, 10, 10, 0.6)",
        grayText: "#bfbfbf",
        danger: "#e60a15",
      },
    },
  },
  plugins: [],
};
