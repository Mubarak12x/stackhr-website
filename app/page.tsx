import type { Metadata } from 'next';
import { JsonLd } from '../components/JsonLd';
import HomeClient from '../components/HomeClient';
import { faqs, pricingTiers } from '../lib/home-content';

const TITLE = 'StackHR | Complete HR, Payroll & Spend Control for African SMEs';
const DESCRIPTION =
  'All-in-one people operations, payroll automation, and expense management built for Nigerian and African businesses.';
const URL = 'https://www.stackhr.app';

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

// Priced tiers only — "Let's Talk" (Enterprise) has no fixed price, and
// Offer requires one for Rich Results validity.
const pricedOffers = pricingTiers
  .filter((tier) => tier.price.startsWith('$'))
  .map((tier) => ({
    '@type': 'Offer',
    name: tier.name,
    price: tier.price.replace('$', ''),
    priceCurrency: 'USD',
    url: `${URL}/#pricing`,
    availability: 'https://schema.org/InStock',
  }));

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${URL}/#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { '@id': `${URL}/#website` },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'StackHR',
      url: URL,
      description: DESCRIPTION,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '0',
        highPrice: '12',
        offerCount: String(pricedOffers.length),
      },
    },
    {
      '@type': 'Product',
      name: 'StackHR',
      description: DESCRIPTION,
      brand: { '@type': 'Brand', name: 'StackHR' },
      offers: pricedOffers,
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <HomeClient />
    </>
  );
}
