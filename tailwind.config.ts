import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#28337e',
          light: '#3a4791',
          dark: '#1e275f',
        },
        gold: {
          DEFAULT: '#d4a853',
          light: '#e8c87a',
          dark: '#b8923d',
        },
        porcelain: '#f8f7f5',
        'warm-gray': '#e8e6e3',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Crimson Text', 'Georgia', 'serif'],
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '8px',
        'DEFAULT': '8px',
        'md': '8px',
        'lg': '8px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
