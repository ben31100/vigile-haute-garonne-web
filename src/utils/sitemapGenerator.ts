
import { writeFileSync } from 'fs';
import { resolve } from 'path';

interface SitemapEntry {
  url: string;
  priority?: number;
  changefreq?: 'daily' | 'weekly' | 'monthly';
  lastmod?: string;
}

export function generateSitemap() {
  const baseUrl = 'https://levigile.fr';
  
  const pages: SitemapEntry[] = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/villes', priority: 0.9, changefreq: 'weekly' },
    { url: '/toulouse.html', priority: 0.8, changefreq: 'weekly' },
    // Ajout dynamique des villes de cities.json
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <priority>${page.priority || 0.5}</priority>
      <changefreq>${page.changefreq || 'monthly'}</changefreq>
    </url>
  `).join('')}
</urlset>`;

  const sitemapPath = resolve(__dirname, '../../public/sitemap.xml');
  writeFileSync(sitemapPath, sitemap);
  
  console.log('Sitemap generated successfully');
}
