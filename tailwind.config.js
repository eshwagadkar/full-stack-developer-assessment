/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.hbs', './docs/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'logo' : ['"boucherie-cursive"', 'cursive']
      }
    },
    colors: {
      // Custom colors 
      customColor: '#FFD365',
      logoColor: '#A08243',
      headingColor: '#7F6024',
      footerColor: '#8C681F',
      pinkShade: '#E94B8B'
    },
    gridTemplateRows: {
      'main-layout': 'repeat(3, minmax(min-content, max-content))', 
    },
  },
  plugins: [],
}

