import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { applyTheme } from './utils/theme';
import { siteConfig } from './config/site.config';
import './index.css';

applyTheme();
document.title = siteConfig.seo.title;
const meta = (name: string, content: string) => {
  const m = document.createElement('meta'); m.name = name; m.content = content; document.head.appendChild(m);
};
meta('description', siteConfig.seo.description);
meta('keywords', siteConfig.seo.keywords.join(', '));

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
