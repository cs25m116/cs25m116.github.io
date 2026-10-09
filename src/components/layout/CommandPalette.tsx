import { useEffect, useMemo, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import { visibleNav, socialLinks } from '../../utils/sections';
import { siteConfig } from '../../config/site.config';
import { asset } from '../../utils/assets';

type Cmd = { label: string; run: () => void };
export default function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState(''); const [idx, setIdx] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const cmds = useMemo<Cmd[]>(() => {
    const go = visibleNav.map((n) => ({ label: n.id === 'hero' ? 'Go to Top' : `Go to ${n.label}`, run: () => document.getElementById(n.id)?.scrollIntoView() }));
    const ext = socialLinks().filter((s) => ['github', 'linkedin', 'scholar'].includes(s.key)).map((s) => ({ label: `Open ${s.label}`, run: () => window.open(s.url, '_blank', 'noopener') }));
    const cv: Cmd[] = siteConfig.resume ? [{ label: 'Download CV', run: () => { const a = document.createElement('a'); a.href = asset(siteConfig.resume); a.download = ''; a.click(); } }] : [];
    return [...go, ...cv, ...ext];
  }, []);
  const list = cmds.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()));
  useEffect(() => { if (open) { setQ(''); setIdx(0); setTimeout(() => input.current?.focus(), 0); } }, [open]);
  if (!open) return null;
  const exec = (c?: Cmd) => { if (c) { onClose(); c.run(); } };
  const key = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => Math.min(i + 1, list.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
    if (e.key === 'Enter') exec(list[idx]);
  };
  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/70 p-4 pt-[15vh] backdrop-blur-sm" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div role="dialog" aria-modal="true" aria-label="Command palette" onKeyDown={key} className="w-full max-w-lg overflow-hidden rounded-xl border border-line bg-surface">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <Search size={16} className="text-muted" aria-hidden />
          <input ref={input} value={q} onChange={(e) => { setQ(e.target.value); setIdx(0); }} placeholder="Search portfolio..." aria-label="Search portfolio commands" className="w-full bg-transparent text-sm outline-none placeholder:text-muted" />
        </div>
        <ul role="listbox" aria-label="Commands" className="max-h-72 overflow-y-auto p-2">
          {list.map((c, i) => (
            <li key={c.label} role="option" aria-selected={i === idx}>
              <button onClick={() => exec(c)} onMouseEnter={() => setIdx(i)} className={`w-full rounded-lg px-3 py-2 text-left text-sm ${i === idx ? 'bg-elevated text-primary' : 'text-soft'}`}>{c.label}</button>
            </li>
          ))}
          {list.length === 0 && <li className="px-3 py-4 text-sm text-muted">No matching commands.</li>}
        </ul>
      </div>
    </div>
  );
}
