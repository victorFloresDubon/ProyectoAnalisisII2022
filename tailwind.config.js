/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: true,
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        qatar1: '#1077c3',
        qatar2: '#49bce3',
        qatar3: '#fec310',
        qatar4: '#56042c',
        brightqatar4: '#BA095F'
      }  
    }
  },
  plugins: [],
}