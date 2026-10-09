import Section from '../layout/Section';
import { profile } from '../../data/profile';
import { siteConfig } from '../../config/site.config';
import { education } from '../../data/education';

export default function About() {
  const row = (k: string, v: string | string[]) => (
    <div key={k} className="border-b border-line/70 py-3 last:border-0">
      <dt className="mono mb-1">{k}</dt>
      <dd className="text-sm text-ink">{Array.isArray(v) ? <ul className="flex flex-wrap gap-1.5">{v.map((i) => <li key={i} className="chip">{i}</li>)}</ul> : v}</dd>
    </div>
  );
  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-soft">
          {profile.bio.map((p) => <p key={p}>{p}</p>)}
          {education[0] && <p className="text-base text-muted">Currently: {education[0].degree}{education[0].field ? `, ${education[0].field}` : ''}, {education[0].institution}.</p>}
        </div>
        <aside aria-label="Technical profile" className="card p-5">
          <dl>
            {row('role', profile.role)}
            {row('focus', profile.focus)}
            {row('interests', profile.interests)}
            {row('current focus', profile.currentFocus)}
            {siteConfig.location && row('location', siteConfig.location)}
          </dl>
        </aside>
      </div>
    </Section>
  );
}
