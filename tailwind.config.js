/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark': '#1e293b',
      }
    },
  },
  plugins: [require('daisyui'),],
}

