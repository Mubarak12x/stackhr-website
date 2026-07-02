import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export const metadata: Metadata = {
  title: 'StackHR | Complete HR, Payroll & Spend Control for African SMEs',
  description:
    'All-in-one people operations, payroll automation, and expense management built for Nigerian and African businesses.',
  openGraph: {
    title: 'StackHR | Complete HR, Payroll & Spend Control for African SMEs',
    description:
      'All-in-one people operations, payroll automation, and expense management built for Nigerian and African businesses.',
    url: 'https://stackhr.app',
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
