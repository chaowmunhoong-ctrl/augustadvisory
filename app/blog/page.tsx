export const revalidate = 300;

import type { Metadata } from 'next';
import { getBlogPosts } from '../lib/blog';
import TrackedLink from '../components/TrackedLink';
import NewsletterSection from '../components/NewsletterSection';

export const metadata: Metadata = {
  title: 'Blog | August Advisory',
  description: 'Practical insights on income tax, SST, e-Invoice and company compliance for Malaysian business owners.',
  openGraph: {
    title: 'Blog | August Advisory',
    description: 'Practical insights on income tax, SST, e-Invoice and company compliance for Malaysian business owners.',
    url: 'https://www.augustadvisory.com.my/blog',
    siteName: 'August Advisory',
    type: 'website',
  },
};

const getPosts = () => getBlogPosts();

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
          <style>{`
            .post-card:active .read-more { color: #1a4f4c !important; }
            .nav-pill:active { background-color: #348981 !important; color: #fff !important; transform: scale(0.95); }
            .read-more:active { color: #1a4f4c !important; }
          `}</style>
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
                        loading="lazy"
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
                      className="read-more mt-4 text-sm font-semibold hover:opacity-70 transition inline-block"
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
          {totalPages > 1 && (() => {
            const getPageNumbers = (current: number, total: number): (number | '...')[] => {
              if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
              const pages: (number | '...')[] = [1];
              if (current > 3) pages.push('...');
              for (let p = Math.max(2, current - 1); p <= Math.min(total - 1, current + 1); p++) pages.push(p);
              if (current < total - 2) pages.push('...');
              pages.push(total);
              return pages;
            };
            return (
              <div className="flex justify-center items-center gap-2 mt-14">
                {page > 1 && (
                  <a
                    href={`/blog?page=${page - 1}`}
                    className="nav-pill px-4 py-2 rounded-lg text-sm font-semibold border transition hover:opacity-80"
                    style={{ borderColor: '#348981', color: '#348981' }}
                  >
                    ← Prev
                  </a>
                )}
                {getPageNumbers(page, totalPages).map((p, i) =>
                  p === '...' ? (
                    <span key={`ellipsis-${i}`} className="w-9 h-9 flex items-center justify-center text-sm" style={{ color: '#5A6C7D' }}>…</span>
                  ) : (
                    <a
                      key={p}
                      href={`/blog?page=${p}`}
                      className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold transition"
                      style={p === page ? { backgroundColor: '#348981', color: '#fff' } : { border: '1px solid #d1d5db', color: '#5A6C7D' }}
                    >
                      {p}
                    </a>
                  )
                )}
                {page < totalPages && (
                  <a
                    href={`/blog?page=${page + 1}`}
                    className="nav-pill px-4 py-2 rounded-lg text-sm font-semibold border transition hover:opacity-80"
                    style={{ borderColor: '#348981', color: '#348981' }}
                  >
                    Next →
                  </a>
                )}
              </div>
            );
          })()}
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
