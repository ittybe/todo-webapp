module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'img-light-mb': "url('./assets/bg-mobile-light.jpg')",
        'img-dark-mb': "url('./assets/bg-mobile-dark.jpg')",
        'img-light-desk': "url('./assets/bg-desktop-light.jpg')",
        'img-dark-desk': "url('./assets/bg-desktop-dark.jpg')",
        "moon-sign": "url('./assets/icon-moon.svg')",
        "sun-sign": "url('./assets/icon-sun.svg')",
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"]
    },
  },
  plugins: [],
}
