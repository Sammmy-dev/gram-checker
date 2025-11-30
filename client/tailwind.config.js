/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E85D2A",
        "background-light": "#F8F9FA",
        "background-dark": "#121212",
      }
    },
  },
  plugins: [],
};