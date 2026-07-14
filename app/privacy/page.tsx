import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '../../components/JsonLd';
import { LegalPage, LegalSection } from '../../components/LegalPage';

const TITLE = 'Privacy Policy | StackHR';
const DESCRIPTION =
  'How StackHR collects, uses, and protects personal data — including employee records, NIN, BVN, and payroll information.';
const URL = 'https://www.stackhr.app/privacy';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'StackHR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const privacyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${URL}#webpage`,
  url: URL,
  name: TITLE,
  description: DESCRIPTION,
  isPartOf: { '@id': 'https://www.stackhr.app/#website' },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <JsonLd data={privacyJsonLd} />
      <LegalSection heading="Introduction">
        <p>
          StackHR is a people, payroll, and spend management platform built for African SMEs. This Privacy
          Policy explains how we collect, use, and protect personal data when you use our service.
          &ldquo;Personal data&rdquo; means any information that identifies or could reasonably identify a
          person.
        </p>
        <p>
          By creating a StackHR account, you confirm that you have read and understood this policy. If you
          are an HR administrator using StackHR on behalf of your organisation, you are responsible for
          ensuring that your employees are aware their data is processed through this service.
        </p>
      </LegalSection>

      <LegalSection heading="What We Collect">
        <p>When you use StackHR, we collect the following categories of personal data:</p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">Employee profile data:</strong>{' '}
            names, contact details, job titles, employment dates, and documents submitted during onboarding.
          </li>
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">
              Payroll and statutory data:
            </strong>{' '}
            bank account details, National Identification Numbers (NIN), Bank Verification Numbers (BVN), and
            salary information. These are collected only where required for payroll processing and compliance
            with Nigerian labour and tax regulations.
          </li>
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">
              Expense and spend data:
            </strong>{' '}
            receipts, claim amounts, budget allocations, and approval records.
          </li>
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">Account data:</strong> email
            addresses, organisation names, and credentials for StackHR accounts.
          </li>
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">Usage data:</strong> anonymised
            product usage logs, session information, and error reports used to improve the service.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Why We Collect It">
        <p>We collect and process personal data for the following purposes:</p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>To operate your payroll, including calculation and disbursement of salaries and statutory deductions.</li>
          <li>To support compliance with Nigerian tax obligations (PAYE) and labour regulations.</li>
          <li>To provide leave management, expense approval, and spend tracking features.</li>
          <li>To communicate with account holders about the service, updates, and support.</li>
          <li>To improve and debug the product using anonymised usage data.</li>
        </ul>
        <p>
          We do not process personal data for purposes beyond those listed here without your knowledge.
        </p>
      </LegalSection>

      <LegalSection heading="How We Protect It">
        <p>We take the following measures to protect personal data:</p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            Sensitive fields such as NIN and BVN are encrypted in transit and at rest.
          </li>
          <li>
            Access controls limit which staff and systems can read or modify your data.
          </li>
          <li>
            Each organisation&apos;s data is logically isolated from other organisations. Your data is not
            accessible to other customers on the platform.
          </li>
          <li>
            All connections to StackHR are secured using TLS (transport layer security).
          </li>
        </ul>
        <p>
          No system is perfectly secure. We encourage you to use strong, unique passwords for your StackHR
          account and to contact us immediately if you suspect unauthorised access.
        </p>
      </LegalSection>

      <LegalSection heading="Who We Share It With">
        <p>
          We do not sell personal data. We share data only with third parties that are necessary to operate
          the service:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">Payment processors</strong>,
            including Paystack, to initiate salary disbursements and process subscription payments.
          </li>
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">
              Cloud infrastructure providers
            </strong>{' '}
            who host the service and store data on our behalf, under data processing agreements.
          </li>
        </ul>
        <p>We do not share your data with advertisers, data brokers, or unrelated third parties.</p>
      </LegalSection>

      <LegalSection heading="Data Stored Within the Region">
        <p>
          By default, customer data is stored within Africa. We do not transfer personal data outside the
          region unless necessary for infrastructure operations and in compliance with applicable data
          protection law.
        </p>
      </LegalSection>

      <LegalSection heading="Your Rights Under the NDPA">
        <p>
          Under Nigeria&apos;s National Data Protection Act 2023, you have the right to:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>Access a copy of personal data we hold about you.</li>
          <li>Request correction of inaccurate or incomplete data.</li>
          <li>Request deletion of your data, subject to legal and operational constraints.</li>
          <li>Object to or restrict certain types of processing.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{' '}
          <a
            href="mailto:privacy@stackhr.app"
            className="font-semibold text-[#0066FF] hover:underline"
          >
            privacy@stackhr.app
          </a>
          . We will respond within a reasonable time period.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          For privacy questions or concerns, reach us at{' '}
          <a href="mailto:privacy@stackhr.app" className="font-semibold text-[#0066FF] hover:underline">
            privacy@stackhr.app
          </a>{' '}
          or{' '}
          <a href="mailto:hello@stackhr.app" className="font-semibold text-[#0066FF] hover:underline">
            hello@stackhr.app
          </a>
          . You may also review our{' '}
          <Link href="/data-processing" className="font-semibold text-[#0066FF] hover:underline">
            Data Processing Overview
          </Link>{' '}
          and{' '}
          <Link href="/compliance" className="font-semibold text-[#0066FF] hover:underline">
            Compliance Overview
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
