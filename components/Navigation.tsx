'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { CalendlyEmbed } from './CalendlyEmbed';

const TAGLINE = 'Manage your people, payroll, and business spending in one place';

const navLinks = [
  { label: 'Pricing', href: '#pricing' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#updates' },
  { label: 'Status', href: '#status' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass dark:glass-dark sticky top-0 z-50 rounded-none border-x-0 border-t-0 transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
      <div className="container flex items-center justify-between gap-6 py-4">
        <a href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element -- SVG logo, not eligible for next/image optimization */}
          <img src="/icons/stackhr-logo.svg" alt="StackHR" width={44} height={44} className="h-11 w-11" />
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] uppercase text-slate-800 dark:text-slate-100">StackHR</p>
            <p className="max-w-[220px] text-[11px] leading-tight text-slate-500 dark:text-slate-400">{TAGLINE}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-electric-blue dark:hover:text-electric-blue">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <CalendlyEmbed
            trigger={
              <span className="glow-blue-hover btn-hover-bright hidden items-center gap-2 rounded-full bg-electric-blue px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-electric-blue/20 transition hover:-translate-y-0.5 sm:inline-flex">
                Book Demo
              </span>
            }
          />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/60 bg-white/70 text-slate-700 dark:border-slate-700/60 dark:bg-zinc-900/70 dark:text-slate-200 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass dark:glass-dark rounded-none border-x-0 border-b-0 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="transition hover:text-electric-blue">
                {link.label}
              </a>
            ))}
            <CalendlyEmbed
              trigger={
                <span className="btn-hover-bright inline-flex items-center justify-center gap-2 rounded-full bg-electric-blue px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-electric-blue/20 transition">
                  Book Demo
                </span>
              }
            />
          </nav>
        </div>
      )}
    </div>
  );
}
