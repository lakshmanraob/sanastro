/**
 * Sanastro Tailwind CSS Configuration
 *
 * Copy this configuration to your project's tailwind.config.js
 * or extend from it to use the Sanastro design system with Tailwind CSS.
 *
 * Usage:
 * 1. Copy to project root as tailwind.config.js
 * 2. Or import and spread: { ...sanastroConfig, ...yourConfig }
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // ========================================
      // COLORS
      // ========================================
      colors: {
        // Primary palette
        cream: '#FAF7F2',
        'warm-sand': '#F0E6D8',
        terracotta: {
          DEFAULT: '#C4A484',
          hover: '#B89474',
        },
        'dusty-rose': '#D4A5A5',
        bronze: '#8B7355',

        // Neutrals
        espresso: '#3D2E2E',
        cocoa: '#5C4A4A',
        taupe: '#9A8B7A',
        linen: '#EDE4D8',
        pearl: '#FEFCF9',

        // Accents
        'golden-hour': '#D4A574',
        blush: '#E8C4B8',
        sage: '#A8B5A0',
        'celestial-blue': '#8FA4B8',

        // Semantic aliases
        background: {
          DEFAULT: '#FAF7F2',
          alt: '#F0E6D8',
        },
        surface: '#FEFCF9',
        border: {
          DEFAULT: '#EDE4D8',
          strong: '#D4C8B8',
        },
        text: {
          primary: '#3D2E2E',
          secondary: '#5C4A4A',
          muted: '#9A8B7A',
        },
        accent: {
          DEFAULT: '#C4A484',
          hover: '#B89474',
        },
        success: '#A8B5A0',
        error: '#C48484',
      },

      // ========================================
      // TYPOGRAPHY
      // ========================================
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
        body: ['"Nunito Sans"', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['Italiana', '"Cormorant Garamond"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', 'monospace'],
      },

      fontSize: {
        'display': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '4xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '3xl': ['2.25rem', { lineHeight: '1.25' }],
        '2xl': ['1.75rem', { lineHeight: '1.3' }],
        'xl': ['1.375rem', { lineHeight: '1.35', letterSpacing: '0.01em' }],
        'lg': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'xs': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },

      // ========================================
      // SPACING
      // ========================================
      spacing: {
        '18': '4.5rem',  // 72px (nav height)
        '22': '5.5rem',  // 88px
        '30': '7.5rem',  // 120px
        '34': '8.5rem',  // 136px
      },

      // ========================================
      // BORDER RADIUS
      // ========================================
      borderRadius: {
        'sm': '0.25rem',   // 4px
        'md': '0.5rem',    // 8px
        'lg': '1rem',      // 16px
        'xl': '1.5rem',    // 24px
        '2xl': '2rem',     // 32px
      },

      // ========================================
      // BOX SHADOW
      // ========================================
      boxShadow: {
        'sm': '0 1px 2px rgba(61, 46, 46, 0.04)',
        'md': '0 4px 12px rgba(61, 46, 46, 0.08)',
        'lg': '0 8px 24px rgba(61, 46, 46, 0.12)',
        'xl': '0 16px 48px rgba(61, 46, 46, 0.16)',
        'glow': '0 4px 24px rgba(212, 165, 116, 0.2)',
        'inner': 'inset 0 2px 4px rgba(61, 46, 46, 0.06)',
        'input-focus': '0 0 0 3px rgba(196, 164, 132, 0.2)',
      },

      // ========================================
      // BACKGROUND IMAGE / GRADIENTS
      // ========================================
      backgroundImage: {
        'gradient-hero': 'linear-gradient(180deg, #FAF7F2 0%, #F0E6D8 50%, #E8DFD0 100%)',
        'gradient-card': 'linear-gradient(135deg, #FEFCF9 0%, #F5EFE6 100%)',
        'gradient-accent': 'linear-gradient(90deg, #D4A574 0%, #C4A484 100%)',
        'gradient-sunset': 'linear-gradient(180deg, #F0E6D8 0%, #E8C4B8 50%, #D4A5A5 100%)',
        'gradient-mystical': 'radial-gradient(ellipse at top, #FAF7F2 0%, #F0E6D8 70%, #E8DFD0 100%)',
      },

      // ========================================
      // ANIMATION
      // ========================================
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
        'slower': '600ms',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'gentle': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },

      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },

      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'fade-up': 'fade-up 0.5s ease-out',
        'fade-down': 'fade-down 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.4s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },

      // ========================================
      // Z-INDEX
      // ========================================
      zIndex: {
        'below': '-1',
        'raised': '10',
        'dropdown': '100',
        'sticky': '200',
        'overlay': '300',
        'modal': '400',
        'popover': '500',
        'toast': '600',
        'max': '9999',
      },

      // ========================================
      // CONTAINER
      // ========================================
      maxWidth: {
        'prose': '65ch',
        'container-sm': '640px',
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1200px',
        'container-2xl': '1400px',
      },
    },
  },

  plugins: [
    // Custom plugin for typography utilities
    function({ addUtilities }) {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.text-pretty': {
          'text-wrap': 'pretty',
        },
      })
    },
  ],
}
