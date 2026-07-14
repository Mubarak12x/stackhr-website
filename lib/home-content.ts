/**
 * Shared source of truth for homepage pricing tiers and FAQs — used both
 * by the rendered UI (components/HomeClient.tsx) and the homepage's
 * Product/FAQPage JSON-LD (app/page.tsx), so structured data can never
 * drift out of sync with what's actually shown on the page.
 */

export const pricingTiers = [
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

export const faqs = [
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
