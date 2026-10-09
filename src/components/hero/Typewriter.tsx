import { useEffect, useState } from 'react';
import { useMotion } from '../../hooks/useMotion';

/** Types each role, holds, deletes, moves on. Shows the full list statically when motion is off. */
export default function Typewriter({ words }: { words: string[] }) {
  const motion = useMotion();
  const [i, setI] = useState(0); const [n, setN] = useState(0); const [del, setDel] = useState(false);
  useEffect(() => {
    if (!motion) return;
    const word = words[i];
    const delay = !del && n === word.length ? 1400 : del ? 35 : 75;
    const id = setTimeout(() => {
      if (!del && n === word.length) setDel(true);
      else if (del && n === 0) { setDel(false); setI((i + 1) % words.length); }
      else setN(n + (del ? -1 : 1));
    }, delay);
    return () => clearTimeout(id);
  }, [motion, words, i, n, del]);
  if (!motion) return <p className="mt-5 font-heading text-xl text-primary sm:text-2xl">{words.join('  |  ')}</p>;
  return (
    <p className="mt-5 min-h-[2rem] font-heading text-xl text-primary sm:text-2xl" aria-label={words.join(', ')}>
      <span aria-hidden>{words[i].slice(0, n)}<span className="cursor">_</span></span>
    </p>
  );
}
