/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/images/hero-frame.png')",
       
      },

      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
        'openSan': ['OpenSans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

