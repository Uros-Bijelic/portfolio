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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        figtree: ['var(--font-figtree)'],
      },
      colors: {
        white: {
          100: '#FFFFFF',
          300: '#DDE4FF',
          800: '#CBCBFF',
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
