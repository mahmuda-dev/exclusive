/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
       maxWidth: {
        container: '1170px',
      },
      colors: {
        white: '#FAFAFA',
        black: '#000000',
        secondary: "#F5F5F5"
      },
      fontFamily: {
      poppins: ['Poppins', 'sans-serif',],
      inter: ['Inter', 'sans-serif',],
      
    }
    },
  },
  plugins: [],
}

