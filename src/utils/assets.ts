/** Prefixes public/ paths with the Vite base so assets work on GitHub Pages subpaths. */
export const asset = (p: string) => (/^(https?:|mailto:|data:)/.test(p) ? p : import.meta.env.BASE_URL + p.replace(/^\//, ''));
