/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          accent: "#CFF500",
          secondary: "#edebf0",
        },

        dark: {
          secondary: "#0000",
        },
      },
    },
  },
  plugins: [],
};
