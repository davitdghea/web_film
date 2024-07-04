/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'purple': '0 10px 16px -5px rgba(128, 0, 128, 0.3), 0 2px 4px -1px rgba(128, 0, 128, 0.2)',
      },
    },
  },
  variants: {
  },
  plugins: [],
}


