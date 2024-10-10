/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate:(()=>{
        const rotations={};
        for(let i=0;i<=360;i++){
          rotations[i]=`${i}deg`;
        }
        return rotations;
      })()
    },
  },
  plugins: [],
}

