import Section from '../layout/Section';
import Timeline from '../common/Timeline';
import { experience } from '../../data/experience';

export default function Experience() {
  const list = (items?: string[]) => items && items.length > 0 && <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-soft">{items.map((i) => <li key={i}>{i}</li>)}</ul>;
  return (
    <Section id="experience">
      <Timeline label="Experience timeline" items={experience.map((e) => ({
        key: e.organization + e.role + e.duration,
        node: (
          <article className="card card-hover p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-heading text-xl font-semibold">{e.role}</h3>
              <p className="mono">{e.duration}</p>
            </div>
            <p className="mt-1 text-primary">{e.organization}{e.location ? ` (${e.location})` : ''} <span className="chip ml-2">{e.type}</span></p>
            {e.description && <p className="mt-3 text-soft">{e.description}</p>}
            {list(e.responsibilities)}{list(e.achievements)}
            {e.technologies && e.technologies.length > 0 && <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">{e.technologies.map((t) => <li key={t} className="chip">{t}</li>)}</ul>}
          </article>
        ),
      }))} />
    </Section>
  );
}
