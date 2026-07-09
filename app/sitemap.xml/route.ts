import { blogPosts } from '../../lib/blog-posts';

const BASE = 'https://www.stackhr.app';

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

const today = new Date().toISOString().split('T')[0];

const staticEntries: SitemapEntry[] = [
  { url: BASE,                          lastmod: today, changefreq: 'weekly',  priority: '1.0' },
  { url: `${BASE}/blog`,                lastmod: today, changefreq: 'weekly',  priority: '0.9' },
  { url: `${BASE}/compliance`,          lastmod: today, changefreq: 'monthly', priority: '0.6' },
  { url: `${BASE}/data-processing`,     lastmod: today, changefreq: 'monthly', priority: '0.5' },
  { url: `${BASE}/privacy`,             lastmod: today, changefreq: 'monthly', priority: '0.5' },
  { url: `${BASE}/terms`,               lastmod: today, changefreq: 'monthly', priority: '0.5' },
];

function buildXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${e.url}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export function GET() {
  const blogEntries: SitemapEntry[] = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastmod: post.date,
    changefreq: 'monthly',
    priority: '0.7',
  }));

  const xml = buildXml([...staticEntries, ...blogEntries]);

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
