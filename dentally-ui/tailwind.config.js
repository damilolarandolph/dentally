module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4198f7',
          dark: '#3e3ef4',
          DEFAULT: '#0d53fc',
        },
        'contrast': '#49c496',
        'darkest-grey': '#263446',
        'mid-grey': '#88949e',
        'grey': '#c6cdd8',
        'light-grey': '#dee5f1'
      }
    },
    fontFamily: {
      'sans': ['Open Sans'],
      'body': ['Roboto'],
    }
  },
  variants: {
    extend: {
      borderWidth: ['focus', 'hover'],
    },
  },
  plugins: [],
}
