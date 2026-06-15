export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';

interface BlogPost {
  id: number;
  caption: string;
  imageFileId: string;
  websitePublishedAt: string;
}

async function getPosts(): Promise<BlogPost[]> {
  const url = process.env.BLOG_API_URL;
  if (!url) return [];
  try {
    const res = await fetch(url, { cache: 'no-store' });
    return await res.json();
  } catch {
    return [];
  }
}

function formatDate(iso: string) {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-MY', {
      day: 'numeric', month: 'long', year: 'numeric'
    });
  } catch { return ''; }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const posts = await getPosts();
  const post = posts.find(p => String(p.id) === id);
  if (!post) return { title: 'Post Not Found | August Advisory' };

  const title = post.caption.split('\n')[0].slice(0, 60) || 'Blog | August Advisory';
  const description = post.caption.replace(/\n+/g, ' ').trim().slice(0, 160);
  const image = post.imageFileId
    ? `https://drive.google.com/thumbnail?id=${post.imageFileId}&sz=w1200`
    : undefined;

  return {
    title: `${title} | August Advisory`,
    description,
    openGraph: {
      title: `${title} | August Advisory`,
      description,
      url: `https://www.augustadvisory.com.my/blog/${id}`,
      siteName: 'August Advisory',
      ...(image && { images: [{ url: image, width: 1200, height: 1200 }] }),
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | August Advisory`,
      description,
      ...(image && { images: [image] }),
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const posts = await getPosts();
  const post = posts.find(p => String(p.id) === id);

  if (!post) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center py-20" style={{ color: '#5A6C7D' }}>
          <p className="text-xl font-semibold mb-4" style={{ color: '#2C3E50' }}>Post not found</p>
          <a href="/blog" className="text-sm font-semibold" style={{ color: '#348981' }}>← Back to Blog</a>
        </div>
      </div>
    );
  }

  const paragraphs = post.caption.split(/\n\n+/).filter(Boolean);

  return (
    <div className="bg-white">
      {/* Hero image */}
      {post.imageFileId && (
        <div className="flex justify-center py-8 px-6" style={{ backgroundColor: '#E8F5F3' }}>
          <div className="w-full max-w-lg aspect-square overflow-hidden rounded-2xl">
            <img
              src={`https://drive.google.com/thumbnail?id=${post.imageFileId}&sz=w1200`}
              alt={post.caption.split('\n')[0].slice(0, 80)}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <a href="/blog" className="text-sm font-semibold mb-8 inline-block" style={{ color: '#348981' }}>
            ← Back to Blog
          </a>

          <p className="text-sm font-semibold mb-6" style={{ color: '#348981' }}>
            {formatDate(post.websitePublishedAt)}
          </p>

          <div className="space-y-5">
            {paragraphs.length > 0 ? paragraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: '#2C3E50', whiteSpace: 'pre-wrap' }}>
                {para}
              </p>
            )) : (
              <p className="text-base leading-relaxed" style={{ color: '#2C3E50', whiteSpace: 'pre-wrap' }}>
                {post.caption}
              </p>
            )}
          </div>

          {/* WhatsApp Channel CTA */}
          <div className="mt-14 p-8 rounded-2xl flex flex-col sm:flex-row items-center gap-6" style={{ backgroundColor: '#E8F5F3' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#348981" viewBox="0 0 24 24" className="flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <div className="flex-1 text-center sm:text-left">
              <p className="font-bold text-base mb-1" style={{ color: '#2C3E50' }}>Get more updates like this</p>
              <p className="text-sm" style={{ color: '#5A6C7D' }}>Follow our WhatsApp channel for the latest tax, SST and compliance news.</p>
            </div>
            <a
              href="https://whatsapp.com/channel/0029Vb8EDWHBKfhzGpiHA90c"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-6 py-3 rounded-full font-bold text-white hover:opacity-90 transition text-sm"
              style={{ backgroundColor: '#348981' }}
            >
              Follow Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
