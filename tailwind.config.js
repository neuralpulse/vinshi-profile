/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // all JS/React files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#1A1A1A",
        accent: "#E63946",
        muted: "#6C757D",
      },
    },
  },
  plugins: [],
};
