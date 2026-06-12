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
      {/* Header with Background Image */}
      <section
        className="text-white py-20 px-6 relative"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(52, 152, 129, 0.85), rgba(41, 128, 185, 0.85)), url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=400&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-5xl font-bold">Blog & Updates</h1>
          <p className="text-xl opacity-95 mt-3">Latest insights on accounting, tax, and business topics</p>
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
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border-l-4 pl-8 py-6 hover:bg-gray-50 px-6 rounded-r-lg transition"
                  style={{ borderColor: '#348981' }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold hover:opacity-80 cursor-pointer mb-2" style={{ color: '#348981' }}>
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-gray-500 mb-3">
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
                    className="font-bold hover:underline"
                    style={{ color: '#348981' }}
                  >
                    Read full article →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
