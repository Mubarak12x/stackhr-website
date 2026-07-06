export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  category?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "stackhr-beta-launch",
    title: "StackHR Beta Launch: A New Way to Do HR in Africa",
    date: "2026-07-07",
    category: "Product",
    excerpt:
      "Today, we’re opening StackHR to a limited cohort of African SMEs. Here’s what’s inside on day one…",
    content: [
      "Today is a milestone for us. After months of building, testing, and listening to African business owners, we’re officially opening the StackHR beta to a limited cohort of SMEs across Africa. If you’ve been on our waitlist, watch your inbox — invites go out today.",
      "People Operations is the foundation. Every team starts with their people, and StackHR makes that simple. From onboarding a new hire to managing leave requests, performance records, and org structure — everything lives in one place. No more spreadsheets, no more email chains. When someone joins, StackHR walks both you and them through every step.",
      "Payroll is where most African HR software falls short. We built payroll from the ground up for African realities: multi-currency runs, automatic tax and deduction calculations, and salary advances that employees can request directly from the app. Payroll that used to take a full day now takes minutes — and your team gets paid correctly, every time.",
      "Spend Operations closes the loop. Expense claims, multi-level approval workflows, and automatic reimbursements give your finance team full visibility without manual reconciliation. Employees stop waiting weeks to be paid back. Budget management and a full audit trail are included on every paid plan.",
      "Why invite-only? We’re growing deliberately. Our beta cohort gives us the feedback we need to make every experience — from onboarding your first hire to running your first payroll — feel effortless before we open the doors wider. Every beta customer gets dedicated onboarding support and a direct line to our product team.",
      "What’s coming next: expanded seats, deeper integrations with Nigerian banking rails, and a mobile app optimised for field teams. If you’re not already on the waitlist, join today — and if you are, we’ll see you on the inside.",
    ],
  },
  {
    slug: "introducing-salary-advances",
    title: "Introducing Salary Advances: Empower Your Team",
    date: "2026-06-28",
    category: "Product",
    excerpt:
      "Employees can now request salary advances directly from StackHR. We handle calculations, approvals, and deductions automatically.",
    content: [
      "Cash flow is a real challenge for employees at every level. When an unexpected expense hits mid-month — school fees, a medical bill, a broken appliance — the options are usually limited and often costly. We built salary advances into StackHR to give your team a better option: fair, transparent, and handled entirely inside the platform.",
      "Here’s how it works. An employee submits an advance request through their StackHR profile, selecting an amount up to a configured percentage of their earned salary. The request goes to their manager or HR admin for a one-click approval. Once approved, StackHR automatically calculates the deduction for the next payroll run — no manual adjustments, no formula errors, no awkward conversations.",
      "For finance teams, this is a net positive. Advances are tracked as payroll line items, appear in your audit trail, and are reflected automatically in the next salary run. You get the visibility you need without any extra admin burden. No off-platform loans to track, no informal arrangements to manage.",
      "Salary advances are available on Growth and above plans. HR admins can configure the maximum advance percentage and the number of advances allowed per employee per quarter — giving you meaningful control while keeping the benefit real for your team. Look for it in the Payroll section of your dashboard today.",
    ],
  },
  {
    slug: "ndpa-2023-compliance",
    title: "NDPA 2023 Compliance: We’re Ready",
    date: "2026-06-20",
    category: "Compliance",
    excerpt:
      "StackHR is built with Nigerian data protection principles at its core. Here’s how we protect your organisation’s data.",
    content: [
      "Nigeria’s National Data Protection Act 2023 (NDPA) sets out clear requirements for how organisations collect, store, process, and share personal data. For a platform that handles employee records, payroll data, and sensitive identifiers, following sound data protection principles isn’t optional — it’s the baseline.",
      "StackHR is built with data protection principles at its core. Employee data is encrypted in transit and at rest. We collect only what’s needed to deliver our service. We do not sell or share your data with third parties for commercial purposes. By default, data is stored within the region.",
      "For HR administrators, this means you can onboard employees, run payroll, and manage records with confidence that the data practices beneath you are handled responsibly. Your employees’ information is treated with the same care you’d want applied to your own.",
      "We review our data practices regularly as the regulatory landscape evolves. If you have questions about how StackHR handles your organisation’s data, reach out to us at privacy@stackhr.app — we’re happy to walk you through it.",
    ],
  },
];
