import { getPostBySlug } from '@/lib/posts';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return {
    title: `${post?.title} | August Advisory`,
    description: post?.excerpt,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-3xl mx-auto px-6 py-12">
          <p className="text-gray-600">Post not found.</p>
          <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium mt-4 inline-block">
            ← Back to home
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <Link href="/" className="text-blue-700 hover:text-blue-900 font-medium mb-4 inline-block">
            ← Back to home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mt-4">{post.title}</h1>
          <p className="text-gray-600 mt-4">
            {new Date(post.date).toLocaleDateString('en-MY', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            • By {post.author}
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <article className="bg-white p-8 rounded-lg shadow prose prose-lg max-w-none">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </article>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p>&copy; 2026 August Advisory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
