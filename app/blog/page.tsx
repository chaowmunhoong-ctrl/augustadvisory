import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - August Advisory',
  description: 'Latest updates and insights on accounting, tax, and business topics.',
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-base sm:text-lg font-bold tracking-widest mb-4" style={{ color: '#348981' }}>INSIGHTS & UPDATES</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight" style={{ color: '#2C3E50' }}>
            Latest News & Insights
          </h1>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#5A6C7D' }}>
            Stay updated with the latest trends, tips, and insights on accounting, taxation, and financial management for Malaysian businesses.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts yet. Check back soon for updates!</p>
            </div>
          ) : (
            <div className="space-y-12">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="grid lg:grid-cols-3 gap-6 items-start rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  {/* Featured Image Placeholder */}
                  <div
                    className="lg:col-span-1 w-full flex items-center justify-center text-center rounded-lg"
                    style={{ backgroundColor: '#E8F5F3', minHeight: '200px' }}
                  >
                    <div>
                      <p className="text-sm font-semibold" style={{ color: '#348981' }}>Featured Image</p>
                      <p className="text-xs text-gray-500 mt-1">blog-{post.slug}.png</p>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="lg:col-span-2 border-l-4 pl-6" style={{ borderColor: '#348981' }}>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-2xl font-bold hover:opacity-80 cursor-pointer mb-3" style={{ color: '#348981' }}>
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-sm text-gray-500 mb-4">
                      {new Date(post.date).toLocaleDateString('en-MY', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}{' '}
                      • By {post.author}
                    </p>
                    <p className="text-gray-700 mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-bold hover:underline inline-block"
                      style={{ color: '#348981' }}
                    >
                      Read full article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
