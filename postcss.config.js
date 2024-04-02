module.exports = {
    plugins: [
      require('postcss-preset-env'), // ensures that project can leverage modern css features while maintaining broad browser compatibility.
      require('tailwindcss'),
      require('autoprefixer')
    ]
  }
  