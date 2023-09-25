module.exports = {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'mplus-rounded': ['"M PLUS Rounded 1c"', 'sans']
      },
      animation: {
        'spin-slow': 'spin 200s linear infinite'
      }
    }
  },
  plugins: []
}
