/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // 👈 Important for CRA
  ],
  theme: {
    extend: {
      colors: {
        "agri-green": {
          100: "#e6f7e6",
          500: "#28a745",
          700: "#1e7e34",
        },
      },
    },
  },
  plugins: [],
}


