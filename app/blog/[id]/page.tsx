export const dynamic = 'force-dynamic';

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
              alt=""
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

          {/* CTA */}
          <div className="mt-14 p-8 rounded-2xl text-center" style={{ backgroundColor: '#E8F5F3' }}>
            <p className="text-lg font-bold mb-2" style={{ color: '#2C3E50' }}>Have questions about this topic?</p>
            <p className="text-sm mb-6" style={{ color: '#5A6C7D' }}>Our team is happy to help you understand how this applies to your business.</p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-full font-bold text-white hover:opacity-90 transition"
              style={{ backgroundColor: '#348981' }}
            >
              Talk to Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
