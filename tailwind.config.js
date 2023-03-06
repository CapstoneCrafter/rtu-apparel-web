/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'cc': '50rem',
        'c': '40rem',
      }
    },
  },
  plugins: [
     // ...
     require('@tailwindcss/aspect-ratio'),
  ],
}
