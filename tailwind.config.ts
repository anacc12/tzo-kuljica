import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0D160A',
          900: '#11152E',  
          800: '#11152E',  
          700: '#243C14',
          600: '#2F4D1A',
          500: '#3D6622',
        },
        olive: {
          700: '#6B5A1F',
          600: '#8B7427',
          500: '#A68B2F',
          400: '#C4A83D',
          300: '#D4BC5C',
          200: '#E8D68A',
          100: '#F5EDCA',
        },
        sand: {
          50:  '#FDFBF7',  // Nearly white warm
          100: '#EBECF3',  
          200: '#EBECF3',  
          300: '#EBECF3',
          400: '#C8B99A',
        },
        cream: '#EBECF3',
      },
      fontFamily: {
        display: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      fontSize: {
        '7xl': ['4.5rem',  { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '8xl': ['6rem',    { lineHeight: '1',    letterSpacing: '-0.025em' }],
        '9xl': ['8rem',    { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        '10xl': ['10rem',  { lineHeight: '0.9',  letterSpacing: '-0.03em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      transitionTimingFunction: {
        'expo-out':  'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in-out': 'cubic-bezier(0.45, 0, 0.55, 1)',
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      animation: {
        'fade-up':   'fadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in':   'fadeIn 0.65s ease forwards',
        'slide-up':  'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight':   '-0.02em',
        'display': '-0.025em',
      },
    },
  },
  plugins: [],
}

export default config
