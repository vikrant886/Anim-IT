/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '50': 'repeat(50, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      colors:{
        'heading':'#FFFCE1',
        'dark-head': "#FF8709",
        'text1': "#00BAE2",
        'background': '#0E100F',
        'border':'#42433D'
      },
      fontFamily:{
        'm':["M PLUS 1", "sans-serif"],
        'pt': ["PT Sans","sans-serif"],
      }
    },
  },
  plugins: [],
}