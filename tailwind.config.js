/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{ts,js,vue}', './src/assets/main.css'],
  theme: {
    fontFamily: {
      sans: ['League Spartan', 'sans-serif'],
      nunito: ['Nunito Sans', 'sans-serif'],
      pop: ['Poppins', 'sans-serif']
    },
    screens: {
      lsm: { max: '640px' },
      sm: '640px',
      lmd: { max: '768px' },
      md: '768px',
      llg: { max: '1024px' },
      lg: '1024px',
      maxlg2R: { max: '1150px' },
      minlg2R: { min: '1150px' },
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        bGround: '#EFF3F6',
        primary: '#5192fa',
        primaryLighter: '#629dfa',
        secondary: '#231e60',
        secondaryLighter: '#2e277d',
        third: '#171a2d',
				thirdLighter: '#262b4a',
        gtext: '#ededed',
        gtext2: '#d6d7dc',
        gtext3: '#707070',
        gtext4: '#b4b4b4',
        gray1: '#ddd',
        gray2: '#eaedf2'
      },
      fontSize: {
        xs: ['0.75rem', '0.875rem'],
        sm: ['0.875rem', '1rem'],
        base: ['1rem', '1.125rem'],
        lg: ['1.125rem', '1.25rem']
      }
    }
  },
  plugins: []
}
