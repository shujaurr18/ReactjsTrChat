module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C84E31',
        secondary: '#1F1F1F',
        'text-primary': '#1F1F1F',
        'text-secondary': '#6C6C6C',
        'background': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};