/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smaller-than-830': {'min': '830px'}, // Custom breakpoint for screens smaller than 830px
      },
    },
  },
  plugins: [],
}
