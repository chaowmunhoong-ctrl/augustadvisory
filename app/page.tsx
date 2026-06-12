import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
  title: 'August Advisory - Accounting & Tax Insights',
  description: 'Updates and insights on tax, SST, Companies Act, and accounting topics for Malaysian businesses.',
};

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900">August Advisory</h1>
          <p className="text-lg text-gray-600 mt-2">Accounting & CFO Advisory for Malaysian Businesses</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Updates</h2>

          {posts.length === 0 ? (
            <p className="text-gray-600">No posts yet.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                >
                  <Link href={`/posts/${post.slug}`}>
                    <h3 className="text-xl font-bold text-blue-700 hover:text-blue-900 cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-sm text-gray-500 mt-2">
                    {new Date(post.date).toLocaleDateString('en-MY', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-gray-700 mt-3">{post.excerpt}</p>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="inline-block mt-4 text-blue-700 hover:text-blue-900 font-medium"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p>&copy; 2026 August Advisory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
