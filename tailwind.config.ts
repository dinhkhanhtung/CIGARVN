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
        // Vintage Cigar Color Palette
        primary: {
          DEFAULT: '#4A3428', // Nâu sẫm vintage
          light: '#6B4A3A',
          dark: '#2C1E16',
        },
        accent: {
          DEFAULT: '#C9A961', // Vàng đồng cổ điển
          light: '#E8D4A8',
          dark: '#A68B4B',
        },
        earth: {
          DEFAULT: '#8B6914', // Nâu đất
          light: '#A67C52',
          dark: '#5C4510',
        },
        cream: '#FAF6F0', // Kem ấm
        tobacco: '#D4C5B5', // Màu thuốc lá
        'warm-gray': '#E8E2D9',
        // Keep old aliases for compatibility
        navy: {
          DEFAULT: '#4A3428',
          light: '#6B4A3A',
          dark: '#2C1E16',
        },
        gold: {
          DEFAULT: '#C9A961',
          light: '#E8D4A8',
          dark: '#A68B4B',
        },
        porcelain: '#FAF6F0',
      },
      fontFamily: {
        // Fonts with excellent Vietnamese support
        serif: ['Noto Serif', 'Georgia', 'serif'],
        sans: ['Be Vietnam Pro', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Noto Serif', 'serif'],
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
