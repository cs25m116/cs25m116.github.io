import Section from '../layout/Section';
import Timeline from '../common/Timeline';
import { education } from '../../data/education';

export default function Education() {
  return (
    <Section id="education">
      <Timeline label="Education timeline" items={education.map((e) => ({
        key: e.institution + e.degree,
        node: (
          <article className="card card-hover p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-heading text-xl font-semibold">{e.institution}</h3>
              {(e.startDate || e.endDate) && <p className="mono">{[e.startDate, e.endDate].filter(Boolean).join(' - ')}</p>}
            </div>
            <p className="mt-1 text-primary">{e.degree}{e.field ? `, ${e.field}` : ''}</p>
            {e.location && <p className="mono mt-1">{e.location}</p>}
            {e.description && <p className="mt-3 text-soft">{e.description}</p>}
            {e.achievements && e.achievements.length > 0 && <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-soft">{e.achievements.map((a) => <li key={a}>{a}</li>)}</ul>}
            {e.coursework && e.coursework.length > 0 && <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Coursework">{e.coursework.map((c) => <li key={c} className="chip">{c}</li>)}</ul>}
          </article>
        ),
      }))} />
    </Section>
  );
}
