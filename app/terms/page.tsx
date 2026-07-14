import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '../../components/JsonLd';
import { LegalPage, LegalSection } from '../../components/LegalPage';

const TITLE = 'Terms of Service | StackHR';
const DESCRIPTION = 'Terms of Service for StackHR — the people, payroll, and spend management platform for African SMEs.';
const URL = 'https://www.stackhr.app/terms';

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

const termsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${URL}#webpage`,
  url: URL,
  name: TITLE,
  description: DESCRIPTION,
  isPartOf: { '@id': 'https://www.stackhr.app/#website' },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <JsonLd data={termsJsonLd} />
      <LegalSection heading="Acceptance of Terms">
        <p>
          By creating a StackHR account or using the service in any way, you agree to these Terms of Service.
          If you are using StackHR on behalf of an organisation, you confirm that you have the authority to
          bind that organisation to these terms.
        </p>
        <p>
          If you do not agree to these terms, do not use the service.
        </p>
      </LegalSection>

      <LegalSection heading="The StackHR Service">
        <p>
          StackHR provides people operations, payroll, and spend management tools designed for African
          businesses. This includes employee record management, automated payroll runs, leave management,
          expense claims and approvals, salary advances, and related features.
        </p>
        <p>
          Features available to your account depend on your subscription plan, as described on our{' '}
          <Link href="/#pricing" className="font-semibold text-[#0066FF] hover:underline">
            Pricing page
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Your Account">
        <p>You are responsible for:</p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>Providing accurate information when setting up your account and onboarding employees.</li>
          <li>Keeping your login credentials secure and not sharing them with unauthorised parties.</li>
          <li>All activity that occurs under your account, whether or not you authorised it.</li>
          <li>
            Ensuring that any personal data you upload about employees is collected with appropriate notice
            and in accordance with applicable law.
          </li>
        </ul>
        <p>
          Notify us immediately at{' '}
          <a href="mailto:hello@stackhr.app" className="font-semibold text-[#0066FF] hover:underline">
            hello@stackhr.app
          </a>{' '}
          if you believe your account has been compromised.
        </p>
      </LegalSection>

      <LegalSection heading="Beta Service Disclaimer">
        <p>
          StackHR is currently in active beta development. This means:
        </p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>
            Features may change, be added, or be removed without prior notice during the beta period.
          </li>
          <li>
            Uptime is not guaranteed at SLA-grade levels during beta. We aim for high availability but
            cannot commit to a specific uptime percentage at this stage.
          </li>
          <li>
            The service is provided &ldquo;as is&rdquo; during beta. We encourage you to maintain your own
            copies of payroll records during the beta period as a precaution.
          </li>
          <li>
            Your feedback directly shapes the product. We are grateful for reports of bugs, confusing
            behaviour, or missing features.
          </li>
        </ul>
        <p>
          We will provide reasonable notice before any changes that significantly affect your use of the
          service.
        </p>
      </LegalSection>

      <LegalSection heading="Payment Terms">
        <p>
          Subscription pricing, including what is included in each plan and the billing cycle, is described
          on our{' '}
          <Link href="/#pricing" className="font-semibold text-[#0066FF] hover:underline">
            Pricing page
          </Link>
          . Payments are processed via Paystack or other supported payment methods.
        </p>
        <p>
          Subscription charges are billed monthly in advance. You may cancel your subscription at any time;
          cancellation takes effect at the end of the current billing period. We do not offer refunds for
          partial periods.
        </p>
        <p>
          During the beta period, pricing and billing terms may change. We will give you at least 14 days
          notice before any price changes take effect.
        </p>
      </LegalSection>

      <LegalSection heading="Acceptable Use">
        <p>You agree not to use StackHR to:</p>
        <ul className="mt-2 list-disc space-y-2 pl-6">
          <li>Upload false, fraudulent, or misleading employee or payroll data.</li>
          <li>Violate any applicable law, including Nigerian data protection or labour law.</li>
          <li>Attempt to access data belonging to other organisations on the platform.</li>
          <li>Reverse-engineer, scrape, or systematically extract data from the service.</li>
          <li>Interfere with the availability or security of the service for other users.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Limitation of Liability">
        <p>
          To the maximum extent permitted by applicable law, StackHR and its team are not liable for
          indirect, incidental, special, or consequential damages arising from your use of — or inability to
          use — the service. This includes loss of payroll data, regulatory fines, or business interruption.
        </p>
        <p>
          Our total liability for any claim arising from these terms or your use of the service is limited
          to the total amount you paid us in the 12 months preceding the claim.
        </p>
        <p>
          Nothing in these terms limits liability for fraud, death, or personal injury caused by our
          negligence, where such limitation is prohibited by law.
        </p>
      </LegalSection>

      <LegalSection heading="Termination">
        <p>
          We may suspend or terminate your account if you materially breach these terms and fail to remedy
          the breach within 7 days of notice, or immediately where the breach causes harm to others or to
          the integrity of the service.
        </p>
        <p>
          You may close your account at any time by contacting{' '}
          <a href="mailto:hello@stackhr.app" className="font-semibold text-[#0066FF] hover:underline">
            hello@stackhr.app
          </a>
          . On closure, we will delete or anonymise your data in accordance with our{' '}
          <Link href="/privacy" className="font-semibold text-[#0066FF] hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="Governing Law">
        <p>
          These Terms of Service are governed by the laws of the Federal Republic of Nigeria. Any disputes
          arising from these terms will be subject to the jurisdiction of Nigerian courts.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to These Terms">
        <p>
          We may update these terms from time to time. When we make material changes, we will notify you by
          email or by posting a notice in the StackHR dashboard. Continued use of the service after changes
          take effect constitutes acceptance of the updated terms.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms:{' '}
          <a href="mailto:hello@stackhr.app" className="font-semibold text-[#0066FF] hover:underline">
            hello@stackhr.app
          </a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
