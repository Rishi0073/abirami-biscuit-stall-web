/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF7',
          100: '#FAF6EE',
          200: '#F4ECE0',
          300: '#EAE0CE',
        },
        forest: {
          800: '#172B21',
          900: '#112119',
          950: '#0B1611',
        },
        saffron: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
        },
        charcoal: {
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(17, 33, 25, 0.05), 0 2px 6px -2px rgba(17, 33, 25, 0.03)',
        'elevated': '0 12px 32px -4px rgba(17, 33, 25, 0.08), 0 4px 12px -2px rgba(17, 33, 25, 0.04)',
      }
    },
  },
  plugins: [],
}
