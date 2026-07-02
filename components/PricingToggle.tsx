'use client';

import { useState } from 'react';

export function PricingToggle({ onChange }: { onChange: (annual: boolean) => void }) {
  const [annual, setAnnual] = useState(false);

  function handleToggle() {
    setAnnual((value) => {
      const next = !value;
      onChange(next);
      return next;
    });
  }

  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/60 bg-white/70 px-2.5 py-2 shadow-sm backdrop-blur-md transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] dark:border-slate-700/50 dark:bg-zinc-900/70">
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Monthly</span>
      <button
        type="button"
        onClick={handleToggle}
        className={`relative inline-flex h-7 w-14 flex-shrink-0 items-center rounded-full p-1 transition ${annual ? 'bg-electric-blue/90' : 'bg-slate-300 dark:bg-slate-600'}`}
        aria-pressed={annual}
      >
        <span className={`h-5 w-5 rounded-full bg-white shadow-sm transition transform ${annual ? 'translate-x-7' : 'translate-x-0'}`} />
      </button>
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Annual</span>
      <span className="ml-3 rounded-full bg-electric-blue/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-electric-blue">20% off</span>
    </div>
  );
}
