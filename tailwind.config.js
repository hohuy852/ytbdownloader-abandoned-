module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      center: true
    },
    fontFamily:{
      "body": ['"Poppins", sans-serif']
    },
    extend: {
      fontSize:{
        'h1': ["30px", {lineHeight: '28px'}],
        'nav': ["16px", {lineHeight: '28px'}]
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
