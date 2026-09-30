import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#4b6ef5',
          600: '#3b5bff',
          700: '#3730a3',
          800: '#312e81',
          900: '#1e1b4b',
        },
        indigoPurple: '#7b61ff',
        ink: '#1a1a2e',
        surface: '#f5f7ff',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #4b6ef5 0%, #5b6ef5 40%, #7b61ff 100%)',
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(59, 91, 255, 0.25)',
        card: '0 8px 30px -10px rgba(26, 26, 46, 0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
