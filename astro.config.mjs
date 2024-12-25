import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://your-domain.netlify.app',
  integrations: [
    mdx(),
    sitemap(),
    robotsTxt()
  ],
  output: 'static',
  adapter: netlify()
});