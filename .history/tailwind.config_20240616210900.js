/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--root)",
        secondary: "#edebf0",
      },
    },
  },
  plugins: [],
};
