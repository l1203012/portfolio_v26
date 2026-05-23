/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // CS2-inspired palette. Semantic names kept so existing classes still work.
        bone: '#0E1115',      // base background (deep dark, very slight blue tint)
        ink: '#E8E0CE',       // foreground text (warm bone/cream)
        muted: '#8A8175',     // mid warm gray
        panel: '#161A20',     // raised surface
        line: '#262B33',      // hairlines / borders
        accent: {
          DEFAULT: '#DE9B35', // CS gold/orange
          soft: '#F0B453',
          deep: '#A6701F',
          glow: 'rgba(222, 155, 53, 0.18)',
        },
      },
      fontFamily: {
        display: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['"SF Pro Text"', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"SF Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slide-up': 'slideUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'scroll-dot': 'scrollDot 2.2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollDot: {
          '0%':   { transform: 'translateY(-100%)', opacity: '0' },
          '15%':  { opacity: '1' },
          '85%':  { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
