import { sections, sectionOrder, type SectionId } from '../config/sections.config';
import { navigation } from '../config/navigation.config';
import { siteConfig } from '../config/site.config';
import { education } from '../data/education';
import { research } from '../data/research';
import { experience } from '../data/experience';
import { projects } from '../data/projects';
import { publications } from '../data/publications';
import { skills } from '../data/skills';
import { achievements } from '../data/achievements';
import { certifications } from '../data/certifications';
import { notes } from '../data/notes';
import { talks } from '../data/talks';
import { repos } from '../data/repos';

const hasData: Record<SectionId, boolean> = {
  hero: true, about: true, contact: true,
  education: education.length > 0, research: research.length > 0, experience: experience.length > 0,
  projects: projects.length > 0, publications: publications.length > 0, skills: skills.some((s) => s.skills.length > 0),
  achievements: achievements.length > 0, certifications: certifications.length > 0, notes: notes.length > 0,
  talks: talks.length > 0, code: repos.length > 0,
};

/** Enabled in sections.config.ts AND has data. */
export const visibleSections: SectionId[] = sectionOrder.filter((id) => sections[id] && hasData[id]);
const numbered: SectionId[] = visibleSections.filter((s) => s !== 'hero');
export const sectionNumber = (id: SectionId) => String(numbered.indexOf(id) + 1).padStart(2, '0');
export const visibleNav = navigation.filter((n) => visibleSections.includes(n.id as SectionId));

export const socialLinks = () => {
  const s = siteConfig.social;
  const list = [
    { key: 'github', label: 'GitHub', url: s.github },
    { key: 'linkedin', label: 'LinkedIn', url: s.linkedin },
    { key: 'scholar', label: 'Google Scholar', url: s.googleScholar },
    { key: 'twitter', label: 'Twitter / X', url: s.twitter },
    { key: 'medium', label: 'Medium', url: s.medium },
    { key: 'youtube', label: 'YouTube', url: s.youtube },
    { key: 'email', label: 'Email', url: siteConfig.email ? `mailto:${siteConfig.email}` : '' },
  ];
  return list.filter((l) => l.url);
};
