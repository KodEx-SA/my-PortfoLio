/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "animate-meteor",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};