/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite : ["Playwrite AU SA", "sans-serif"],
        agu : ["Agu Display", "sans-serif"]
      },
      colors: {
        purple: {
          300: "#e0e7fe",
          500: "#3e38a7",
          600: "#5046e4"
        }
      }
    },
  },
  plugins: [],
}

