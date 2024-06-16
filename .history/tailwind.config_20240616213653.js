/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_contact_button: "var(--custom_contact_button)",
        accent: "var(--color-accent)",
        secondary: "var(--color-secondary)",
        custom_border_color: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
