import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Googlebot', 'Bingbot'],
        allow: '/',
      },
    ],
    sitemap: 'https://www.augustadvisory.com.my/sitemap.xml',
  };
}
