/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // importante para dark mode manual
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0B1220',
          800: '#111A2E',
          700: '#172B4D',
          600: '#2563EB', // PRINCIPAL
          500: '#3B82F6',
        },
        neutral: {
          50: '#F5F7FA',
          100: '#E9EDF5',
          200: '#D1D9E6',
          600: '#64748B',
          900: '#0F172A',
        },
        danger: '#EF4444'
      }
    }
  },
  plugins: [],
}