import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage, LegalSection } from '../../components/LegalPage';

export const metadata: Metadata = {
  title: 'Compliance Overview | StackHR',
  description:
    'How StackHR aligns with the Nigeria Data Protection Act 2023 (NDPA) and supports payroll and tax compliance for African businesses.',
};

export default function CompliancePage() {
  return (
    <LegalPage title="Compliance Overview">
      <LegalSection heading="Our Approach">
        <p>
          StackHR is built to support African businesses operating under Nigerian regulation. We design our
          product and data practices to align with the National Data Protection Act 2023 (NDPA) and build
          payroll features that support statutory obligations.
        </p>
        <p>
          This page summarises the principles we follow. It is not a legal certificate or audit report. If
          you have specific compliance requirements for your organisation, please contact us — we are happy
          to discuss how StackHR supports your obligations.
        </p>
      </LegalSection>

      <LegalSection heading="NDPA 2023 Alignment">
        <p>
          The Nigeria Data Protection Act 2023 sets out principles governing how personal data must be
          collected, stored, processed, and shared. StackHR follows these principles in its product design:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">Data minimisation:</strong> We
            collect only the personal data needed to deliver the service. We do not collect data we do not
            use.
          </li>
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">Purpose limitation:</strong>{' '}
            Data collected for payroll processing is used only for that purpose and related statutory
            obligations &mdash; not for unrelated commercial purposes.
          </li>
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">Security safeguards:</strong>{' '}
            Sensitive personal data, including NIN and BVN, is encrypted in transit and at rest. Access is
            restricted to authorised personnel and systems.
          </li>
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">Data subject rights:</strong>{' '}
            Employees and account holders can request access to, correction of, or deletion of their
            personal data. See our{' '}
            <Link href="/privacy" className="font-semibold text-[#0066FF] hover:underline">
              Privacy Policy
            </Link>{' '}
            for how to submit such requests.
          </li>
          <li>
            <strong className="font-semibold text-slate-900 dark:text-white">
              Lawful basis for processing:
            </strong>{' '}
            We process payroll-related personal data on the basis of contractual necessity (to perform the
            service you have engaged us to provide) and compliance with legal obligations under Nigerian
            labour and tax law.
          </li>
        </ul>
        <p>
          StackHR has not yet undergone a formal NDPA certification audit. We follow NDPA principles as a
          core part of our product design and will pursue formal compliance assessment as we scale beyond
          the beta cohort.
        </p>
      </LegalSection>

      <LegalSection heading="Payroll and Tax Compliance Support">
        <p>
          StackHR is designed to help your organisation meet Nigerian payroll and statutory obligations,
          including:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            PAYE (Pay As You Earn) calculations for Nigerian employees, based on current tax tables.
          </li>
          <li>
            Statutory deduction support, including pension contributions under the Pension Reform Act.
          </li>
          <li>
            Payroll records and audit trails to support record-keeping obligations.
          </li>
        </ul>
        <p>
          These are product features that support your compliance obligations, not a legal guarantee of
          compliance for your specific situation. Tax regulations change and may vary by employee
          circumstance. You remain responsible for verifying that your payroll configuration is correct and
          up to date. We recommend reviewing payroll outputs with a qualified accountant or tax adviser.
        </p>
      </LegalSection>

      <LegalSection heading="Data Security Practices">
        <p>
          We take the following steps to protect the integrity and confidentiality of data on the platform:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>Encryption of sensitive fields (NIN, BVN, bank details) in transit and at rest.</li>
          <li>
            Row-level data isolation &mdash; each organisation&apos;s data is isolated at the database
            layer, not just at the application layer.
          </li>
          <li>Access controls restricting internal access to customer data.</li>
          <li>Regular backups to prevent data loss.</li>
        </ul>
        <p>
          For a full description of how we process and store data, see our{' '}
          <Link href="/data-processing" className="font-semibold text-[#0066FF] hover:underline">
            Data Processing Overview
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Related Documents">
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            <Link href="/privacy" className="font-semibold text-[#0066FF] hover:underline">
              Privacy Policy
            </Link>{' '}
            &mdash; what data we collect and your rights as a data subject.
          </li>
          <li>
            <Link href="/data-processing" className="font-semibold text-[#0066FF] hover:underline">
              Data Processing Overview
            </Link>{' '}
            &mdash; where data is stored, isolation, retention, and sub-processors.
          </li>
          <li>
            <Link href="/terms" className="font-semibold text-[#0066FF] hover:underline">
              Terms of Service
            </Link>{' '}
            &mdash; your agreement with StackHR as a customer.
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          For compliance questions, contact us at{' '}
          <a href="mailto:hello@stackhr.app" className="font-semibold text-[#0066FF] hover:underline">
            hello@stackhr.app
          </a>{' '}
          or{' '}
          <a href="mailto:privacy@stackhr.app" className="font-semibold text-[#0066FF] hover:underline">
            privacy@stackhr.app
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
