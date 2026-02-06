/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Premium Cyber palette - dark theme primary */
        cyber: {
          'bg-primary': '#0a0a0f',
          'bg-secondary': '#12121a',
          'bg-glass': 'rgba(18, 18, 26, 0.7)',
          'accent-cyan': '#00d9ff',
          'accent-green': '#00ff88',
          'accent-purple': '#b026ff',
          'accent-orange': '#ff6b35',
          'text-primary': '#ffffff',
          'text-secondary': '#a0a0a0',
          'text-tertiary': '#606060',
          'border-glass': 'rgba(255, 255, 255, 0.1)',
          'glow-cyan': 'rgba(0, 217, 255, 0.5)',
          'glow-green': 'rgba(0, 255, 136, 0.5)',
        },
        primary: {
          50: '#e6ffff',
          100: '#b3f5ff',
          200: '#80eeff',
          300: '#4de6ff',
          400: '#00d9ff',
          500: '#00b8d9',
          600: '#0097b3',
          700: '#00768c',
          800: '#005566',
          900: '#003440',
        },
        secondary: {
          50: '#f5e6ff',
          100: '#e6b3ff',
          200: '#d680ff',
          300: '#c74dff',
          400: '#b026ff',
          500: '#8f1fcc',
          600: '#6e1899',
          700: '#4d1166',
          800: '#2c0a33',
          900: '#0b0300',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0a0a0f',
        }
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0a0a0f 0%, #1a0f2e 50%, #0a0a0f 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'gradient-accent': 'linear-gradient(90deg, #00d9ff 0%, #b026ff 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'glass-hover': '0 12px 48px rgba(0, 217, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'glow-cyan': '0 0 20px rgba(0, 217, 255, 0.5)',
        'glow-green': '0 0 20px rgba(0, 255, 136, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'cursor-blink': 'cursorBlink 500ms step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 217, 255, 0.8)' },
        },
        cursorBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        xs: '2px',
        'glass': '20px',
      },
    },
  },
  plugins: [],
};
