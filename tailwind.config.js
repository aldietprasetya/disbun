module.exports = {
  important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      overflow: {
        overlay: 'overlay',
      },
      fontFamily: {
        inter: ['Inter', 'sans - serif'],
      },
      fontSize: {
        base: '16px',
        md: '15px',
      },
      listStyleType: {
        alpha: 'lower-alpha',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        'white-2': '#F7F7F7',
        'icon-navbar': 'rgba(255, 255, 255, 0.24)',
        primary: {
          // red
          'red-1': '#CB3A31',
          'red-2': '#FFF4F2',
          // green
          green: '#038575',
          'green-1': '#CDE2E1',
          'dark-green': '#02554B',
          'dark-green-1': '#0D9282',
          // black
          black: '#01231F',
          'black-2': '#404040',
          'black-3': '#151C1B',
          teal: 'rgba(3, 133, 117, 0.2)',
          // grey
          'gray-1': '#9E9E9E',
          'gray-2': '#EDEDED',
          'gray-3': '#E0E0E0',
          'gray-4': '#C2C2C2',
          'gray-5': '#616161',
          'gray-6': '#ECECEC',
          'gray-7': '#687182',
          'light-gray': '#D5DBDA',
          'light-gray-1': '#959595',
          // blue
          'light-blue': '#F0FFFD',
          'blue-1': '#3267E3',
          'blue-2': '#F0F3FF',
          'blue-3': '#1C3E58',
        },
      },
      screens: {
        tall: {
          raw: '(max-height: 800px)',
        },
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
