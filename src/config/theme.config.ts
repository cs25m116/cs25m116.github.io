/** One file controls the entire visual identity. Colours become CSS variables at startup. */
export const themeConfig = {
  mode: 'dark' as const,
  // Slate + blue: a conventional engineering / enterprise palette.
  colors: {
    background: '#0A0D12',
    surface: '#0F141B',
    surfaceElevated: '#151B24',
    primary: '#4C8DF6',
    secondary: '#2FB5A8',
    accent: '#94A3B8',
    textPrimary: '#E6EDF3',
    textSecondary: '#9AA7B4',
    textMuted: '#6B7785',
    border: '#222B36',
  },
  // Typewriter look: Special Elite for headings, Courier Prime for text.
  typography: {
    headingFont: 'Special Elite',
    bodyFont: 'Courier Prime',
    monoFont: 'Courier Prime',
    headingWeight: 400, // Special Elite has a single weight; use 700 with bolder fonts
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Special+Elite&display=swap',
  },
  effects: { glow: true, particles: true, grid: true, glassmorphism: true, animations: true },
  radius: { cards: '6px' },
};
