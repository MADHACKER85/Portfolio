/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#dcf3ff',
          200: '#b3e8ff',
          300: '#66d5ff',
          400: '#1cbeff',
          500: '#00a3ff',
          600: '#0082df',
          700: '#0066b4',
          800: '#005694',
          900: '#004879',
        },
        secondary: {
          50: '#fff1f3',
          100: '#ffe4e8',
          200: '#ffccd5',
          300: '#ffa3b5',
          400: '#ff6a89',
          500: '#ff2d5c',
          600: '#ed1247',
          700: '#c80a39',
          800: '#a50c34',
          900: '#8a0f32',
        },
        accent: {
          50: '#edfff7',
          100: '#d5fff0',
          200: '#aeffe2',
          300: '#70ffcd',
          400: '#2bfdb1',
          500: '#00e593',
          600: '#00bf7a',
          700: '#009664',
          800: '#067553',
          900: '#076045',
        }
      },
    },
  },
  plugins: [],
};