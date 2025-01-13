/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      phonesm: { max: '390px' },
      phone: { max: '639px' },
      sm: '640px',
      md: '768px',
      pad: { max: '810px' },
      xmd: '811px',
      lg: '1024px',
    },
    extend: {},
  },
  plugins: [],
}

