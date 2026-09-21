/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          850: '#0d542b',
          900: '#053e1f',
          950: '#022412',
          980: '#01170b',
        },
        gold: {
          50: '#fefdf8',
          100: '#fdf9e8',
          200: '#faefc5',
          300: '#f5e098',
          400: '#e9c857',
          500: '#d4af37', // classic islamic gold
          600: '#b89025',
          700: '#946f1c',
          800: '#7a5a1c',
          900: '#674a1c',
        },
        sand: {
          50: '#fdfcf9',
          100: '#faf7f0',
          200: '#f4ede0',
          300: '#ebdcc7',
          400: '#dcbe9f',
          500: '#cf9e79',
          900: '#231d17',
        },
        islamic: {
          dark: '#031c10',
          primary: '#064e3b',
          light: '#0a6c52',
          surface: '#f9faf7',
          gold: '#cba135',
          goldLight: '#f3e6c4',
          accent: '#10b981',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Amiri"', '"Cinzel"', 'Georgia', 'serif'],
        arabic: ['"Noto Sans Arabic"', '"Amiri"', '"Scheherazade New"', 'sans-serif'],
        urdu: ['"Noto Nastaliq Urdu"', '"Amiri"', 'serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-pattern': "radial-gradient(circle at center, rgba(16, 185, 129, 0.05) 0%, transparent 70%)",
      },
      boxShadow: {
        'emerald-glow': '0 0 35px -5px rgba(6, 78, 59, 0.3)',
        'gold-glow': '0 0 25px -3px rgba(212, 175, 55, 0.25)',
        'soft-card': '0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 20px 35px -10px rgba(5, 62, 31, 0.12), 0 8px 16px -4px rgba(5, 62, 31, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
