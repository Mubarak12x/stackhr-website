import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'StackHR',
    short_name: 'StackHR',
    description: 'Complete HR, Payroll & Spend Control for African SMEs',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0066FF',
    icons: [
      {
        src: '/icons/stackhr-logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
