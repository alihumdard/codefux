// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // --- CUSTOM ROTATION FOR IMAGE ---
        // 'spin-360' keyframes ko use karke 10s ki speed par rotate karega
        "rotate-slow-360": "spin-360 10s linear infinite",
        "zoom-animate": "zoom-in-out 1s ease-in-out forwards", 
        
        // Existing animations...
        "rotate-left": "rotate-left 30s linear infinite",
        "rotate-right": "rotate-right 30s linear infinite",
        "pulse-slow": "pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        // --- KEYFRAMES FOR 360 DEGREE ROTATION (Needed for 'rotate-slow-360') ---
        "spin-360": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        
        // Existing keyframes...
        "zoom-in-out": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        "rotate-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "rotate-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};