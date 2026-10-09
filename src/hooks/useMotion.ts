import { useEffect, useState, useSyncExternalStore } from 'react';
import { themeConfig } from '../config/theme.config';

const KEY = 'portfolio-motion';
const listeners = new Set<() => void>();
const read = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
const subscribe = (cb: () => void) => { listeners.add(cb); return () => { listeners.delete(cb); }; };
/** Visitor override (the play/pause button in the navbar). Wins over the OS setting. */
export const setMotionPref = (v: 'on' | 'off') => { try { localStorage.setItem(KEY, v); } catch { /* ignore */ } listeners.forEach((l) => l()); };

/** Animations run when: theme allows them AND (visitor chose "on" OR the OS does not request reduced motion). */
export function useMotion() {
  const pref = useSyncExternalStore(subscribe, read, () => null);
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const on = () => setReduced(mq.matches);
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  if (!themeConfig.effects.animations) return false;
  if (pref === 'on') return true;
  if (pref === 'off') return false;
  return !reduced;
}
