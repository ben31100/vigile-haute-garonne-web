
import { writeFileSync, readFileSync } from 'fs';
import { resolve } from 'path';
import cities from '../data/cities.json';

interface SitemapEntry {
  url: string;
  priority?: number;
  changefreq?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  lastmod?: string;
}

export function generateSitemap() {
  const baseUrl = 'https://levigile.fr';
  const today = new Date().toISOString().split('T')[0];
  
  // Pages principales
  const pages: SitemapEntry[] = [
    { url: '/', priority: 1.0, changefreq: 'daily', lastmod: today },
    { url: '/villes', priority: 0.9, changefreq: 'weekly', lastmod: today },
  ];
  
  // Pages HTML statiques des villes principales
  const htmlPages = [
    '/toulouse.html', 
    '/blagnac.html', 
    '/colomiers.html', 
    '/tournefeuille.html', 
    '/muret.html', 
    '/ramonville.html', 
    '/saint-gaudens.html',
    '/balma.html',
    '/cugnaux.html',
    '/lunion.html',
    '/saint-orens.html',
    '/plaisance.html'
  ];
  
  htmlPages.forEach(page => {
    pages.push({ 
      url: page, 
      priority: 0.8, 
      changefreq: 'weekly', 
      lastmod: today 
    });
  });
  
  // Pages de départements
  const departmentPages = [
    '/ariege.html',
    '/aude.html',
    '/aveyron.html',
    '/gard.html'
  ];
  
  departmentPages.forEach(page => {
    pages.push({ 
      url: page, 
      priority: 0.8, 
      changefreq: 'monthly', 
      lastmod: today 
    });
  });
  
  // Ajout dynamique des villes de cities.json
  cities.forEach(city => {
    // Éviter les doublons avec les pages HTML statiques
    const isDuplicate = htmlPages.some(page => page.includes(city.id));
    if (!isDuplicate) {
      pages.push({ 
        url: `/securite-ville-${city.id}`, 
        priority: 0.7, 
        changefreq: 'monthly', 
        lastmod: today 
      });
    }
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <priority>${page.priority || 0.5}</priority>
      <changefreq>${page.changefreq || 'monthly'}</changefreq>
      <lastmod>${page.lastmod || today}</lastmod>
    </url>
  `).join('')}
</urlset>`;

  const sitemapPath = resolve(__dirname, '../../public/sitemap.xml');
  writeFileSync(sitemapPath, sitemap);
  
  console.log('Sitemap généré avec succès, incluant toutes les villes et départements');
}

// Exécuter la génération du sitemap si ce fichier est appelé directement
if (require.main === module) {
  generateSitemap();
}
