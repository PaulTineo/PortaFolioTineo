/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Schibsted: ['Schibsted Grotesk'],
      Shadows:['Shadows Into Light'],
    },
    extend: {
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
      }
    },
  },
  plugins: [],
}

