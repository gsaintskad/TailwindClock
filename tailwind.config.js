/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // rotate:(()=>{
      //   const rotations={};
      //   for(let i=0;i<=360;i++){
      //     rotations[i]=`${i}deg`;
      //   }
      //   return rotations;
      // })()
      left:{
        '0.5':'0.2rem'
      },
      rotate: {
        'custom-angle': 'var(--angle,0deg)', // Define the variable-based rotation here
      },
      animation: {
        "spin-variable":
          "spin-variable var(--tw-rotate-period, 60s) linear infinite",
      },
      keyframes: {
        "spin-variable": {
          "0%": { transform: "rotate(var(--tw-rotate-start, 0deg))" },
          "100%": {
            transform: "rotate(calc(360deg + var(--tw-rotate-start, 0deg)))",
          },
        },
      },
      height:{
        "4/5":"80%",
        "5/6":"83.3333%",
        "7/8":"87.5%"
      },
      width:{
        "1/20":"5%",
        "1/30":"3.333%",
        "1/40":"2.5%",
        "1/100":"1%"
      }
    },
  },
  plugins: [],
};
