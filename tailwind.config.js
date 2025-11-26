// tailwind.config.js
module.exports = {
  content: [
    // Add your file paths here where Tailwind classes are used, e.g.:
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      animation: {
        // Continuous, slow movement (adjust 60s for speed)
        'rotate-left': 'rotate-left 10s linear infinite',
        'rotate-right': 'rotate-right 10s linear infinite',
        // Background pulse animation
        'pulse-slow': 'pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        // Loop Left: Moves content to -50% (exactly one full set of cards)
        'rotate-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, 
        },
        
        // Loop Right: Starts at -50% and moves back to 0%
        'rotate-right': {
          '0%': { transform: 'translateX(-50%)' }, 
          '100%': { transform: 'translateX(0%)' },  
        },
        
        // Keyframes for the background glow
        'pulse-slow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.5' },
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'), // Don't forget to install and include this for hidden scrollbars
  ],
};