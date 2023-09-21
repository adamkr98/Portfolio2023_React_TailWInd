/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideLft: {
          '0%': {
            transform: 'translateX(400px)',
          },

          '100%': {
            transform: 'translateX(0px)',
          },
        },

        slideRgt: {
          '0%': {
            transform: 'translateX(-400px)',
          },

          '100%': {
            transform: 'translateX(0px)',
          },
        },
      },
      animation: {
        slideLft: 'slideLft 2s ease',
        slideRgt: 'slideRgt 2s ease'
      },
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