import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          1000: 'var(--neutral-1000)',
          100: 'var(--neutral-100)'
        },
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'system-ui', 'Apple SD Gothic Neo', 'Segoe UI', 'Roboto', 'Noto Sans', 'Helvetica Neue', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [animate],
};

export default config;


