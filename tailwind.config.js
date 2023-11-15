/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '1': '1px', // Use '1' for 0.1rem
      },
      colors: {
        backgroundColor: '#011627',
        backgroundComplColor: "#FF9F1C",
      },
      transitionDuration: {
        '800': '800ms', 
        '100': '100ms',
      },
      keyframes: {
        slideLft: {
          '0%': {
            transform: 'translateX(100px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateX(0px)',
            opacity: 1,
          },
        },

        slideRgt: {
          '0%': {
            transform: 'translateX(-200px)',
            opacity: 0,
          },

          '100%': {
            transform: 'translateX(0px)',
            opacity: 1,
          },
        },
      },
      animation: {
        slideLft: 'slideLft 2s ease',
        slideRgt: 'slideRgt 2s ease',
        opacityTopSlide: 'opacityTopSlide 2s ease',
      },
      width: {
        '5': '30rem',
      },
      screens: {
        'xs': '340px',
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
