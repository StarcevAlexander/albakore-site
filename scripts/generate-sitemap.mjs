import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '../dist/albakore-site/browser');

const BASE_URL = 'https://rubmaster.ru';
const TODAY = new Date().toISOString().split('T')[0];

// ── Routes ────────────────────────────────────────────────────────────────────

const STATIC_ROUTES = [
  { path: '/',                 priority: '1.0', changefreq: 'weekly'  },
  { path: '/catalog',          priority: '0.9', changefreq: 'weekly'  },
  { path: '/installment',      priority: '0.8', changefreq: 'monthly' },
  { path: '/service',          priority: '0.8', changefreq: 'monthly' },
  { path: '/company-contacts', priority: '0.8', changefreq: 'monthly' },
  { path: '/gallery',          priority: '0.7', changefreq: 'monthly' },
  { path: '/video',            priority: '0.7', changefreq: 'monthly' },
  { path: '/docs',             priority: '0.7', changefreq: 'monthly' },
  { path: '/about',            priority: '0.6', changefreq: 'monthly' },
  { path: '/dealers',          priority: '0.6', changefreq: 'monthly' },
  { path: '/contacts',         priority: '0.6', changefreq: 'monthly' },
];

const CATALOG_SLUGS = [
  'mobi-120',
  'mobi-160',
  'mobi-200',
  'mobi-250',
  'mobi-261',
  'mobi-300',
  'mrg-300',
  'mrg-250-nav',
];

const CATALOG_ROUTES = CATALOG_SLUGS.map(slug => ({
  path: `/catalog/${slug}`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const ALL_ROUTES = [...STATIC_ROUTES, ...CATALOG_ROUTES];

// ── sitemap.xml ───────────────────────────────────────────────────────────────

const urls = ALL_ROUTES.map(r => `
  <url>
    <loc>${BASE_URL}${r.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

// ── robots.txt ────────────────────────────────────────────────────────────────

const robots = `User-agent: *
Allow: /

Disallow: /terms
Disallow: /privacy

Sitemap: ${BASE_URL}/sitemap.xml
`;

// ── Write files ───────────────────────────────────────────────────────────────

mkdirSync(outDir, { recursive: true });

writeFileSync(join(outDir, 'sitemap.xml'), sitemap, 'utf-8');
console.log(`✓ sitemap.xml  (${ALL_ROUTES.length} URLs)`);

writeFileSync(join(outDir, 'robots.txt'), robots, 'utf-8');
console.log(`✓ robots.txt`);
