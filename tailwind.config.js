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
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'corinto': '#881337',
      'blanco': '#ffffff'
    }
  },
  plugins: [],
}