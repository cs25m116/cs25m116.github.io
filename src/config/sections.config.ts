/** Set any section to false and it disappears from the page and the navigation. */
export const sections = {
  hero: true,
  about: true,
  education: true,
  research: false,
  skills: true,
  experience: true,
  projects: true,
  publications: true,
  achievements: true,
  certifications: true,
  notes: true,
  talks: true,
  code: true,
  contact: true,
};
export type SectionId = keyof typeof sections;

/** Page order. Sections with no data are hidden automatically. */
export const sectionOrder: SectionId[] = [
  'hero', 'about', 'education', 'research', 'projects', 'publications', 'experience',
  'achievements', 'skills', 'certifications', 'notes', 'talks', 'code', 'contact',
];

/** Heading shown for each section. */
export const sectionTitles: Record<SectionId, string> = {
  hero: 'Home', about: 'About / Research Profile', education: 'Education', research: 'Research',
  skills: 'Skills', experience: 'Experience', projects: 'Projects', publications: 'Publications & Technical Work',
  achievements: 'Achievements', certifications: 'Certifications', notes: 'Technical Notes',
  talks: 'Talks & Presentations', code: 'Code / Open Source', contact: 'Contact',
};
