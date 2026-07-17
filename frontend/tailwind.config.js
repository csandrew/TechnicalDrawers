/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1F3B', // midnight blue
        'primary-dark': '#061428',
        white: '#FFFFFF',
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        golden: '#C9A84C',
        'golden-hover': '#B8973A',
        accent: '#F5C22A', // yellow accent
        'accent-hover': '#E0B21A',
        whatsapp: '#25D366',
        'whatsapp-hover': '#1DA851',
        facebook: '#1877F2',
        twitter: '#1DA1F2',
        youtube: '#FF0000',
        instagram: '#E1306C',
        tiktok: '#010101',
        'text-light': '#6B6B6B',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 4px 24px rgba(10, 30, 47, 0.1)',
        'custom-hover': '0 8px 40px rgba(10, 30, 47, 0.18)',
      },
      borderRadius: {
        custom: '12px',
        'custom-lg': '20px',
      },
    },
  },
  plugins: [],
}
