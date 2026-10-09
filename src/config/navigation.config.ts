import type { NavItem } from '../types';
/** `id` must match a section id in sections.config.ts. Disabled/empty sections are hidden automatically. */
export const navigation: NavItem[] = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Research', id: 'research' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];
