import { useEffect, useRef } from 'react';
import { themeConfig } from '../../config/theme.config';
import { useMotion } from '../../hooks/useMotion';
import { rgba } from '../../utils/canvas';

const SYMBOLS = ['∇', '∑', '∫', 'λ', 'θ', '∂', 'ℝⁿ', 'f(x)', '{ }', '0x1F', 'W·x+b'];
type Node = { x: number; y: number; vx: number; vy: number; sym?: string };
type Pulse = { a: number; b: number; t: number };

/** Drifting graph: nodes, edges, travelling pulses (signals), symbols, and links to the cursor. Static when motion is off. */
export default function Background() {
  const ref = useRef<HTMLCanvasElement>(null);
  const motion = useMotion();
  useEffect(() => {
    if (!themeConfig.effects.particles) return;
    const canvas = ref.current!;
    const ctx = canvas.getContext('2d')!;
    const c = themeConfig.colors;
    let w = 0, h = 0, raf = 0, nodes: Node[] = [], pulses: Pulse[] = [];
    const mouse = { x: -999, y: -999 };
    const LINK = 150;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(110, (w * h) / 14000));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.7, vy: (Math.random() - 0.5) * 0.7,
        sym: i % 6 === 0 ? SYMBOLS[(i / 6) % SYMBOLS.length | 0] : undefined,
      }));
      draw();
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.strokeStyle = rgba(c.primary, 0.1);
      ctx.beginPath(); ctx.moveTo(40, h - 40); ctx.lineTo(40, h - 150); ctx.moveTo(40, h - 40); ctx.lineTo(150, h - 40); ctx.stroke();
      ctx.font = '12px "Courier Prime", monospace';
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) { ctx.strokeStyle = rgba(c.primary, 0.22 * (1 - d / LINK)); ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < 190) { ctx.strokeStyle = rgba(c.secondary, 0.5 * (1 - md / 190)); ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
        ctx.fillStyle = rgba(c.primary, 0.6); ctx.beginPath(); ctx.arc(a.x, a.y, 1.9, 0, 6.3); ctx.fill();
        if (a.sym) { ctx.fillStyle = rgba(c.textSecondary, 0.3); ctx.fillText(a.sym, a.x + 6, a.y - 6); }
      }
      pulses.forEach((p) => {
        const a = nodes[p.a], b = nodes[p.b]; if (!a || !b) return;
        ctx.fillStyle = rgba(c.secondary, 0.9); ctx.beginPath(); ctx.arc(a.x + (b.x - a.x) * p.t, a.y + (b.y - a.y) * p.t, 2.6, 0, 6.3); ctx.fill();
      });
    };
    const step = () => {
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        const dx = n.x - mouse.x, dy = n.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 120 && d > 0) { n.x += (dx / d) * 0.6; n.y += (dy / d) * 0.6; } // gentle push away from cursor
      });
      if (Math.random() < 0.12 && nodes.length > 1) {
        const a = (Math.random() * nodes.length) | 0;
        const near = nodes.findIndex((b, j) => j !== a && Math.hypot(nodes[a].x - b.x, nodes[a].y - b.y) < LINK);
        if (near >= 0) pulses.push({ a, b: near, t: 0 });
      }
      pulses = pulses.filter((p) => (p.t += 0.03) < 1);
      draw(); raf = requestAnimationFrame(step);
    };
    const move = (e: PointerEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', move);
    if (motion) raf = requestAnimationFrame(step);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); window.removeEventListener('pointermove', move); };
  }, [motion]);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {themeConfig.effects.grid && <div className="grid-overlay absolute inset-0" />}
      <canvas ref={ref} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
