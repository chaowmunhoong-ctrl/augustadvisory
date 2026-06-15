export const revalidate = 0;

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

function excerpt(caption: string, max = 160) {
  const plain = caption.replace(/\n+/g, ' ').trim();
  return plain.length > max ? plain.slice(0, max) + '…' : plain;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="bg-white">
      {/* Hero */}
      <section style={{ backgroundColor: '#E8F5F3' }} className="pt-12 sm:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg font-bold tracking-widest uppercase mb-4" style={{ color: '#348981' }}>INSIGHTS</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: '#2C3E50' }}>
            Tax, SST and Business Updates
          </h1>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A6C7D' }}>
            Practical insights on income tax, SST, e-Invoice and company compliance for Malaysian business owners.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20" style={{ color: '#5A6C7D' }}>
              <p className="text-lg">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map(post => (
                <a
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col"
                >
                  {post.imageFileId && (
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      <img
                        src={`https://drive.google.com/thumbnail?id=${post.imageFileId}&sz=w600`}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs font-semibold mb-3" style={{ color: '#348981' }}>
                      {formatDate(post.websitePublishedAt)}
                    </p>
                    <p className="text-base leading-relaxed flex-1" style={{ color: '#2C3E50' }}>
                      {excerpt(post.caption)}
                    </p>
                    <p className="mt-4 text-sm font-semibold" style={{ color: '#348981' }}>
                      Read more →
                    </p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
