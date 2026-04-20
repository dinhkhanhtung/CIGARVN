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
        // JJ Fox Brand Colors (trích xuất từ file HTML gốc)
        brand: {
          red: '#8B0000',      // Đỏ đô thương hiệu (burgundy)
          gold: '#d19000',     // Vàng kim chính (#d19000 từ CSS gốc)
          goldLight: '#d4af37',
          goldDark: '#b8860b',
        },
        navy: {
          DEFAULT: '#1a1a2e', // Deep navy blue cho header
          light: '#16213e',
          dark: '#0f0f1a',
        },
        gold: {
          DEFAULT: '#d19000', // Gold chính thức của JJ Fox
          light: '#d4af37',
          dark: '#b8860b',
        },
        // Grayscale chuẩn
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Utility colors
        'cream': '#faf9f5',
        'porcelain': '#f5f5f0',
      },
      fontFamily: {
        // JJ Fox Typography: Serif cho tiêu đề, Sans-serif cho nội dung
        serif: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        // JJ Fox spacing scale
        'xxs': '0.25rem',  // 4px
        'xs': '0.5rem',    // 8px
        'sm': '0.75rem',   // 12px
        'md': '1rem',      // 16px
        'lg': '1.5rem',    // 24px
        'xl': '2rem',      // 32px
        '2xl': '3rem',     // 48px
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
