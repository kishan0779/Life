/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],

  theme: {
    extend: {
      fontFamily:{
        abc:["Figtree", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
      
    } 
  },
  plugins: [],
}

