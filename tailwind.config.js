/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        airone: ["airone", "sans-serif"],
        bryson: ["bryson", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
