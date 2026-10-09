import { profile } from '../../data/profile';
export default function TerminalCard() {
  if (!profile.terminal.enabled) return null;
  return (
    <div className="card overflow-hidden" role="group" aria-label="Terminal summary">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-line" /><span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
      </div>
      <div className="space-y-3 p-4 font-mono text-[13px] leading-relaxed">
        {profile.terminal.lines.map((l) => (
          <div key={l.cmd}>
            <p><span className="text-primary">$</span> {l.cmd}</p>
            {l.out.map((o) => <p key={o} className="text-soft">{o}</p>)}
          </div>
        ))}
      </div>
    </div>
  );
}
