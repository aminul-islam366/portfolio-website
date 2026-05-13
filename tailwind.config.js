/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#A855F7',
        secondary: '#EC4899',
        'background-light': '#F3F4F6',
        'background-dark': '#0F0518',
        'surface-dark': '#1A0B2E',
        'card-dark': '#211c27',
        'surface-border': '#302839',
        'accent-pink': '#EC4899',
        'accent-purple': '#9333EA',
      },
      fontFamily: {
        title: ['Poppins', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        xl: '1rem',
        '2xl': '1.5rem',
        full: '9999px',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, #301c4d 1px, transparent 1px), linear-gradient(to bottom, #301c4d 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
}
