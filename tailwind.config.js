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
      'xs':'540px',
      'tablet':'640px',
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