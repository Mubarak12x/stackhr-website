'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/60 bg-white/70 text-slate-700 shadow-sm transition hover:border-slate-300 dark:border-slate-700/70 dark:bg-zinc-900/70 dark:text-slate-200">...</button>;
  }

  const currentTheme = resolvedTheme === 'dark' ? 'dark' : 'light';
  const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(nextTheme)}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/50 bg-white/70 text-slate-700 shadow-sm transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-slate-300 dark:border-slate-700/70 dark:bg-zinc-900/70 dark:text-slate-100"
    >
      {currentTheme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
