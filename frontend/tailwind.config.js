/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexShrink: {
        2: '2'
      }
    },
    colors: {
      // Configure your color palette here
      transparent: 'transparent',
      current: 'currentColor',
      'blue':'#6590D5',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'green': '#22c55e',
      'yellow': '#fde047',
      'black':'#000000',
      'red':'#EA445A',
      'darkred':'#dc2626',

      'lightgreen':'#74F0ED',
      
    }
  },
  plugins: [],
}


