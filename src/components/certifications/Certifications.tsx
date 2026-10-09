import Section from '../layout/Section';
import { certifications } from '../../data/certifications';
import { asset } from '../../utils/assets';

export default function Certifications() {
  return (
    <Section id="certifications">
      <ul className="grid gap-4 md:grid-cols-2">
        {certifications.map((c) => {
          const id = c.title + c.issuer;
          return (
            <li key={id} className="card p-5">
              <span className="block font-heading text-lg font-semibold">{c.title}</span>
              <span className="mono">{[c.issuer, c.date].filter(Boolean).join(' / ')}</span>
              {(c.credentialId || c.image || c.pdf || c.verifyUrl) && (
                <div className="mt-4 space-y-3 text-sm">
                  {c.credentialId && <p className="mono">credential id: {c.credentialId}</p>}
                  {c.image && <img src={asset(c.image)} alt={`${c.title} certificate`} loading="lazy" className="w-full rounded-lg border border-line" />}
                  <p className="flex gap-4">
                    {c.pdf && <a className="text-primary hover:underline" href={asset(c.pdf)} target="_blank" rel="noreferrer noopener">View PDF</a>}
                    {c.verifyUrl && <a className="text-primary hover:underline" href={c.verifyUrl} target="_blank" rel="noreferrer noopener">Verify</a>}
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
