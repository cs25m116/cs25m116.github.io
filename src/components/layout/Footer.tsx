import { siteConfig } from '../../config/site.config';
export default function Footer() {
  return (
    <footer className="border-t border-primary/30 px-5 py-8 text-center">
      <p className="mono">© {new Date().getFullYear()} {siteConfig.name}. Built with React, Vite and Tailwind.</p>
    </footer>
  );
}
