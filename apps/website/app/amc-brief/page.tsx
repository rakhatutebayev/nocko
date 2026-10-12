import type { Metadata } from 'next';
import AmcBriefForm from '@/components/amc-brief/AmcBriefForm';

// Standalone questionnaire for prospective AMC clients: shared by direct link only,
// no site header/footer, kept out of the index and the sitemap.
export const metadata: Metadata = {
  title: 'IT AMC Questionnaire',
  description: 'Questionnaire for an IT Annual Maintenance Contract with NOCKO.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: '/amc-brief' },
};

export default function AmcBriefPage() {
  return <AmcBriefForm />;
}
