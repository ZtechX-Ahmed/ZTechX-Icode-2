/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scan: "scan 2s infinite linear",
      },
      keyframes: {
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['GE SS Two', 'system-ui', 'sans-serif'],
        'arabic': ['GE SS Two', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};