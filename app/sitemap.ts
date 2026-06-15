import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.augustadvisory.com.my';

async function getBlogPosts() {
  const url = process.env.BLOG_API_URL;
  if (!url) return [];
  try {
    const res = await fetch(url, { cache: 'no-store' });
    return await res.json();
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/services`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/team`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/blog`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: 'monthly' },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.map((post: { id: number; websitePublishedAt: string }) => ({
    url: `${BASE_URL}/blog/${post.id}`,
    lastModified: post.websitePublishedAt ? new Date(post.websitePublishedAt) : new Date(),
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticPages, ...blogPages];
}
