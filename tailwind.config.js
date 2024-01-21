/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      fontFamily: {
        'manrove': 'Manrope'
      },
      backgroundImage : {
        'gradient-primary': "linear-gradient(270deg, #F00 0%, #FF8938 100%)",
        'gradient-secondary': "linear-gradient(180deg, #F4F4F4 0%, rgba(244, 244, 244, 0.00) 100%)",
        'gradient-1': 'linear-gradient(270deg, #F00 0%, #FF8938 100%)',
        'gradient-2': 'rgba(230, 166, 35, 0.10)',
        'gradient-3':'rgba(87, 118, 57, 0.10)',
        'gradient-4': 'linear-gradient(90deg, #D9D9D9 0%, rgba(255, 255, 255, 0.00) 100%)',
      },
      colors : {
        'gradient-color': "linear-gradient(270deg, #F00 0%, #FF8938 100%)",
      }
    },
  },
  daisyui: {
    themes: [],
  },

  plugins: [require("daisyui")],
}

