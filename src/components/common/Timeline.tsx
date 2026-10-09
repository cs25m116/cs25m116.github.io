import type { ReactNode } from 'react';
/** Vertical timeline used by Education and Experience. */
export default function Timeline({ items, label }: { items: { key: string; node: ReactNode }[]; label: string }) {
  return (
    <ol aria-label={label} className="relative space-y-6 border-l border-line pl-6 sm:pl-8">
      {items.map((i) => (
        <li key={i.key} className="relative">
          <span aria-hidden className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-primary bg-bg sm:-left-[39px]" />
          {i.node}
        </li>
      ))}
    </ol>
  );
}
