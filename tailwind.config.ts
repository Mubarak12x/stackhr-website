import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      boxShadow: {
        md: '0 4px 6px -1px rgba(14, 23, 38, 0.03)',
      },
      borderRadius: {
        card: '16px',
        pill: '9999px',
      },
      transitionTimingFunction: {
        primary: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      backgroundImage: {
        'light-mesh': 'radial-gradient(circle at top left, rgba(37,99,235,0.05) 0%, transparent 42%), radial-gradient(circle at bottom right, rgba(79,70,229,0.05) 0%, transparent 38%), radial-gradient(circle at center, rgba(37,99,235,0.03) 0%, transparent 30%)',
        'dark-halo': 'radial-gradient(circle at top left, rgba(37,99,235,0.16) 0%, transparent 24%), radial-gradient(circle at top right, rgba(99,102,241,0.12) 0%, transparent 26%), radial-gradient(circle at bottom, rgba(30,41,59,0.24) 0%, transparent 36%)',
        'dot-grid': 'radial-gradient(circle, rgba(148,163,184,0.25) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-20': '20px 20px',
      },
      colors: {
        obsidian: '#0E1726',
        'electric-blue': '#0066FF',
        'slate-blue': '#4F46E5',
        success: '#10B981',
        canvas: '#FAFAFA',
        'canvas-dark': '#0F0F0F',
      },
      animation: {
        blob: 'blob 7s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 102, 255, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 102, 255, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
