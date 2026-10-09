import { research } from '../../data/research';
import { profile } from '../../data/profile';
/** Generated from data/research.ts (areas flagged currentlyExploring) and profile.interests. */
export default function ResearchStatus() {
  const exploring = research.filter((r) => r.currentlyExploring).map((r) => r.title);
  const topics = research.flatMap((r) => r.topics).slice(0, 5);
  const group = (label: string, items: string[]) => items.length > 0 && (
    <div>
      <h3 className="mono mb-2">{label}</h3>
      <ul className="flex flex-wrap gap-1.5">{items.map((i) => <li key={i} className="chip">{i}</li>)}</ul>
    </div>
  );
  if (!exploring.length && !topics.length) return null;
  return (
    <div className="card space-y-4 p-4" role="group" aria-label="Research status">
      {group('currently exploring', exploring.length ? exploring : profile.currentFocus)}
      {group('research interests', topics)}
    </div>
  );
}
