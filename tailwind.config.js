/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        firstColor: '#CC472C',
        secondColor: '#E38C74',
        thirdColor: '#E8C5BC',
        textColor: '#E3E9FC',
        firstDarkColor: '#1E2942',
        secondDarkColor: '#2E356E',
        thirdDarkColor: '#505485',
        cyanColor: '#516EB8'
      }
    },
  },
  plugins: [],
}
