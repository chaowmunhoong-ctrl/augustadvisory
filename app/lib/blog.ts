// Blog posts come from two Apps Script feeds:
// BLOG_API_URL = FBScheduler (numeric ids), Blog Scheduler = staff blog posts (ids like "b1").
const BLOG_SCHEDULER_API_URL =
  process.env.BLOG_SCHEDULER_API_URL ||
  'https://script.google.com/macros/s/AKfycbygT_z9fP01dn_9vNs4NHTTV8PnesSk_Yk8qBpENnoC-Rk8WuUujsWn6HcB8KHFQsAz/exec?action=getBlogPosts';

export interface BlogPost {
  id: number | string;
  caption: string;
  imageFileId: string;
  websitePublishedAt: string;
}

async function fetchFeed(url: string | undefined, init: RequestInit): Promise<BlogPost[]> {
  if (!url) return [];
  try {
    const res = await fetch(url, init);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

// Newest first, across both feeds
export async function getBlogPosts(init: RequestInit = { cache: 'no-store' }): Promise<BlogPost[]> {
  const [fb, blog] = await Promise.all([
    fetchFeed(process.env.BLOG_API_URL, init),
    fetchFeed(BLOG_SCHEDULER_API_URL, init),
  ]);
  return [...fb, ...blog].sort(
    (a, b) => new Date(b.websitePublishedAt).getTime() - new Date(a.websitePublishedAt).getTime()
  );
}
