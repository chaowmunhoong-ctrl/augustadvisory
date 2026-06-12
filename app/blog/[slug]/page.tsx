import { getPostBySlug } from '@/lib/posts';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  return {
    title: `${post?.title} | August Advisory Blog`,
    description: post?.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="bg-white">
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold">Post Not Found</h1>
          </div>
        </section>
        <main className="max-w-4xl mx-auto px-6 py-12">
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="text-blue-900 font-bold hover:underline">
            ← Back to Blog
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-blue-100 hover:text-white mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl font-bold mt-4">{post.title}</h1>
          <p className="text-blue-100 mt-4">
            {new Date(post.date).toLocaleDateString('en-MY', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            • By {post.author}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-lg max-w-none">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </article>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t">
          <Link href="/blog" className="text-blue-900 font-bold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </main>
    </div>
  );
}
