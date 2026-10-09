import type { ReactNode } from 'react';
import { sectionNumber } from '../../utils/sections';
import { sectionTitles, type SectionId } from '../../config/sections.config';

export default function Section({ id, children, subtitle }: { id: SectionId; children: ReactNode; subtitle?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
      <header className="mb-10 md:mb-14">
        <p className="mono mb-3 flex items-center gap-3 text-primary/80">
          <span>{sectionNumber(id)} / {id}</span>
          <span className="h-px w-16 bg-gradient-to-r from-primary/60 to-transparent" aria-hidden />
        </p>
        <h2 id={`${id}-h`} className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{sectionTitles[id]}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-soft">{subtitle}</p>}
      </header>
      {children}
    </section>
  );
}
