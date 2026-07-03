'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/mubarakmakama12/30min';

export function CalendlyEmbed({ trigger }: { trigger: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        {trigger}
      </button>

      {mounted && open
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Book a demo with StackHR"
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            >
              <div
                onClick={(event) => event.stopPropagation()}
                className="relative h-[80vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200/60 bg-white shadow-2xl dark:border-slate-700/60 dark:bg-zinc-900"
              >
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md dark:bg-zinc-800/90 dark:text-slate-200"
                >
                  <X className="h-5 w-5" />
                </button>
                <iframe
                  title="Book a demo with StackHR"
                  src={CALENDLY_URL}
                  className="h-full w-full border-0"
                />
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
