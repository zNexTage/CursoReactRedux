module.exports = {
  purge: {
    content: [ //Remove tudo o que não é usado
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    safelist:[
      /^bg-/,
      /^to-/,
      /^from-/
    ] //Garante que as classes de css sejam geradas dinamicamente
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
