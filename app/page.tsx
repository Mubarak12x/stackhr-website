'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  AlertCircle,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  Globe2,
  Lock,
  Rocket,
  ShieldCheck,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CalendlyEmbed } from '../components/CalendlyEmbed';
import { PrimaryButton, OutlineButton } from '../components/Buttons';

const TAGLINE = 'Manage your people, payroll, and business spending in one place';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
};

const pillars = [
  {
    name: 'People Operations',
    headline: 'Manage Your Team End-to-End',
    cta: 'Explore People Ops',
    image: '/images/dashboard1.png',
    icon: '/icons/people-ops.svg',
    iconGradient: 'from-electric-blue to-blue-400',
    features: ['Employee Profiles & Documents', 'Leave Management', 'Automated Onboarding', 'Org Structure'],
  },
  {
    name: 'Payroll Operations',
    headline: 'Payroll Built for Africa',
    cta: 'Explore Payroll Ops',
    image: '/images/dashboard2.png',
    icon: '/icons/payroll-ops.svg',
    iconGradient: 'from-success to-emerald-400',
    features: [
      'Automated Payroll Runs',
      'Tax & Deduction Management',
      'NDPA 2023 Ready',
      'Salary Advances',
      'Multi-Currency Support',
    ],
  },
  {
    name: 'Spend Operations',
    headline: 'Control Company Spending',
    cta: 'Explore Spend Ops',
    image: '/images/dashboard3.png',
    icon: '/icons/spend-ops.svg',
    iconGradient: 'from-slate-blue to-purple-400',
    features: [
      'Expense Claims & Tracking',
      'Multi-Level Approvals',
      'Automatic Reimbursements',
      'Budget Management',
      'Audit Trail',
    ],
  },
];

const pricingTiers = [
  {
    name: 'Free',
    badge: 'For Individuals',
    price: '$0',
    suffix: '/month',
    description: null,
    features: ['Up to 10 employees', 'Basic profiles', 'Manual payroll', 'Leave requests', 'Community support'],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Growth',
    badge: 'Most Popular',
    price: '$6',
    suffix: '/month per seat',
    description: '14-day free trial, then $6/seat/month',
    features: [
      'Everything in Free',
      'Automated payroll',
      'Salary advances',
      'Basic reports',
      'Email support',
      'Basic Spend Ops',
    ],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Scale',
    badge: null,
    price: '$12',
    suffix: '/month per seat',
    description: null,
    features: [
      'Unlimited employees',
      'Everything in Growth',
      'Advanced approvals',
      'Full Spend Ops',
      'API access',
      'Priority support',
      'Custom reports',
    ],
    cta: 'Start Free Trial',
    highlight: false,
  },
  {
    name: 'Enterprise',
    badge: null,
    price: "Let's Talk",
    suffix: '',
    description: null,
    features: [
      'Everything in Scale',
      'White-label',
      'Dedicated CSM',
      'Custom integrations',
      'SLA',
      'On-premise option',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const includedBadges = [
  'NDPA 2023 compliance',
  '99.9% uptime SLA (Scale+)',
  'Encryption for NIN/BVN',
  'Paystack & bank transfers',
  'Monthly backups',
];

const testimonials = [
  {
    quote:
      'Before StackHR, our payroll took a full day every month. Now it’s automated, accurate, and our team gets paid on time every single time. We’ve saved 10+ hours per month.',
    attribution: 'Finance Lead, Tech Company (50+ employees)',
  },
  {
    quote:
      'Managing expense claims was chaos. StackHR’s approval workflow cut our reimbursement cycle from 2 weeks to 2 days. Our team loves the transparency.',
    attribution: 'Operations Manager, Fintech Startup (30+ employees)',
  },
  {
    quote:
      'As a growing African business, compliance is critical. StackHR handles NDPA requirements automatically. No more legal headaches—just confidence.',
    attribution: 'Founder & CEO, Agritech Platform (20+ employees)',
  },
];

const updates = [
  {
    date: 'July 7, 2026',
    title: 'StackHR Beta Launch: A New Way to Do HR in Africa',
    excerpt: "Today, we’re opening StackHR to a limited cohort of African SMEs. Here’s what’s inside on day one…",
    cta: 'Read Full Post',
    href: '/blog/stackhr-beta-launch',
  },
  {
    date: 'June 28, 2026',
    title: 'Introducing Salary Advances: Empower Your Team',
    excerpt:
      'Employees can now request salary advances directly from StackHR. We handle calculations, approvals, and deductions automatically.',
    cta: 'Learn More',
    href: '/blog/introducing-salary-advances',
  },
  {
    date: 'June 20, 2026',
    title: "NDPA 2023 Compliance: We’re Ready",
    excerpt: "StackHR is fully compliant with Nigeria’s National Data Protection Regulation. Here’s how we protect your data.",
    cta: 'Read Privacy Policy',
    href: '/privacy',
  },
];

const complianceItems = [
  {
    icon: Lock,
    title: 'NDPA 2023 Compliance',
    description:
      'Automatic compliance with Nigeria’s National Data Protection Regulation. Privacy & terms built to protect data.',
  },
  {
    icon: Globe2,
    title: 'Multi-Currency Support',
    description:
      'Support for NGN, USD, GBP, and other regional currencies. Built for African businesses with global ambitions.',
  },
  {
    icon: ShieldCheck,
    title: 'Encryption & Security',
    description:
      'NIN/BVN encrypted end-to-end. Enterprise-grade security. Zero-knowledge architecture—we can’t see your data.',
  },
];

const faqs = [
  {
    question: "What’s included in the Free tier?",
    answer: 'Employee profiles, leave management, and manual payroll. Perfect for getting started. Upgrade anytime.',
  },
  {
    question: 'Can I switch plans mid-month?',
    answer: 'Yes. We prorate charges automatically. Upgrade or downgrade anytime without penalty.',
  },
  {
    question: 'How is my data secured?',
    answer:
      'NDPA 2023 compliant, end-to-end encryption, regular backups, SOC 2 audits (Scale+). Your data never leaves Africa.',
  },
  {
    question: 'Do you offer onboarding or training?',
    answer: 'Free self-serve onboarding. Scale & Enterprise plans include dedicated support and training calls.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'Paystack, bank transfers, and credit cards (NGN & USD). Monthly or annual billing.',
  },
  {
    question: 'Can I export my data if I leave?',
    answer: 'Yes. Full data export in CSV/JSON anytime. No lock-in.',
  },
  {
    question: 'Is there an API for integrations?',
    answer: 'Yes. Scale & Enterprise plans include REST API access. Connect to your favorite tools.',
  },
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  // Waitlist form state
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [waitlistError, setWaitlistError] = useState('');
  const errorId = 'waitlist-error';

  useEffect(() => {
    function onScroll() {
      const bottom = heroRef.current?.getBoundingClientRect().bottom ?? 0;
      setShowStickyBar(bottom < 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  async function handleWaitlist(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setWaitlistError('');

    if (!waitlistEmail.trim() || !isValidEmail(waitlistEmail)) {
      setWaitlistError('Please enter a valid email address.');
      setWaitlistStatus('idle');
      return;
    }

    setWaitlistStatus('loading');
    try {
      // Replace with real endpoint when available
      await new Promise((resolve) => setTimeout(resolve, 900));
      setWaitlistStatus('success');
      setWaitlistEmail('');
    } catch {
      setWaitlistStatus('error');
      setWaitlistError('Something went wrong. Please try again.');
    }
  }

  const hasError = !!waitlistError;

  return (
    <main className="min-h-screen pb-20 md:pb-16">
      {/* ── A. Hero ───────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center"
      >
        <div className="gradient-hero pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.14]" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-10 h-72 w-72 animate-blob rounded-full bg-electric-blue/30 blur-3xl filter" />
          <div className="absolute -right-10 top-40 h-72 w-72 animate-blob rounded-full bg-success/20 blur-3xl filter [animation-delay:2s]" />
          <div className="absolute bottom-10 left-1/3 h-72 w-72 animate-blob rounded-full bg-slate-blue/20 blur-3xl filter [animation-delay:4s]" />
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Issue 2: extrabold, clear dominant h1 */}
            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-slate-950 dark:text-white sm:text-6xl">
              Complete HR, Payroll &{' '}
              <span className="gradient-text">Spend Control</span>{' '}
              for African SMEs
            </h1>

            {/* Supporting subline — one clear description, no competing tagline above it */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              All-in-one people operations, payroll automation, and expense management built for Nigerian and
              African businesses. From employee onboarding to salary advances—everything in one platform.
            </p>

            {/* Issue 1+3: Primary solid CTA (full-width mobile), secondary outline (no glass) */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CalendlyEmbed
                trigger={
                  <PrimaryButton className="w-full min-h-[52px] sm:w-auto">Book Demo</PrimaryButton>
                }
              />
              <OutlineButton
                href="https://app.stackhr.app/login"
                className="w-full min-h-[52px] sm:w-auto"
              >
                Start Free Trial
              </OutlineButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="glass dark:glass-dark float pointer-events-none absolute -right-4 top-1/3 hidden flex-col items-start gap-1 px-5 py-4 shadow-lg lg:flex"
          >
            <p className="text-2xl font-semibold text-slate-950 dark:text-white">50+ SMEs</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Already in beta</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="float absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 text-slate-400 dark:text-slate-500" />
        </motion.div>
      </section>

      {/* ── B. Launch Banner + Waitlist Form (Issue 5+10) ── */}
      <section className="container py-0">
        <motion.div
          {...fadeUp}
          className="glass-card rounded-[24px] border border-slate-200/50 p-6 dark:border-slate-700/50"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
              🚀 <span className="font-semibold">Beta Launch: July 7, 2026</span> — StackHR opens to limited
              African SMEs. Early adopters get lifetime free tier access.
            </p>

            {waitlistStatus === 'success' ? (
              <div className="flex flex-shrink-0 items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-sm font-semibold text-success">
                <CheckCircle2 className="h-4 w-4" />
                You&apos;re on the list!
              </div>
            ) : (
              <form onSubmit={handleWaitlist} className="flex flex-shrink-0 flex-col gap-2" noValidate>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="waitlist-email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="waitlist-email"
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={waitlistEmail}
                      onChange={(e) => {
                        setWaitlistEmail(e.target.value);
                        if (waitlistError) setWaitlistError('');
                        if (waitlistStatus === 'error') setWaitlistStatus('idle');
                      }}
                      aria-invalid={hasError || undefined}
                      aria-describedby={hasError ? errorId : undefined}
                      className={`h-12 w-full min-w-[200px] rounded-full border px-4 text-sm text-slate-900 placeholder-slate-400 transition focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:ring-offset-2 dark:bg-zinc-900 dark:text-white dark:placeholder-slate-500 ${
                        hasError
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-300 dark:border-slate-600'
                      }`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={waitlistStatus === 'loading'}
                    className="h-12 flex-shrink-0 rounded-full bg-[#0066FF] px-5 text-sm font-semibold text-white transition hover:bg-[#0052cc] disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2"
                  >
                    {waitlistStatus === 'loading' ? 'Joining…' : 'Join Waitlist'}
                  </button>
                </div>

                {/* Issue 5: inline error message with icon, red border, aria wiring */}
                {hasError && (
                  <p id={errorId} role="alert" className="flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                    <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                    {waitlistError}
                  </p>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </section>

      {/* ── C. Three Pillars ─────────────────────────────── */}
      <section id="features" className="container py-16 md:py-24">
        <motion.div {...fadeUp} className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric-blue">What StackHR does</p>
          {/* Issue 8: extrabold h2 */}
          <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
            Three pillars, one platform.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.name}
              {...fadeUp}
              whileHover={{ scale: 1.02 }}
              className="glow-blue-hover glass-card flex flex-col rounded-[24px] border border-slate-200/50 p-5 transition-shadow dark:border-slate-700/50 md:p-8"
            >
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.iconGradient} p-3`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- decorative SVG icon */}
                <img src={pillar.icon} alt="" className="h-full w-full" />
              </div>
              {/* Issue 8: clear h3 weight */}
              <h3 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">{pillar.headline}</h3>
              {/* Issue 7: text-slate-700 (light) / text-slate-200 (dark) for body on glass */}
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-electric-blue" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/40 dark:border-slate-700/40">
                <Image
                  src={pillar.image}
                  alt={`${pillar.name} dashboard preview`}
                  width={450}
                  height={300}
                  className="h-auto max-h-[220px] w-full object-cover md:max-h-none"
                />
              </div>
              <a
                href="#pricing"
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#0066FF] transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2"
              >
                {pillar.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── D. About ─────────────────────────────────────── */}
      <section id="about" className="container py-16 md:py-24">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric-blue">About StackHR</p>
          <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
            Built for African businesses, from day one.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300">
            StackHR brings People Operations, Payroll, and Spend Management into a single platform designed
            for the realities of running a business in Africa — multi-currency payroll, NDPA-aligned data
            handling, and workflows built around how African SMEs actually operate. We launched in beta on
            July 7, 2026, with a focused cohort of Nigerian businesses, and we are building in public.
          </p>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-700 dark:text-slate-300">
            Questions or feedback?{' '}
            <a
              href="mailto:hello@stackhr.app"
              className="font-semibold text-[#0066FF] transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2"
            >
              hello@stackhr.app
            </a>
          </p>
        </motion.div>
      </section>

      {/* ── E. Pricing ───────────────────────────────────── */}
      <section id="pricing" className="container py-16 md:py-24">
        <motion.div {...fadeUp} className="space-y-4 text-center">
          <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
            Per-seat monthly billing. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              {...fadeUp}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`glow-blue-hover glass-card flex flex-col rounded-[24px] border p-8 transition-shadow dark:border-slate-700/50 ${
                tier.highlight
                  ? 'border-electric-blue/40 bg-gradient-to-b from-electric-blue/5 to-transparent shadow-[0_0_30px_rgba(0,102,255,0.15)]'
                  : ''
              }`}
            >
              {tier.badge && (
                <span
                  className={`mb-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
                    tier.highlight
                      ? 'bg-gradient-to-r from-electric-blue to-success text-white'
                      : 'bg-electric-blue/10 text-electric-blue'
                  }`}
                >
                  {tier.badge}
                </span>
              )}
              <p className="text-lg font-bold text-slate-950 dark:text-white">{tier.name}</p>
              <div className="mt-4">
                <p className="text-3xl font-extrabold text-slate-950 dark:text-white">
                  {tier.price}
                  <span className="text-base font-normal text-slate-600 dark:text-slate-300">{tier.suffix}</span>
                </p>
                {/* Issue 7: upgraded from slate-500/slate-400 */}
                {tier.description && (
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">{tier.description}</p>
                )}
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-electric-blue" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={tier.name === 'Enterprise' ? 'mailto:hello@stackhr.app' : 'https://app.stackhr.app/login'}
                target={tier.name === 'Enterprise' ? undefined : '_blank'}
                rel={tier.name === 'Enterprise' ? undefined : 'noopener noreferrer'}
                className={`mt-8 inline-flex min-h-[44px] w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2 ${
                  tier.highlight
                    ? 'bg-[#0066FF] text-white shadow-lg hover:bg-[#0052cc]'
                    : 'border-2 border-[#0066FF] bg-transparent text-[#0066FF] hover:bg-[#0066FF] hover:text-white dark:text-[#4d94ff] dark:hover:text-white'
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-700 dark:text-slate-200"
        >
          <span className="font-bold text-slate-900 dark:text-white">All plans include:</span>
          {includedBadges.map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4 text-success" /> {badge}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ── E. Testimonials ──────────────────────────────── */}
      <section className="container py-16 md:py-24">
        <motion.div {...fadeUp} className="space-y-4 text-center">
          <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
            Trusted by Forward-Thinking Companies
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300">From fintech startups to agritech scale-ups.</p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.attribution}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.12 }}
              whileHover={{ scale: 1.02 }}
              className="glow-blue-hover glass-card rounded-[24px] border border-slate-200/50 p-8 transition-shadow dark:border-slate-700/50"
            >
              <BadgeCheck className="h-8 w-8 text-success" />
              {/* Issue 7: text-slate-700/slate-200 instead of slate-600/slate-300 */}
              <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-200">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-bold text-slate-900 dark:text-white">{testimonial.attribution}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── F. Recent Updates ────────────────────────────── */}
      <section id="updates" className="container py-16 md:py-24">
        <motion.div {...fadeUp} className="space-y-4 text-center">
          <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">Latest Updates</h2>
          <p className="text-sm text-slate-700 dark:text-slate-300">Stay in the loop on new features and releases</p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {updates.map((update) => (
            <motion.div
              key={update.title}
              {...fadeUp}
              className="glass-card flex flex-col rounded-[24px] border border-slate-200/50 p-8 dark:border-slate-700/50"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric-blue">{update.date}</p>
              <h3 className="mt-3 text-lg font-bold text-slate-950 dark:text-white">{update.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-700 dark:text-slate-200">{update.excerpt}</p>
              <a
                href={update.href}
                className="mt-6 inline-flex items-center text-sm font-semibold text-[#0066FF] transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2"
              >
                {update.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── G. Compliance ────────────────────────────────── */}
      <section id="status" className="container py-16 md:py-24">
        <motion.div {...fadeUp} className="space-y-4 text-center">
          <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
            Built for African Regulations & Currencies
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Compliance, security, and local payment support—baked in from day one.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {complianceItems.map((item) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              className="glass-card rounded-[24px] border border-slate-200/50 p-8 dark:border-slate-700/50"
            >
              <item.icon className="h-10 w-10 text-electric-blue" />
              <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── H. FAQ ───────────────────────────────────────── */}
      <section id="faq" className="container py-16 md:py-24">
        <motion.div {...fadeUp} className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-electric-blue">FAQ</p>
          <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqs.map((item, index) => (
            <div
              key={item.question}
              className="glass-card rounded-[20px] border border-slate-200/60 p-5 dark:border-slate-700/60"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex min-h-[44px] w-full items-center justify-between gap-4 text-left text-sm font-semibold text-slate-950 dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066FF] focus-visible:ring-offset-2"
                aria-expanded={openFaq === index}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-electric-blue transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-200">{item.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ── I. Final CTA ─────────────────────────────────── */}
      <section className="container py-16 md:py-24">
        <motion.div
          {...fadeUp}
          className="glass-card flex flex-col items-center gap-6 rounded-[32px] border border-slate-200/50 p-12 text-center dark:border-slate-700/50"
        >
          <Rocket className="h-10 w-10 text-electric-blue" />
          <h2 className="text-3xl font-extrabold text-slate-950 dark:text-white sm:text-4xl">
            Ready to Transform Your HR?
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-700 dark:text-slate-200">
            Join the beta and see why African businesses are switching to StackHR.
          </p>
          <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <CalendlyEmbed
              trigger={
                <PrimaryButton className="w-full sm:w-auto">Book Demo</PrimaryButton>
              }
            />
            <OutlineButton href="https://app.stackhr.app/login" className="w-full sm:w-auto">
              Start Free Trial
            </OutlineButton>
          </div>
        </motion.div>
      </section>

      {/* ── Issue 3: Sticky mobile bottom CTA bar ─────────── */}
      {showStickyBar && (
        <div
          className="safe-area-pb fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200/60 bg-white/90 backdrop-blur-md dark:border-slate-700/60 dark:bg-zinc-950/90 md:hidden"
        >
          <div className="container py-3">
            <CalendlyEmbed
              trigger={
                <PrimaryButton className="w-full min-h-[52px]">Book Demo — Free</PrimaryButton>
              }
            />
          </div>
        </div>
      )}
    </main>
  );
}
