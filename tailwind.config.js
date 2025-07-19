/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#facc15", // زرد ملایم
        dark: "#0d0d0d",     // بک‌گراند اصلی
        grayText: "#d1d5db", // متن ثانویه
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
