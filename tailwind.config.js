const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['TT Norms Pro'],
      },

      fontWeight: {
        'hairline': 100,
        'extra-light': 100,
        'thin': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'extra-bold': 800,
        'black': 900,
      },

      fontSize:{
        'title': ['14.4px', {letterSpacing: '4px'}],
        'button': ['13px', {letterSpacing: '2px'}],
        'nav': ['20px', {letterSpacing: '2px'}]
      },

      backgroundImage: {
        'welcome': "url('img/bg-welcome.svg')",
      },
    },
  },
  plugins: [],
}