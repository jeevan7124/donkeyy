/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'base': '480px',
        'md': '768px',
        '900': '900px'

      },
      fontSize: {
        'xxs': '10px',
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '24px',
        '2xl': '30px',
        '3xl': '36px',
        '4xl': '48px',
        '5xl': '60px',
        '6xl': '72px',
      },
      fontWeight: {
        'extra-light': 100,
        'thin': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'bolder': 800,
        'extrabold': 900,
      },
      colors: {
       
      },
      fontFamily: {
        'Generalsans': [ 'generalsans','sans-serif'],
        'Nohemi': [ 'nohemi','sans-serif'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
