/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        "orange-button": "#ff561e"
      }
      
    },
    boxShadow: {
      navbar: "0px 10px 8px 0px rgba(80, 80, 80, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.05)"
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '1024px',
      // => @media (min-width: 1024px) { ... }

      lg: '1090px',
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      '3xl': "1720px",
      '4xl': "1856px"
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),

  ],
}

