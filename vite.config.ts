import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { siteConfig } from './src/config/site.config';

// Base path for GitHub Pages: set deploy.repoName in site.config.ts
// (use "" for a user/organisation site served at https://<user>.github.io/).
const repo = siteConfig.deploy.repoName;
export default defineConfig({
  base: repo ? `/${repo}/` : '/',
  plugins: [react()],
  build: { chunkSizeWarningLimit: 700 },
});
