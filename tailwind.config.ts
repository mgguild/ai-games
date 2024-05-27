import { transform } from "next/dist/build/swc";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
     
    },
  },
  plugins: [],
};