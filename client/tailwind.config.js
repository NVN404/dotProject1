/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dobbespet-school': 'url("/DobbespetPublicSchool.png")',
      },
      fontFamily: {
        custom: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}