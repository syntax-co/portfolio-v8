/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkSlate:'#424242',
        darkerSlate:'#2a2a2a',
        darkestSlate:'#1a1a1a',
        glassySlate:'#30303088',
        lightBlue:'#ABDDFF',
        salmon:'#FF9B9B',
        offWhite:'#FFF6F6'
      },
      screens:{
        'sm':'300px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
};
