/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    screens: {
      'tablet':'640 px',
      'laptop': '1024px',
      'desktop': '1280px'
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