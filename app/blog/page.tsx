import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '../../lib/blog-posts';

export const metadata: Metadata = {
  title: 'Blog | StackHR',
  description: 'Product updates, compliance guides, and insights for African HR and finance teams.',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));

export default function BlogPage() {
  return (
    <main className="container py-16 md:py-24">
      <div className="space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric-blue">StackHR Blog</p>
        <h1 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
          Product updates &amp; insights
        </h1>
        <p className="mx-auto max-w-xl text-sm leading-7 text-slate-700 dark:text-slate-300">
          Guides, feature announcements, and compliance resources for African HR and finance teams.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {sorted.map((post) => (
          <article
            key={post.slug}
            className="glass-card flex flex-col rounded-[24px] border border-slate-200/50 p-8 dark:border-slate-700/50"
          >
            <div className="flex items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric-blue">
                {formatDate(post.date)}
              </p>
              {post.category && (
                <span className="rounded-full bg-electric-blue/10 px-2.5 py-0.5 text-xs font-semibold text-electric-blue dark:bg-electric-blue/20">
                  {post.category}
                </span>
              )}
            </div>
            <h2 className="mt-3 text-lg font-bold text-slate-950 dark:text-white">{post.title}</h2>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-700 dark:text-slate-200">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 inline-flex items-center text-sm font-semibold text-[#0066FF] transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
