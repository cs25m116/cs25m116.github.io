import { useState } from 'react';
import Section from '../layout/Section';
import { contact } from '../../data/contact';
import { siteConfig } from '../../config/site.config';
import { socialLinks } from '../../utils/sections';
import { SocialIcon } from '../common/Icons';
import { asset } from '../../utils/assets';
import { FileText, Phone } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState(''); const [msg, setMsg] = useState('');
  const links = socialLinks();
  const href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Message from ${name || 'your website'}`)}&body=${encodeURIComponent(msg)}`;
  const field = 'w-full rounded-lg border border-line bg-elevated px-3 py-2 text-sm outline-none placeholder:text-muted focus:border-primary/60';
  return (
    <Section id="contact">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="max-w-md text-lg text-soft">{contact.intro}</p>
          <ul className="mt-6 space-y-2">
            {links.map((l) => (
              <li key={l.key}><a className="inline-flex items-center gap-3 text-soft hover:text-primary" href={l.url} target={l.key === 'email' ? undefined : '_blank'} rel="noreferrer noopener"><SocialIcon name={l.key} /> {l.key === 'email' ? siteConfig.email : l.label}</a></li>
            ))}
            {contact.emails?.map((email) => (
              <li key={email.address}><a className="btn inline-flex items-center gap-3" href={`mailto:${email.address}`}><SocialIcon name="email" /> {email.label}: {email.address}</a></li>
            ))}
            {contact.phone && (
              <li><a className="btn inline-flex items-center gap-3" href={`tel:${contact.phone}`}><Phone size={18} aria-hidden /> {contact.phone}</a></li>
            )}
            {siteConfig.resume && <li><a className="inline-flex items-center gap-3 text-soft hover:text-primary" href={asset(siteConfig.resume)} target="_blank" rel="noreferrer noopener"><FileText size={18} aria-hidden /> Resume</a></li>}
          </ul>
          {links.length === 0 && <p className="mono mt-4">Add your links in src/config/site.config.ts to show them here.</p>}
        </div>
        {contact.mailtoForm && siteConfig.email && (
          <div className="card space-y-3 p-5">
            <label className="block"><span className="mono mb-1 block">name</span><input className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
            <label className="block"><span className="mono mb-1 block">message</span><textarea className={field} rows={5} value={msg} onChange={(e) => setMsg(e.target.value)} /></label>
            <a className="btn btn-primary" href={href}>Open in email app</a>
          </div>
        )}
      </div>
    </Section>
  );
}
