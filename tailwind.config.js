/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '5': '20rem', 
       
      },
      screens: {
        'xs': '370px',
      },
    },
  },
  plugins: [
    require('tailwindcss-order')({
      order: {
        sm: 0, 
        md: 1, 
        lg: 2, 
        xl: 3, 
      },
    }),
  ],
}