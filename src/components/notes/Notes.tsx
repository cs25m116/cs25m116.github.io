import Section from '../layout/Section';
import { notes } from '../../data/notes';
export default function Notes() {
  return (
    <Section id="notes">
      <ul className="grid gap-4 md:grid-cols-2">
        {notes.map((n) => {
          const body = (<>
            <p className="mono">{[n.category, n.date].filter(Boolean).join(' / ')}</p>
            <h3 className="mt-2 font-heading text-lg font-semibold">{n.title}</h3>
            <p className="mt-2 text-sm text-soft">{n.description}</p>
            {n.tags && n.tags.length > 0 && <ul className="mt-3 flex flex-wrap gap-1.5">{n.tags.map((t) => <li key={t} className="chip">{t}</li>)}</ul>}
          </>);
          return <li key={n.title}>{n.url ? <a href={n.url} target="_blank" rel="noreferrer noopener" className="card card-hover block h-full p-5">{body}</a> : <article className="card h-full p-5">{body}</article>}</li>;
        })}
      </ul>
    </Section>
  );
}
