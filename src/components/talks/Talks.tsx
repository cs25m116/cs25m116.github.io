import Section from '../layout/Section';
import { talks } from '../../data/talks';
export default function Talks() {
  return (
    <Section id="talks">
      <ul className="space-y-4">
        {talks.map((t) => (
          <li key={t.title}><article className="card p-5">
            <p className="mono">{[t.event, t.date].filter(Boolean).join(' / ')}</p>
            <h3 className="mt-2 font-heading text-lg font-semibold">{t.title}</h3>
            {t.description && <p className="mt-2 text-sm text-soft">{t.description}</p>}
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
              {t.slides && <a className="text-primary hover:underline" href={t.slides} target="_blank" rel="noreferrer noopener">Slides</a>}
              {t.video && <a className="text-primary hover:underline" href={t.video} target="_blank" rel="noreferrer noopener">Video</a>}
              {t.topics?.map((x) => <span key={x} className="chip">{x}</span>)}
            </div>
          </article></li>
        ))}
      </ul>
    </Section>
  );
}
