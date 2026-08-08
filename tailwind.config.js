/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F47920',
          dark: '#D9631A',
        },
        secondary: {
          DEFAULT: '#3D3D3D',
          dark: '#2A2A2A',
        },
        accent: '#FAF7F3',
      },
    },
  },
  plugins: [],
};