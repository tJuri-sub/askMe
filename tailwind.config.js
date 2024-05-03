/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C6EBC5",
        secondary: "#FA7070",
        accent: "#ffffff",
      },
    },
  },
  plugins: [],
};
