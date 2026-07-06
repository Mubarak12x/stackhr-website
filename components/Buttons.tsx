import type { ReactNode } from 'react';

const PRIMARY_CLS =
  'inline-flex items-center justify-center rounded-full bg-[#0066FF] px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0052cc] hover:shadow-[0_0_24px_rgba(0,102,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2';

const OUTLINE_CLS =
  'inline-flex items-center justify-center rounded-full border-2 border-[#0066FF] bg-transparent px-7 py-3 text-sm font-semibold text-[#0066FF] transition hover:bg-[#0066FF] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2 dark:text-[#4d94ff] dark:hover:text-white';

/** Primary solid CTA — renders <span> for use as a CalendlyEmbed trigger, or <a> when href is provided */
export function PrimaryButton({
  children,
  className = '',
  href,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  const cls = `${PRIMARY_CLS} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return <span className={cls}>{children}</span>;
}

/** Secondary outline CTA — always renders as <a> */
export function OutlineButton({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${OUTLINE_CLS} ${className}`}>
      {children}
    </a>
  );
}
