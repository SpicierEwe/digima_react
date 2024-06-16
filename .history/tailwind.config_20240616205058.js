/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--color-accent)",
        secondary: "var(--color-secondary)",
      },
    },
  },
  plugins: [],
};
