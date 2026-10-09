import { useState } from 'react';
import Section from '../layout/Section';
import ProjectModal from './ProjectModal';
import { projects } from '../../data/projects';
import type { Project } from '../../types';

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const list = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  return (
    <Section id="projects" subtitle="Research and engineering work. Select a project for the problem, approach, and results.">
      <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <li key={p.id}>
            <button onClick={() => setOpen(p)} className="card card-hover flex h-full w-full flex-col p-5 text-left" aria-haspopup="dialog">
              <p className="mono">{[p.category, p.type, p.year].filter(Boolean).join(' / ')}</p>
              <h3 className="mt-2 font-heading text-lg font-semibold">{p.title}</h3>
              {p.subtitle && <p className="text-sm text-primary">{p.subtitle}</p>}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-soft">{p.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">{p.technologies.slice(0, 5).map((t) => <li key={t} className="chip">{t}</li>)}</ul>
            </button>
          </li>
        ))}
      </ul>
      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </Section>
  );
}
