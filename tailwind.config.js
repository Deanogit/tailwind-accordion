/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'bright-pink': '#ad28eb',
        'light-pink': 'hsl(275, 100%, 97%)',
        'gray-purple': 'hsl(292, 16%, 49%)',
        'dark-purple': 'hsl(292, 42%, 14%)',
      },
    },
  },
  plugins: [],
};
