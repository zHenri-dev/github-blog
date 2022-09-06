/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts, tsx}', './src/**/*'],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('/src/assets/header-background.svg')",
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        'dark-blue': {
          50: '#E7EDF4',
          100: '#C4D4E3',
          200: '#AFC2D4',
          300: '#7B96B2',
          400: '#3A536B',
          500: '#1C2F41',
          600: '#112131',
          700: '#0B1B2B',
          800: '#071422',
          900: '#040F1A',
        },
        blue: {
          500: '#3294F8',
        },
      },
      fontSize: {
        xs: [
          '12px',
          {
            lineHeight: '160%',
          },
        ],
        sm: [
          '14px',
          {
            lineHeight: '160%',
          },
        ],
        base: [
          '16px',
          {
            lineHeight: '160%',
          },
        ],
        lg: [
          '18px',
          {
            lineHeight: '160%',
          },
        ],
        xl: [
          '20px',
          {
            lineHeight: '160%',
          },
        ],
        '2xl': [
          '24px',
          {
            lineHeight: '160%',
          },
        ],
        '3xl': [
          '30px',
          {
            lineHeight: '160%',
          },
        ],
        '4xl': [
          '36px',
          {
            lineHeight: '160%',
          },
        ],
        '5xl': [
          '48px',
          {
            lineHeight: '160%',
          },
        ],
        '6xl': [
          '60px',
          {
            lineHeight: '160%',
          },
        ],
        '7xl': [
          '72px',
          {
            lineHeight: '160%',
          },
        ],
        '8xl': [
          '96px',
          {
            lineHeight: '160%',
          },
        ],
        '9xl': [
          '128px',
          {
            lineHeight: '160%',
          },
        ],
      },
    },
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/line-clamp')],
}
