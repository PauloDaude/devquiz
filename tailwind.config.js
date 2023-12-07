/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    extend: {
      colors: {
        'yellow-main': '#FFBB45',
        'gray-main': '#8F8E93',
        'gray-bg': '#F6F5FA',
        'gray-label': '#B5B2C1',
        'red-light-bg': '#FF5959'
      },
      fontFamily: {
        sans: ['Onest', 'sans-serif']
      },
      spacing: {
      },
      boxShadow: {
        'gray': '3px 5px 0px #8F8E93',
        'yellow': '3px 5px 0px #FFBB45'
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        }
      }
    }
  },
  plugins: []
};
