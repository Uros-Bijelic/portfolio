import type { Config } from 'tailwindcss';

const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

// ----------------------------------------------------------------

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
const addVariablesForColors = ({ addBase, theme }: any) => {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ':root': newVars,
  });
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xxl: '1440px',
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'background-radial':
          'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 77, 0) 0%, rgba(3, 3, 28, 0.6) 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        figtree: ['var(--font-figtree)'],
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: '0 0',
          },
          to: {
            backgroundPosition: '-200% 0',
          },
        },
      },
      colors: {
        white: {
          100: '#FFFFFF',
          300: '#DDE4FF',
          800: '#CBCBFF',
          900: '#000319',
        },
        blue: {
          500: '#5EAFFF',
        },
        black: {
          100: '#08080F',
          500: '#1D1F2580',
          600: '#1D1F25',
          800: '#101014',
        },
        purple: {
          500: '#CBACF9',
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;
