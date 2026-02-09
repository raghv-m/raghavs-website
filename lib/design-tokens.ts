/**
 * Design Tokens - Centralized design system
 * Use these tokens throughout the application for consistency
 */

export const tokens = {
  colors: {
    primary: {
      bg: '#0a0a0f',
      bgSecondary: '#12121a',
      bgGlass: 'rgba(18, 18, 26, 0.7)',
    },
    accent: {
      cyan: '#00d9ff',
      green: '#00ff88',
      purple: '#b026ff',
      orange: '#ff6b35',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a0a0a0',
      tertiary: '#606060',
    },
    border: {
      glass: 'rgba(255, 255, 255, 0.1)',
    },
    glow: {
      cyan: 'rgba(0, 217, 255, 0.5)',
      green: 'rgba(0, 255, 136, 0.5)',
    },
    status: {
      success: '#00ff88',
      warning: '#ff6b35',
      error: '#ff0000',
      info: '#00d9ff',
    },
  },

  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '2rem',       // 32px
    xl: '4rem',       // 64px
    '2xl': '6rem',    // 96px
    '3xl': '8rem',    // 128px
  },

  typography: {
    fontFamily: {
      heading: 'var(--font-heading), Space Grotesk, sans-serif',
      body: 'var(--font-body), Inter, sans-serif',
      mono: 'var(--font-mono), JetBrains Mono, monospace',
    },
    fontSize: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      black: '900',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },

  borderRadius: {
    none: '0',
    sm: '0.25rem',    // 4px
    md: '0.5rem',     // 8px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    full: '9999px',
  },

  shadows: {
    glow: '0 0 20px rgba(0, 255, 247, 0.5)',
    glowGreen: '0 0 20px rgba(0, 255, 136, 0.5)',
    card: '0 4px 6px rgba(0, 0, 0, 0.3)',
    cardHover: '0 8px 12px rgba(0, 0, 0, 0.4)',
    none: 'none',
  },

  gradients: {
    hero: 'linear-gradient(135deg, #0a0a0f 0%, #1a0f2e 50%, #0a0a0f 100%)',
    accent: 'linear-gradient(90deg, #00d9ff 0%, #b026ff 100%)',
    accentReverse: 'linear-gradient(90deg, #b026ff 0%, #00d9ff 100%)',
    cyber: 'linear-gradient(135deg, #00d9ff 0%, #00ff88 50%, #b026ff 100%)',
  },

  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    laptop: '1024px',
    desktop: '1440px',
    wide: '1920px',
  },

  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },

  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modalBackdrop: 40,
    modal: 50,
    popover: 60,
    tooltip: 70,
    loading: 9999,
  },
} as const

export type DesignTokens = typeof tokens

