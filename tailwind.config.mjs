/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* ═══════════════════════════════════════════════════════════════
           OPTION A: SOPHISTICATED DARK THEME
           Premium, modern dark theme inspired by Linear/Vercel
           ═══════════════════════════════════════════════════════════════ */

        // Backgrounds - 4-tier depth system
        background: {
          DEFAULT: '#09090b',
          secondary: '#0f0f11',
          tertiary: '#18181b',
          elevated: '#1f1f23',
        },

        // Text - 4-tier hierarchy
        foreground: {
          DEFAULT: '#fafafa',
          secondary: '#a1a1aa',
          muted: '#71717a',
          subtle: '#52525b',
        },

        // Accent - Vibrant orange system
        accent: {
          DEFAULT: '#f97316',
          light: '#fb923c',
          dark: '#ea580c',
          glow: 'rgba(249, 115, 22, 0.15)',
          muted: 'rgba(249, 115, 22, 0.1)',
        },

        // Borders
        border: {
          DEFAULT: '#27272a',
          hover: '#3f3f46',
          accent: 'rgba(249, 115, 22, 0.3)',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },

      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.65' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },

      animation: {
        'gradient': 'gradient 8s ease infinite',
        'shimmer': 'shimmer 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 10s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },

      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% center' },
          '50%': { backgroundPosition: '100% center' },
          '100%': { backgroundPosition: '0% center' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(249, 115, 22, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(249, 115, 22, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.8' },
          '33%': { transform: 'translateY(-20px) scale(1.05)', opacity: '1' },
          '66%': { transform: 'translateY(20px) scale(0.95)', opacity: '0.7' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-accent': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
      },

      boxShadow: {
        'accent-sm': '0 2px 8px rgba(249, 115, 22, 0.15)',
        'accent': '0 4px 20px rgba(249, 115, 22, 0.2)',
        'accent-lg': '0 8px 32px rgba(249, 115, 22, 0.3)',
        'glow': '0 0 40px rgba(249, 115, 22, 0.2)',
      },

      backdropBlur: {
        xs: '2px',
      },

      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },

      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
