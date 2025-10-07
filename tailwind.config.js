/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "fall-slide": "fall-slide 4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards"

      },
      keyframes: {
        "fall-slide": {
          "0%": { transform: "translateY(-100px) translateX(0px)" }, // starting high (1st floor)
          "10%": { transform: "translateY(200px) translateX(50px)" },  // first hit near ground
          "20%": { transform: "translateY(50px) translateX(100px)" },  // first rebound up
          "30%": { transform: "translateY(130px) translateX(120px)" }, // second fall
          "40%": { transform: "translateY(40px) translateX(150px)" },  // second bounce
          "50%": { transform: "translateY(80px) translateX(170px)" }, // third fall
          "60%": { transform: "translateY(20px) translateX(190px)" },  // third bounce
          "70%": { transform: "translateY(0px) translateX(200px)" },  // fourth fall
          "80%": { transform: "translateY(0px) translateX(210px)" },   // final bounce
          "100%": { transform: "translateY(0px) translateX(220px)" },  // settled at lower end
        },
      },
    },
  },
  plugins: [],
};
