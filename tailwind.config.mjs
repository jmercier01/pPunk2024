/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        code: ['Source Code Pro', 'monospace'], 
        syne: ['Syne', 'serif'], 
      },
      colors: {
        nuit : '#1a1a1a',
        accent : '#D62828', // [#f93206]    
        jour : '#fffaf0' // [#fffaf0]
      },
      width: {
        'calc-100-minus-2rem': 'calc(100% - 2rem)',
      },
    },
  },
  plugins: [
  
  ],
}
