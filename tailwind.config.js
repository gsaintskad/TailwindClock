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
    },
  },
  plugins: [],
};
