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
        
      }
    }
  },
  plugins: []
};
