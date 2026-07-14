import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '../../../components/JsonLd';
import { blogPosts } from '../../../lib/blog-posts';
import { OutlineButton } from '../../../components/Buttons';

const SITE_URL = 'https://www.stackhr.app';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  const title = `${post.title} | StackHR Blog`;
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: post.excerpt,
      url,
      siteName: 'StackHR',
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const postJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: `${post.title} | StackHR Blog`,
        description: post.excerpt,
        datePublished: post.date,
        isPartOf: { '@id': `${SITE_URL}/#website` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="container py-16 md:py-24">
      <JsonLd data={postJsonLd} />
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF] transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2"
      >
        ← Back to Blog
      </Link>

      <article className="mx-auto mt-10 max-w-2xl">
        <div className="flex flex-wrap items-center gap-3">
          <time
            dateTime={post.date}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-electric-blue"
          >
            {formatDate(post.date)}
          </time>
          {post.category && (
            <span className="rounded-full bg-electric-blue/10 px-2.5 py-0.5 text-xs font-semibold text-electric-blue dark:bg-electric-blue/20">
              {post.category}
            </span>
          )}
        </div>

        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-4xl">
          {post.title}
        </h1>

        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{post.excerpt}</p>

        <hr className="my-8 border-slate-200/60 dark:border-slate-700/60" />

        <div className="space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base leading-8 text-slate-700 dark:text-slate-200">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 rounded-[24px] border border-slate-200/50 bg-electric-blue/5 p-8 dark:border-slate-700/50 dark:bg-electric-blue/10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-slate-950 dark:text-white">Ready to get started?</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Join the StackHR beta — free for your first 10 employees.
            </p>
          </div>
          <OutlineButton href="https://app.stackhr.app/login" className="flex-shrink-0">
            Start Free Trial
          </OutlineButton>
        </div>
      </article>
    </main>
  );
}
