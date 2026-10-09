import { useState } from 'react';
import Section from '../layout/Section';
import { publications } from '../../data/publications';

export default function Publications() {
  const [show, setShow] = useState<{ t: string; kind: 'abstract' | 'citation' } | null>(null);
  const toggle = (t: string, kind: 'abstract' | 'citation') => setShow(show?.t === t && show.kind === kind ? null : { t, kind });
  return (
    <Section id="publications">
      <ol className="space-y-5">
        {[...publications].sort((a, b) => b.year.localeCompare(a.year)).map((p) => (
          <li key={p.title}>
            <article className="card p-5 sm:p-6">
              <p className="mono">{p.type} / {p.year}</p>
              <h3 className="mt-2 font-heading text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-soft">{p.authors.join(', ')}</p>
              <p className="text-sm italic text-muted">{p.venue}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.paperUrl && <a className="btn" href={p.paperUrl} target="_blank" rel="noreferrer noopener">Paper</a>}
                {p.codeUrl && <a className="btn" href={p.codeUrl} target="_blank" rel="noreferrer noopener">Code</a>}
                {p.abstract && <button className="btn" aria-expanded={show?.t === p.title && show.kind === 'abstract'} onClick={() => toggle(p.title, 'abstract')}>Abstract</button>}
                {p.citation && <button className="btn" aria-expanded={show?.t === p.title && show.kind === 'citation'} onClick={() => toggle(p.title, 'citation')}>Citation</button>}
              </div>
              {show?.t === p.title && show.kind === 'abstract' && <p className="mt-4 text-sm leading-relaxed text-soft">{p.abstract}</p>}
              {show?.t === p.title && show.kind === 'citation' && <pre className="scroll-x mt-4 rounded-lg border border-line bg-elevated p-3 font-mono text-xs text-soft">{p.citation}</pre>}
              {p.tags && p.tags.length > 0 && <ul className="mt-4 flex flex-wrap gap-1.5">{p.tags.map((t) => <li key={t} className="chip">{t}</li>)}</ul>}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
