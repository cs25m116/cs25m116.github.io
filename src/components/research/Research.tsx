import Section from '../layout/Section';
import { research } from '../../data/research';
import { ResearchIcon } from '../common/Icons';
import { siteConfig } from '../../config/site.config';
import ResearchMap from './ResearchMap';

export default function Research() {
  return (
    <Section id="research">
      <ul className="grid gap-5 md:grid-cols-2">
        {research.map((r) => (
          <li key={r.title}>
            <article className="card card-hover h-full p-6">
              <div className="flex items-start justify-between">
                <span className="rounded-lg border border-primary/30 p-2 text-primary"><ResearchIcon name={r.icon} /></span>
                {r.status && <span className="mono">{r.status}</span>}
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold">{r.title}</h3>
              <p className="mt-2 text-soft">{r.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${r.title} topics`}>{r.topics.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
            </article>
          </li>
        ))}
      </ul>
      {siteConfig.features.researchMap && <ResearchMap />}
    </Section>
  );
}
