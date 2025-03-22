/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A7CFF',
        secondary: '#FFC107',
        success: '#51D88A',
        danger: '#FF5252',
        background: '#F8F9FA',
        'kid-blue': '#71c5e8',
        'kid-pink': '#ffb6c1',
        'kid-yellow': '#ffe96b',
        'kid-green': '#a8e6cf',
        'kid-purple': '#d3b3ff',
      },
      fontFamily: {
        'kid': ['Comic Sans MS', 'Comic Sans', 'cursive'],
      },
    },
  },
  plugins: [],
} 