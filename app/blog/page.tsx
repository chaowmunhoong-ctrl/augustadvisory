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

function excerpt(caption: string, max = 160) {
  const plain = caption.replace(/\n+/g, ' ').trim();
  return plain.length > max ? plain.slice(0, max) + '…' : plain;
}

const PER_PAGE = 9;

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, parseInt(pageParam || '1', 10));
  const allPosts = await getPosts();
  const totalPages = Math.ceil(allPosts.length / PER_PAGE);
  const posts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {posts.map(post => (
                <div
                  key={post.id}
                  className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
                >
                  {post.imageFileId && (
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={`https://drive.google.com/thumbnail?id=${post.imageFileId}&sz=w600`}
                        alt=""
                        className="w-full h-full object-cover"
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
                    <a
                      href={`/blog/${post.id}`}
                      className="mt-4 text-sm font-semibold hover:opacity-70 transition inline-block"
                      style={{ color: '#348981' }}
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-14">
              {page > 1 && (
                <a
                  href={`/blog?page=${page - 1}`}
                  className="px-4 py-2 rounded-lg text-sm font-semibold border transition hover:opacity-80"
                  style={{ borderColor: '#348981', color: '#348981' }}
                >
                  ← Prev
                </a>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <a
                  key={p}
                  href={`/blog?page=${p}`}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition"
                  style={
                    p === page
                      ? { backgroundColor: '#348981', color: '#fff' }
                      : { border: '1px solid #d1d5db', color: '#5A6C7D' }
                  }
                >
                  {p}
                </a>
              ))}
              {page < totalPages && (
                <a
                  href={`/blog?page=${page + 1}`}
                  className="px-4 py-2 rounded-lg text-sm font-semibold border transition hover:opacity-80"
                  style={{ borderColor: '#348981', color: '#348981' }}
                >
                  Next →
                </a>
              )}
            </div>
          )}
        </div>
      </section>

      {/* WhatsApp Channel Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" style={{ backgroundColor: '#E8F5F3' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-center">

            {/* Left: Text */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#348981" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <span className="text-sm font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white" style={{ backgroundColor: '#2C3E50' }}>August Advisory</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: '#2C3E50' }}>
                Stay <span style={{ color: '#348981' }}>Informed.</span><br />
                Stay <span style={{ color: '#348981' }}>Ahead.</span>
              </h2>

              <p className="text-base leading-relaxed mb-6" style={{ color: '#5A6C7D' }}>
                Get the latest tax, SST, e-Invoice, and regulatory updates directly on WhatsApp.
              </p>

              <div className="w-10 mb-6" style={{ borderTop: '3px solid #348981' }} />

              <ul className="space-y-3 mb-8">
                {[
                  'Income tax and SST updates',
                  'e-Invoice implementation and compliance guidance',
                  'LHDN, SSM, and Customs announcements',
                  'Business compliance tips and reminders',
                  'Practical insights for SME owners and entrepreneurs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5" style={{ backgroundColor: '#348981' }}>✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://whatsapp.com/channel/0029Vb8EDWHBKfhzGpiHA90c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-white hover:opacity-90 transition w-full sm:w-auto justify-center"
                style={{ backgroundColor: '#348981' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Follow Our WhatsApp Channel
              </a>
              <p className="text-xs mt-3" style={{ color: '#5A6C7D' }}>No spam. Unsubscribe anytime.</p>
            </div>

            {/* Right: Phone image */}
            <div className="lg:col-span-3 flex justify-center">
              <img
                src="/Images/channel.png"
                alt="August Advisory WhatsApp Channel"
                className="w-full object-contain drop-shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
