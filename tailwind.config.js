/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
        pixel: ['"VT323"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#E85D04',
          bg: '#050505',
          card: '#111111',
          teal: '#0F766E',
          darkTeal: '#042F2E',
          border: '#222222',
          textMuted: '#888888'
        }
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-med': 'float 5s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--tw-rotate, 0deg)) skewX(var(--tw-skew-x, 0deg))' },
          '50%': { transform: 'translateY(-20px) rotate(var(--tw-rotate, 0deg)) skewX(var(--tw-skew-x, 0deg))' },
        }
      }
    },
  },
  plugins: [],
}
