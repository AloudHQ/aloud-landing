/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        customWhite: '#FFFCF7',
        customPurpleLight: '#8289FC',
        customTransparentBlue: '#3C49FFA3',
        customGray: '#939292',
      },
      fontFamily: {
        inter: ['inter', 'san-serif'],
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
    },
  },
  plugins: [],
}

