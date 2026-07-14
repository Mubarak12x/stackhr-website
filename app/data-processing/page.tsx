import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '../../components/JsonLd';
import { LegalPage, LegalSection } from '../../components/LegalPage';

const TITLE = 'Data Processing Overview | StackHR';
const DESCRIPTION =
  'How StackHR processes, stores, and protects customer data — including storage location, data isolation, retention, and sub-processors.';
const URL = 'https://www.stackhr.app/data-processing';

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

const dataProcessingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${URL}#webpage`,
  url: URL,
  name: TITLE,
  description: DESCRIPTION,
  isPartOf: { '@id': 'https://www.stackhr.app/#website' },
};

export default function DataProcessingPage() {
  return (
    <LegalPage title="Data Processing Overview">
      <JsonLd data={dataProcessingJsonLd} />
      <LegalSection heading="What We Process">
        <p>
          StackHR processes personal data on behalf of our customers, who are the data controllers. We act
          as a data processor for the personal data of your employees and other individuals whose data you
          upload to the platform.
        </p>
        <p>We process the following categories of personal data:</p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">Employee identifiers:</strong>{' '}
            full names, National Identification Numbers (NIN), Bank Verification Numbers (BVN), contact
            details, job roles, and employment dates.
          </li>
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">Payroll data:</strong> salary
            amounts, bank account details, tax records, pension contribution amounts, and deduction records.
          </li>
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">
              Expense and spend data:
            </strong>{' '}
            claim amounts, receipts, approval records, and budget allocations.
          </li>
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">
              Account and audit data:
            </strong>{' '}
            login records, action logs, and session metadata used for security and audit trail purposes.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Where Data Is Stored">
        <p>
          StackHR stores customer data using managed cloud database infrastructure hosted in Africa. We
          prioritise regional data residency so that personal data belonging to African employees remains
          within the region by default.
        </p>
        <p>
          Our infrastructure provides redundancy, automated backups, and point-in-time recovery to protect
          against data loss. Backup data is stored in the same region as primary data unless a specific
          exception is required for disaster recovery.
        </p>
      </LegalSection>

      <LegalSection heading="Multi-Tenant Data Isolation">
        <p>
          StackHR is a multi-tenant platform &mdash; multiple customer organisations share the same
          underlying infrastructure. We isolate each organisation&apos;s data using row-level security
          enforced at the database layer.
        </p>
        <p>
          This means that even if two organisations share the same database infrastructure, a query
          executing in the context of one organisation cannot read or modify another organisation&apos;s
          data. This isolation is enforced at the database layer, not solely at the application layer, which
          provides a stronger guarantee than application-only access controls.
        </p>
        <p>
          StackHR staff access to customer data is restricted to what is necessary to provide support and
          operate the service. Access is logged and subject to internal review.
        </p>
      </LegalSection>

      <LegalSection heading="Data Retention">
        <p>
          Customer data is retained while your account is active. On account closure or upon written
          request, we delete or anonymise personal data within a reasonable period. Specific timeframes for
          deletion will be communicated at the time of closure.
        </p>
        <p>
          Some data may be retained for longer periods where required by law &mdash; for example, payroll
          records that must be kept under Nigerian tax or labour regulations. In such cases, we retain only
          the minimum data required to meet the legal obligation, and delete it once the obligation period
          has passed.
        </p>
        <p>
          To request deletion of your data, contact{' '}
          <a href="mailto:privacy@stackhr.app" className="font-semibold text-[#0066FF] hover:underline">
            privacy@stackhr.app
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Sub-Processors">
        <p>
          We use the following categories of third-party sub-processors to operate the service. We maintain
          data processing agreements with sub-processors where required by applicable law.
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">
              Cloud infrastructure providers:
            </strong>{' '}
            provide database hosting, object storage, and computing resources. Data processed by these
            providers is subject to the same regional data residency requirements as described above.
          </li>
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">Payment processors:</strong>{' '}
            process salary disbursements and subscription payments. We use Paystack for payment processing
            within Nigeria; Paystack&apos;s own privacy and data processing policies apply to data they
            receive.
          </li>
        </ul>
        <p>
          Specific vendor names for cloud infrastructure can be provided on request to organisations with a
          legitimate compliance need. Contact{' '}
          <a href="mailto:privacy@stackhr.app" className="font-semibold text-[#0066FF] hover:underline">
            privacy@stackhr.app
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Related Documents">
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            <Link href="/privacy" className="font-semibold text-[#0066FF] hover:underline">
              Privacy Policy
            </Link>{' '}
            &mdash; what personal data we collect and your rights.
          </li>
          <li>
            <Link href="/compliance" className="font-semibold text-[#0066FF] hover:underline">
              Compliance Overview
            </Link>{' '}
            &mdash; NDPA alignment and payroll compliance support.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Data processing questions:{' '}
          <a href="mailto:privacy@stackhr.app" className="font-semibold text-[#0066FF] hover:underline">
            privacy@stackhr.app
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
