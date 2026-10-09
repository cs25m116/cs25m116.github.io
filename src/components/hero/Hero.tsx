import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileDown, ArrowDown } from 'lucide-react';
import { siteConfig } from '../../config/site.config';
import { profile } from '../../data/profile';
import { SocialIcon } from '../common/Icons';
import { asset } from '../../utils/assets';
import { socialLinks, visibleSections } from '../../utils/sections';
import { useMotion } from '../../hooks/useMotion';
import TerminalCard from './TerminalCard';
import Typewriter from './Typewriter';
import ResearchStatus from './ResearchStatus';

const labels = ['tensor', 'graph', 'latent z', 'ℝⁿ'];
export default function Hero() {
  const [imgOk, setImgOk] = useState(true);
  const motionOn = useMotion();
  const links = socialLinks();
  const initials = siteConfig.name.split(' ').map((p) => p[0]).slice(0, 2).join('');
  const enter = motionOn ? { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } } : {};
  return (
    <section id="hero" aria-label="Introduction" className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        <motion.div {...enter} className="order-2 lg:order-1">
          {siteConfig.availability.enabled && (
            <p className="mono mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 px-3 py-1 text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden /> {siteConfig.availability.text}
            </p>
          )}
          <h1 className="font-heading text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl">{siteConfig.name}</h1>
          <Typewriter words={profile.roles} />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-soft">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {visibleSections.includes('research') && <a href="#research" className="btn btn-primary">View Research</a>}
            {visibleSections.includes('projects') && <a href="#projects" className="btn">View Projects</a>}
            {siteConfig.resume && <a href={asset(siteConfig.resume)} download className="btn"><FileDown size={16} aria-hidden /> Download CV</a>}
          </div>
          {links.length > 0 && (
            <ul className="mt-7 flex flex-wrap gap-2" aria-label="Social links">
              {links.map((l) => (
                <li key={l.key}>
                  <a href={l.url} target={l.key === 'email' ? undefined : '_blank'} rel="noreferrer noopener" aria-label={l.label} title={l.label}
                     className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-soft transition-colors hover:border-primary/60 hover:text-primary">
                    <SocialIcon name={l.key} />
                  </a>
                </li>
              ))}
              {siteConfig.resume && (
                <li><a href={asset(siteConfig.resume)} target="_blank" rel="noreferrer noopener" className="flex h-10 items-center rounded-lg border border-line px-3 text-sm text-soft hover:border-primary/60 hover:text-primary">View CV</a></li>
              )}
            </ul>
          )}
        </motion.div>

        <motion.div {...enter} className="relative order-1 mx-auto aspect-square w-64 sm:w-80 lg:order-2 lg:w-full lg:max-w-sm" aria-hidden={false}>
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
            <g stroke="rgb(var(--c-primary))" fill="rgb(var(--c-primary))" opacity=".5" strokeWidth=".7">
              <circle cx="200" cy="200" r="186" fill="none" strokeDasharray="2 6" />
              <circle cx="200" cy="200" r="214" fill="none" opacity=".4" />
              <line x1="200" y1="14" x2="330" y2="40" /><line x1="330" y1="40" x2="392" y2="170" /><line x1="392" y1="170" x2="370" y2="300" />
              <line x1="30" y1="120" x2="14" y2="250" /><line x1="14" y1="250" x2="76" y2="350" />
              {[[200,14],[330,40],[392,170],[370,300],[30,120],[14,250],[76,350]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="3.2" stroke="none" />)}
            </g>
          </svg>
          <div className="absolute inset-[9%] overflow-hidden rounded-full border-2 border-primary/70 bg-surface"
               style={{ boxShadow: 'var(--glow, 0 0 60px -18px rgb(var(--c-primary) / .6))' }}>
            {imgOk ? (
              <img src={asset(siteConfig.profileImage)} alt={`Portrait of ${siteConfig.name}`} className="h-full w-full object-cover" loading="eager" onError={() => setImgOk(false)} />
            ) : (
              <div className="grid h-full w-full place-items-center font-heading text-6xl text-primary" role="img" aria-label={`Initials of ${siteConfig.name}`}>{initials}</div>
            )}
          </div>
          {labels.map((l, i) => (
            <span key={l} aria-hidden className="mono absolute rounded border border-line bg-surface/80 px-1.5 py-0.5 text-primary/80"
                  style={{ top: ['6%', '18%', '80%', '88%'][i], left: ['2%', '78%', '-2%', '74%'][i] }}>{l}</span>
          ))}
        </motion.div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:max-w-3xl">
        <ResearchStatus />
        <TerminalCard />
      </div>
      <a href="#about" aria-label="Scroll to next section" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-muted hover:text-primary lg:block"><ArrowDown size={18} /></a>
    </section>
  );
}
