import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { JsonLd } from '../components/JsonLd';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const SITE_URL = 'https://www.stackhr.app';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'StackHR',
      url: SITE_URL,
      logo: `${SITE_URL}/icons/stackhr-logo.svg`,
      email: 'hello@stackhr.app',
      sameAs: [
        'https://twitter.com/stackhr',
        'https://www.linkedin.com/company/stackhr/',
        'https://www.instagram.com/stack_hr',
        'https://github.com/stackhr',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'StackHR',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.stackhr.app'),
  title: 'StackHR | Complete HR, Payroll & Spend Control for African SMEs',
  description:
    'All-in-one people operations, payroll automation, and expense management built for Nigerian and African businesses.',
  openGraph: {
    title: 'StackHR | Complete HR, Payroll & Spend Control for African SMEs',
    description:
      'All-in-one people operations, payroll automation, and expense management built for Nigerian and African businesses.',
    url: 'https://www.stackhr.app',
    siteName: 'StackHR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StackHR | Complete HR, Payroll & Spend Control for African SMEs',
    description:
      'All-in-one people operations, payroll automation, and expense management built for Nigerian and African businesses.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <JsonLd data={organizationJsonLd} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
