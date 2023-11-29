/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '4ch' },
          '35%, 40%': { width: '8ch' },
          '45%, 50%': { width: '13ch' },
          '55%, 60%': { width: '13ch' },
          '65%, 70%': { width: '13ch' },
          '75%, 80%': { width: '13ch' },
          '85%, 90%':{ width: '13ch' },
          '95%': { width: '13ch' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .3s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
    },
  },
  plugins: [require("tailwindcss-animate"),require('@tailwindcss/aspect-ratio'),],
}