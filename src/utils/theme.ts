import { themeConfig } from '../config/theme.config';

const rgb = (hex: string) => {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
};

/** Turns theme.config.ts into CSS variables + loads fonts. Called once from main.tsx. */
export function applyTheme() {
  const root = document.documentElement;
  Object.entries(themeConfig.colors).forEach(([k, v]) => root.style.setProperty(`--c-${k}`, rgb(v)));
  const t = themeConfig.typography;
  root.style.setProperty('--font-heading', `"${t.headingFont}", ui-sans-serif, system-ui, sans-serif`);
  root.style.setProperty('--font-body', `"${t.bodyFont}", ui-sans-serif, system-ui, sans-serif`);
  root.style.setProperty('--font-mono', `"${t.monoFont}", ui-monospace, SFMono-Regular, Menlo, monospace`);
  root.style.setProperty('--radius-cards', themeConfig.radius.cards);
  root.style.setProperty('--heading-weight', String(t.headingWeight));
  root.dataset.glow = String(themeConfig.effects.glow);
  root.dataset.glass = String(themeConfig.effects.glassmorphism);
  root.dataset.grid = String(themeConfig.effects.grid);
  root.dataset.motion = String(themeConfig.effects.animations);
  if (t.googleFontsUrl) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = t.googleFontsUrl;
    document.head.appendChild(link);
  }
}
