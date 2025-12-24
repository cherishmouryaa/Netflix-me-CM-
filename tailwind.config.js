/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        netflixBlack: "#141414",
        netflixRed: "#e50914",
      },
    },
  },
  plugins: [],
}
