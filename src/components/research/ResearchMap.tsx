import { research } from '../../data/research';
import { projects } from '../../data/projects';
import { publications } from '../../data/publications';

const has = (hay: string[], needle: string) => hay.some((h) => h.toLowerCase().includes(needle.toLowerCase()) || needle.toLowerCase().includes(h.toLowerCase()));

/** Area -> topic -> projects / publications. Links derive from matching text in data files. */
export default function ResearchMap() {
  return (
    <div className="card mt-10 p-5 sm:p-6" role="figure" aria-label="Research map">
      <h3 className="mono mb-5">research map: area / method / work</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {research.map((area) => (
          <div key={area.title}>
            <p className="font-heading text-lg text-primary">{area.title}</p>
            <ul className="ml-1 mt-2 border-l border-primary/30">
              {area.topics.map((t) => {
                const ps = projects.filter((p) => p.category === area.title && (has([...p.technologies, p.title, p.subtitle ?? '', p.description], t))
                  || (p.category === area.title && has([p.title, p.description], t)));
                const pubs = publications.filter((p) => has([...(p.tags ?? []), p.title], t));
                return (
                  <li key={t} className="relative py-1.5 pl-5 before:absolute before:left-0 before:top-[18px] before:h-px before:w-4 before:bg-primary/30">
                    <span className="text-sm text-ink">{t}</span>
                    {(ps.length > 0 || pubs.length > 0) && (
                      <ul className="mt-1 flex flex-wrap gap-1.5">
                        {ps.map((p) => <li key={p.id}><a href="#projects" className="chip chip-on">{p.title}</a></li>)}
                        {pubs.map((p) => <li key={p.title}><a href="#publications" className="chip">{p.title}</a></li>)}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
