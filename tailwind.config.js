/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        julius: ['Julius Sans One', 'sans-serif'],
      },
      colors: {
        'primary-bg': '#3f3c7a',
        'header-bg': '#010028',
        'primary-text': '#000000',
        'secondary-text': '#ffffff',
        'hover-text': '#9575cd',
        'button-bg': '#6a62bc',
        'button-hover-bg': '#5c6bc0',
        'section-bg': '#a1a4d7',
        'feature-overlay': 'rgba(0, 0, 0, 0.7)',
        'about-bg': '#f7f7f7',
        'footer-bg': '#010028',
        'footer-text': '#fff',
      },
    },
  },
  plugins: [],
}

