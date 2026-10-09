const c = (n) => `rgb(var(--c-${n}) / <alpha-value>)`;
/** All colours come from CSS variables generated from src/config/theme.config.ts */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: c('background'), surface: c('surface'), elevated: c('surfaceElevated'),
        primary: c('primary'), secondary: c('secondary'), accent: c('accent'),
        ink: c('textPrimary'), soft: c('textSecondary'), muted: c('textMuted'), line: c('border'),
      },
      fontFamily: {
        heading: ['var(--font-heading)'], body: ['var(--font-body)'], mono: ['var(--font-mono)'],
      },
      borderRadius: { card: 'var(--radius-cards)' },
    },
  },
  plugins: [],
};
