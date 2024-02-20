/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          'first': '#edede9',
          'second': '#d6ccc2',
          'third': '#f5ebe0',
          'forth': '#e3d5ca',
          'fifth': '#d5bdaf',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}