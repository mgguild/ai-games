import { transform } from "next/dist/build/swc";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@material-tailwind/react/**/*.js',
  ],
  theme: {
    extend: {
      animation:{
        blob: "blob 7s infinite"
      },
      keyframes:{
        blob:{
          "0%" : {
            transform: "translate(0px, 0px) scale(1)", 
          },
          "33%" : {
            transform: "translate(30px, -50px) scale(1.1)", 
          },
          "66%" : {
            transform: "translate(-20px, 20px) scale(0.9)", 
          },
          "100%" : {
            transform: "translate(0px, 0px) scale(1)", 
          },

        }
      },

      colors: {
        lightblue: {
          DEFAULT: '#DFF3FC',
        },
        brand: {
          DEFAULT: '#232323',
        },
      },

      screens: {
        'lg': '1024px', 
        'ipadPro': '1366px', 
        'desktop': '1920px',
        'sm-custom': '768px', 
        'ipadPro2': '1024px', 
        'ipad-pro': '1024px', 
        'ipad-mini': { 'min': '1024px', 'max': '1336px' }, 
      },

      fontSize: {
        'xxs': '0.55rem',
        'xxxl': '2.5rem',
      },

      width: {
        'custom-size': '32rem',   
        'custom-50': '50%',      
        'custom-70': '68%',      
      },

      dropShadow: {
        'white': '0 4px 6px rgba(255, 255, 255, 0.5)',
        'custom-black': '0 5px 6px rgba(0, 0, 0, 0.5)',
      }
     
    },
  },
  plugins: [],
};