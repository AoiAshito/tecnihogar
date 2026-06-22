/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          hover: '#C5A059',
          light: '#E8D080',
          dark: '#B8941E',
        },
        ebony: {
          DEFAULT: '#1A1A1A',
          deep: '#111111',
        },
        neutral: {
          off: '#F7F7F9',
        },
        text: {
          primary: '#222222',
          secondary: '#555555',
          'dark-primary': '#FFFFFF',
          'dark-secondary': '#CCCCCC',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 25px rgba(0, 0, 0, 0.10)',
        gold: '0 4px 12px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 8px 24px rgba(212, 175, 55, 0.4)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease forwards',
        'fade-in-right': 'fadeInRight 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};
