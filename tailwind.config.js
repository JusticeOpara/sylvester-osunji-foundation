/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/images/dark-hero-frame.png')",
         'text-background': "url('./assets/images/rectangle-white.png')"
      },

      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
        'openSan': ['OpenSans', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif']

      }
    },
  },
  plugins: [],
}

