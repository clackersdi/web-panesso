import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'panesso-black': '#000000',
        'panesso-white': '#FFFFFF',
        'panesso-dark-gray': '#404040',
        'panesso-medium-gray': '#808080',
        'panesso-light-gray': '#C0C0C0',
      },
      fontFamily: {
        alexandria: ['var(--font-alexandria)'],
        nunito: ['var(--font-nunito)'],
      },
    },
  },
  plugins: [],
};

export default config;
