import { useEffect, useState, type ComponentType } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CommandPalette from './components/layout/CommandPalette';
import Background from './components/common/Background';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Education from './components/education/Education';
import Research from './components/research/Research';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Publications from './components/publications/Publications';
import Skills from './components/skills/Skills';
import Achievements from './components/achievements/Achievements';
import Certifications from './components/certifications/Certifications';
import Notes from './components/notes/Notes';
import Talks from './components/talks/Talks';
import Code from './components/code/Code';
import Contact from './components/contact/Contact';
import { visibleSections } from './utils/sections';
import { siteConfig } from './config/site.config';
import type { SectionId } from './config/sections.config';

const registry: Record<SectionId, ComponentType> = {
  hero: Hero, about: About, education: Education, research: Research, skills: Skills, experience: Experience,
  projects: Projects, publications: Publications, achievements: Achievements, certifications: Certifications,
  notes: Notes, talks: Talks, code: Code, contact: Contact,
};

export default function App() {
  const [palette, setPalette] = useState(false);
  useEffect(() => {
    if (!siteConfig.features.commandPalette) return;
    const h = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setPalette((p) => !p); } };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-bg">Skip to content</a>
      <Background />
      <Navbar onPalette={() => setPalette(true)} />
      <main id="main">
        {visibleSections.map((id) => { const C = registry[id]; return <C key={id} />; })}
      </main>
      <Footer />
      <CommandPalette open={palette} onClose={() => setPalette(false)} />
    </>
  );
}
