/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        "scroll-infinite": "scrollInfinite 30s linear infinite",
      },
      keyframes: {
        scrollInfinite: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      backgroundImage: {
        'dobbespet-school': 'url("/DobbespetPublicSchool.png")',
      },
      fontFamily: {
        custom: ['Merriweather', 'serif'],
        'abril-fatface': ['Abril Fatface', 'cursive'],
        'cinzel': ['Cinzel', 'serif'],
        'dmSerif': ['"DM Serif Text"', 'serif'],
        'newsreader': ['"Newsreader"', 'serif'],
        'helvetica': ["Helvetica", "Arial", "sans-serif"], 

      },
      colors:{
        'background':'#0047A3',
      },
      boxShadow: {
        'custom': '0px 8px 20px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}