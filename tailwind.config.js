/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./**/*.html"],
  theme: {
    extend: {
      colors:{
        primary:"#00040f",
      },
      fontFamily:{
        poppins:['Poppins','sans-serif'],
        playball :['Playball', 'cursive'],
        rouge :['"Rouge Script"', 'cursive'],
        sacramento: ['Sacramento', 'cursive'],
      },
      backgroundImage: {
        'pattern': "url('/src/assets/circle-scatter-haikei.svg')",
        'sec-img':"url('/src/assets/blob-scene-haikei.png')",
      }
    },
  },
  plugins: [
    require('tailwindcss-animatecss'),
  ],
}

