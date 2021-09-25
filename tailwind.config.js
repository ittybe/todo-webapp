module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        blue: "var(--primary-bright-blue)",
      },
      l: {
        "light-gray": "var(--l-light-gray)",
        "very-light-grayish-blue": "var(--l-very-light-grayish-blue)",
        "light-grayish-blue": "var(--l-light-grayish-blue)",
        "dark-grayish-blue":"var(--l-dark-grayish-blue)",
        "very-dark-grayish-blue": "var(--l-very-dark-grayish-blue)"
      },
      d: {
        "very-dark-blue": "var(--d-very-dark-blue)",
        "very-dark-desaturated-blue":"var(--d-very-dark-desaturated-blue)",
        "light-grayish-blue":"var(--d-light-grayish-blue)",
        "light-grayish-blue-hover":"var(--d-light-grayish-blue-hover)",
        "dark-grayish-blue":"var(--d-dark-grayish-blue)",
        "very-dark-grayish-blue":"var(--d-very-dark-grayish-blue)",
        "very-very-dark-grayish-blue":"var(--d-very-very-dark-grayish-blue)",
      },
      white: "white"
    },
    extend: {
      backgroundImage: {
        'check-gradient': "var(--primary-check-background)",
        'img-light-mb': "url('./assets/bg-mobile-light.jpg')",
        'img-dark-mb': "url('./assets/bg-mobile-dark.jpg')",
        'img-light-desk': "url('./assets/bg-desktop-light.jpg')",
        'img-dark-desk': "url('./assets/bg-desktop-dark.jpg')",
        "moon-sign": "url('./assets/icon-moon.svg')",
        "sun-sign": "url('./assets/icon-sun.svg')",
        "icon-cross": "url('./assets/icon-cross.svg')",
        "icon-check": "url('./assets/icon-check.svg')"
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark", "hover"]
    },
  },
  plugins: [],
}
