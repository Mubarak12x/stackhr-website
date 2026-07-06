import type { ReactNode } from 'react';
import Link from 'next/link';

const LAST_UPDATED = 'July 6, 2026';

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF] transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2"
        >
          &larr; Back to StackHR
        </Link>

        <h1 className="mt-8 text-3xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Last updated: {LAST_UPDATED}</p>

        <div className="mt-6 rounded-2xl border border-[#0066FF]/20 bg-[#0066FF]/5 p-5 dark:border-[#0066FF]/30 dark:bg-[#0066FF]/10">
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
            <strong className="font-semibold text-slate-900 dark:text-white">Beta notice: </strong>
            StackHR is currently in limited beta. This policy will be expanded as we move toward general
            availability.
          </p>
        </div>

        <div className="mt-10">{children}</div>
      </div>
    </main>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-slate-950 dark:text-white">{heading}</h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-slate-700 dark:text-slate-200">{children}</div>
    </section>
  );
}
