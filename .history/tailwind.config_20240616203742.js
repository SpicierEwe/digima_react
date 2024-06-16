/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "hsl(var(--color-accent))",
        secondary: "#edebf0",
      },
    },
  },
  plugins: [],
};
