/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.hbs', './docs/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'logo' : ['"boucherie-cursive"', 'cursive']
      }
    },
  },
  plugins: [],
}

