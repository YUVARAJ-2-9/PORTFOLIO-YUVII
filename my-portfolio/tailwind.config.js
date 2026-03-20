/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        primary: '#a855f7',
        secondary: '#ec4899',
        dark: '#080810',
        card: '#0f0f1a',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        glitch: {
          '0%,100%': { textShadow: 'none' },
          '25%': { textShadow: '2px 0 #a855f7, -2px 0 #ec4899' },
          '75%': { textShadow: '-2px 0 #a855f7, 2px 0 #ec4899' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      },
      animation: {
        blink: 'blink 1s infinite',
        glitch: 'glitch 4s infinite',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}