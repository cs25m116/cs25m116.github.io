import Section from '../layout/Section';
import { achievements } from '../../data/achievements';
import { asset } from '../../utils/assets';

export default function Achievements() {
  const categoryOrder: Record<string, number> = {
    'Competitive Exam': 0,
    Hackathon: 1,
    Scholarship: 2,
  };
  const sorted = [...achievements].sort((a, b) => {
    const categoryDifference = (categoryOrder[a.category ?? ''] ?? 99) - (categoryOrder[b.category ?? ''] ?? 99);
    if (categoryDifference !== 0) return categoryDifference;
    return Number(b.year ?? 0) - Number(a.year ?? 0);
  });
  return (
    <Section id="achievements">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((a) => (
          <li key={a.title} className={a.featured ? 'sm:col-span-2' : ''}>
            <article className={`card card-hover h-full p-5 ${a.featured ? 'border-primary/40' : ''}`}>
              <p className="mono">{[a.category, a.year].filter(Boolean).join(' / ')}</p>
              <h3 className="mt-2 font-heading text-lg font-semibold">{a.title}</h3>
              {a.organization && <p className="text-sm text-primary">{a.organization}</p>}
              {a.rank && <p className="mt-2 font-heading text-2xl text-ink">{a.rank}</p>}
              {a.gateScore && <p className="mt-1 text-sm text-soft">GATE Score: {a.gateScore}</p>}
              {a.description && <p className="mt-2 text-sm text-soft">{a.description}</p>}
              {(a.link || a.certificate) && (
                <p className="mt-3 flex gap-4 text-sm">
                  {a.link && <a className="text-primary underline-offset-4 hover:underline" href={a.link} target="_blank" rel="noreferrer noopener">Details</a>}
                  {a.certificate && <a className="text-primary underline-offset-4 hover:underline" href={asset(a.certificate)} target="_blank" rel="noreferrer noopener">Certificate</a>}
                </p>
              )}
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
