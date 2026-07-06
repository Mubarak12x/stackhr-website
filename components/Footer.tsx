import { AtSign, Code2, Hash, Link2, Mail } from 'lucide-react';

const TAGLINE = 'Manage your people, payroll, and business spending in one place';

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Pricing', href: '#pricing' },
      { label: 'Features', href: '#features' },
      { label: 'Security & Data', href: '/data-processing' },
      { label: 'Compliance', href: '#status' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About StackHR', href: '#about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: 'mailto:hello@stackhr.app' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Compliance (NDPA)', href: '/compliance' },
      { label: 'Data Processing', href: '/data-processing' },
    ],
  },
];

const socialLinks = [
  { label: 'Twitter/X', href: 'https://twitter.com/stackhr', icon: Hash },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/stackhr/', icon: Link2 },
  { label: 'Instagram', href: 'https://www.instagram.com/stack_hr', icon: AtSign },
  { label: 'Email', href: 'mailto:hello@stackhr.app', icon: Mail },
  { label: 'GitHub', href: 'https://github.com/stackhr', icon: Code2 },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200/60 bg-white/70 dark:border-slate-800/60 dark:bg-zinc-950/60">
      <div className="container py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-electric-blue">{column.title}</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-electric-blue">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-electric-blue">Connect</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 bg-white/70 text-slate-700 transition hover:border-electric-blue hover:bg-electric-blue hover:text-white dark:border-slate-700/60 dark:bg-zinc-900/70 dark:text-slate-200"
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200/60 pt-8 dark:border-slate-800/60">
          <p className="text-sm text-slate-500 dark:text-slate-400">{TAGLINE}</p>
          <div className="mt-2 flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p>StackHR © 2026.</p>
            <p>Status: Beta Launch July 7, 2026</p>
            <p>Built for African businesses. Compliant with NDPA 2023.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
