const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],

  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1140px',
      '2xl': '1280px',
      '3xl': '1536px'
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1140px'
      }
    },
    extend: {
      colors: {
        'primary': '#d81b60',
        'primary-light': '#ff5c8d',
        'primary-dark': '#a00037',
        'secondary': '#1a1831',
        'secondary-light': '#51478f',
        'secondary-dark': '#0d0c1e',
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
