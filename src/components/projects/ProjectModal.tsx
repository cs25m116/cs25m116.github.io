import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink, FileText, Play, Database } from 'lucide-react';
import type { Project } from '../../types';
import { asset } from '../../utils/assets';
import { useMotion } from '../../hooks/useMotion';

export default function ProjectModal({ project: p, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const anim = useMotion();
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && dialogRef.current) {
        const f = dialogRef.current.querySelectorAll<HTMLElement>('a[href],button');
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', key);
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = ''; prev?.focus(); };
  }, [onClose]);

  const block = (title: string, text?: string) => text && <section><h3 className="mono mb-1.5 text-primary/80">{title}</h3><p className="leading-relaxed text-soft">{text}</p></section>;
  const links = [
    { url: p.github, label: 'Code', icon: Github }, { url: p.demo, label: 'Demo', icon: ExternalLink },
    { url: p.paper, label: 'Paper', icon: FileText }, { url: p.video, label: 'Video', icon: Play }, { url: p.dataset, label: 'Dataset', icon: Database },
  ].filter((l) => l.url);
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <motion.div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="proj-title"
        initial={anim ? { opacity: 0, y: 24 } : false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-line bg-surface p-6 sm:rounded-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mono">{[p.category, p.type, p.status, p.year].filter(Boolean).join(' / ')}</p>
            <h2 id="proj-title" className="mt-2 font-heading text-2xl font-semibold sm:text-3xl">{p.title}</h2>
            {p.subtitle && <p className="mt-1 text-primary">{p.subtitle}</p>}
          </div>
          <button ref={closeRef} onClick={onClose} aria-label="Close project details" className="rounded-lg border border-line p-2 text-soft hover:text-primary"><X size={18} /></button>
        </div>
        {p.image && <img src={asset(p.image)} alt={`${p.title} preview`} className="mt-6 w-full rounded-lg border border-line" loading="lazy" />}
        <div className="mt-6 space-y-5">
          {block('overview', p.longDescription ?? p.description)}
          {block('problem', p.problem)}{block('motivation', p.motivation)}{block('approach', p.approach)}
          {block('architecture', p.architecture)}{block('implementation', p.implementation)}{block('experiments', p.experiments)}
          {p.results && p.results.length > 0 && <section><h3 className="mono mb-1.5 text-primary/80">results</h3><ul className="list-disc space-y-1 pl-5 text-soft">{p.results.map((r) => <li key={r}>{r}</li>)}</ul></section>}
          {p.metrics && p.metrics.length > 0 && (
            <section><h3 className="mono mb-2 text-primary/80">metrics</h3>
              <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">{p.metrics.map((m) => <div key={m.label} className="rounded-lg border border-line bg-elevated p-3"><dt className="mono">{m.label}</dt><dd className="mt-1 font-heading text-xl text-ink">{m.value}</dd></div>)}</dl>
            </section>
          )}
          <section><h3 className="mono mb-2 text-primary/80">technologies</h3><ul className="flex flex-wrap gap-1.5">{p.technologies.map((t) => <li key={t} className="chip">{t}</li>)}</ul></section>
          {links.length > 0 && <div className="flex flex-wrap gap-2 pt-2">{links.map((l) => <a key={l.label} href={l.url} target="_blank" rel="noreferrer noopener" className="btn"><l.icon size={15} aria-hidden /> {l.label}</a>)}</div>}
        </div>
      </motion.div>
    </div>
  );
}
