import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#07090f',
        card: 'rgba(255,255,255,0.06)',
        neon: '#6cf4ff',
        pink: '#c257ff'
      },
      boxShadow: {
        neon: '0 0 30px rgba(108, 244, 255, 0.25)'
      },
      backgroundImage: {
        glow: 'radial-gradient(circle at top, rgba(108,244,255,0.2), transparent 45%), radial-gradient(circle at 80% 20%, rgba(194,87,255,0.2), transparent 40%)'
      }
    }
  },
  plugins: []
};

export default config;
