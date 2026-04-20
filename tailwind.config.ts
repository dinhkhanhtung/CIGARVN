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
        // JJ Fox Exact Colors
        navy: {
          DEFAULT: '#1a1a2e', // Deep navy blue
          light: '#16213e',
          dark: '#0f0f1a',
        },
        gold: {
          DEFAULT: '#c9a227', // Gold accent
          light: '#d4af37',
          dark: '#b8860b',
        },
        white: {
          DEFAULT: '#ffffff',
          off: '#f8f8f8',
        },
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
        // Vintage cigar colors
        'cream': '#faf9f5',
        'tobacco': '#d4c4b0',
        'brown': '#8b7355',
      },
      fontFamily: {
        // JJ Fox Typography
        serif: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
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
