/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        'hero-kopi': "url('/public/css/assets/biji coffe.png')",
      },
    },
    fontFamily : {
      roboto : ['Roboto'],
      monserrat : ['Montserrat'],
    },
  },
  plugins: [],
}

