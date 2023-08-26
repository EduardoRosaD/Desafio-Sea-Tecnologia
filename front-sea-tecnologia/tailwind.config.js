/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          
      },
      borderRadius: {
        'custom': '20px', 
      },
      borderWidth: {
        'custom': '5px',
      },
      colors: {
        primaryBlue: '#4FA1C1',
        primaryBlack: '#707070',

    },
    boxShadow:{
      custom: '0px 4px 0px 0px rgba(0, 0, 0, 0.25);',
      custom1:'0px 2px 23px 0px rgba(0, 0, 0, 0.05)',
      custom2:'0px 4px 4px 0px rgba(0, 0, 0, 0.25);'
    },
    fontFamily: {
      font1: ['Ubuntu', 'sans-serif'],
    },
  }
  },
  plugins: [],
}
