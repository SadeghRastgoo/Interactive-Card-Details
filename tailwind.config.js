/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-bg': "url('/public/images/bg-main-mobile.png')",
        'desktop-bg': "url('/public/images/bg-main-desktop.png')",
      }
    },
  },
  plugins: [],
}