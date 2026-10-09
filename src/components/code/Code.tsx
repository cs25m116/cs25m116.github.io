import { Star } from 'lucide-react';
import Section from '../layout/Section';
import { repos } from '../../data/repos';
export default function Code() {
  return (
    <Section id="code">
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((r) => (
          <li key={r.name}>
            <a href={r.githubUrl} target="_blank" rel="noreferrer noopener" className="card card-hover block h-full p-5">
              <h3 className="font-mono text-sm text-primary">{r.name}</h3>
              <p className="mt-2 text-sm text-soft">{r.description}</p>
              <p className="mono mt-3 flex items-center gap-3">
                {r.language && <span>{r.language}</span>}
                {r.stars !== undefined && <span className="flex items-center gap-1"><Star size={12} aria-hidden /> {r.stars}</span>}
              </p>
              {r.topics && r.topics.length > 0 && <ul className="mt-3 flex flex-wrap gap-1.5">{r.topics.map((t) => <li key={t} className="chip">{t}</li>)}</ul>}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
