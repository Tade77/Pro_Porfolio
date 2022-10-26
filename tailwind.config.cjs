/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        bgColor: "rgba(249, 250, 251, 0.95)",
      },
    },
  },
  plugins: [],
};
