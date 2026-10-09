import Section from '../layout/Section';
import { skills } from '../../data/skills';

export default function Skills() {
  return (
    <Section id="skills">
      <div className="grid gap-5 md:grid-cols-2">
        {skills.filter((c) => c.skills.length > 0).map((c) => (
          <article key={c.category} className="card p-5">
            <h3 className="font-heading text-lg font-semibold">{c.category}</h3>
            <ul className="mt-4 space-y-3">
              {c.skills.map((s) => (
                <li key={s.name}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="text-sm">{s.name}</span>
                    <span className="mono">{[s.years ? `${s.years}y` : '', s.level ? `${s.level}/5` : ''].filter(Boolean).join(' / ')}</span>
                  </div>
                  {s.level && <div className="mt-1.5 h-1 rounded bg-elevated" role="img" aria-label={`${s.name} level ${s.level} of 5`}><div className="h-full rounded bg-gradient-to-r from-primary to-secondary" style={{ width: `${(s.level / 5) * 100}%` }} /></div>}
                  {s.projects && s.projects.length > 0 && <p className="mono mt-1">used in: {s.projects.join(', ')}</p>}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
