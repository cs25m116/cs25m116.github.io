import { useState } from 'react';
import { Menu, X, Command, Pause, Play } from 'lucide-react';
import { visibleNav } from '../../utils/sections';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useMotion, setMotionPref } from '../../hooks/useMotion';
import { siteConfig } from '../../config/site.config';

const ids = visibleNav.map((n) => n.id);
export default function Navbar({ onPalette }: { onPalette: () => void }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const motion = useMotion();
  const link = (id: string) => `rounded-full px-3 py-1.5 text-sm transition-colors ${active === id ? 'text-primary' : 'text-soft hover:text-ink'}`;
  return (
    <header className="fixed inset-x-0 top-3 z-40 flex justify-center px-3">
      <nav aria-label="Primary" className="flex items-center gap-1 rounded-full border border-line bg-surface/80 px-2 py-1.5 backdrop-blur-md">
        <ul className="hidden items-center lg:flex">
          {visibleNav.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} className={link(n.id)} aria-current={active === n.id ? 'true' : undefined}>{n.label}</a></li>
          ))}
        </ul>
        <span className="px-3 font-heading text-sm lg:hidden">{siteConfig.name}</span>
        <button onClick={() => setMotionPref(motion ? 'off' : 'on')} aria-pressed={motion} aria-label={motion ? 'Pause animations' : 'Play animations'} title={motion ? 'Pause animations' : 'Play animations'}
          className="rounded-full p-2 text-soft hover:text-primary">
          {motion ? <Pause size={15} /> : <Play size={15} />}
        </button>
        {siteConfig.features.commandPalette && (
          <button onClick={onPalette} className="hidden items-center gap-1 rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted hover:text-primary lg:flex" aria-label="Open command palette">
            <Command size={12} aria-hidden /> K
          </button>
        )}
        <button className="rounded-full p-2 text-soft lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <ul id="mobile-nav" className="absolute top-14 w-[calc(100%-1.5rem)] max-w-sm rounded-xl border border-line bg-surface/95 p-2 backdrop-blur-md lg:hidden">
          {visibleNav.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 text-soft hover:bg-elevated hover:text-primary">{n.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
