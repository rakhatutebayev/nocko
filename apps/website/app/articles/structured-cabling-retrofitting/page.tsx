import { Metadata } from 'next';
import HeaderWrapper from '@/components/layout/HeaderWrapper';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ArticleContent from '@/components/articles/ArticleContent';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Server Room & IDFs Retrofitting | NOCKO UAE',
  description: 'Inherited a disastrous, disorganized server room in your new office? We specialize in live cabinet retrofitting and "spaghetti" cleanups. We trace, label, and re-patch your entire server rack with precise cable management channels, restoring airflow to your switches and transforming a fire hazard into an organized, maintainable IT environment.',
  alternates: {
    canonical: '/articles/structured-cabling-retrofitting',
    languages: {
      'en-AE': '/articles/structured-cabling-retrofitting',
      'ru-RU': '/ru/articles/structured-cabling-retrofitting',
    },
  },
};

const articleData = {
  hero: {
    title: 'Server Room & IDFs Retrofitting',
    subtitle: 'Inherited a disastrous, disorganized server room in your new office?',
    description: 'Inherited a disastrous, disorganized server room in your new office? We specialize in live cabinet retrofitting and "spaghetti" cleanups. We trace, label, and re-patch your entire server rack with precise cable management channels, restoring airflow to your switches and transforming a fire hazard into an organized, maintainable IT environment.',
  },
  intro: 'Inherited a disastrous, disorganized server room in your new office? We specialize in live cabinet retrofitting and spaghetti cleanups. We trace, label, and re-patch your entire server rack with precise cable management channels, restoring airflow to your switches and transforming a fire hazard into an organized, maintainable IT environment.',
  blocks: [
    {
      title: 'Server Room and Rack Cleanup Process',
      text: '<p>A disorganised server room is not just aesthetically unpleasant — it is operationally dangerous. Cables blocking airflow between servers raise ambient temperatures by 5–10°C, accelerating hardware failure. Unlabelled cables mean any trace fault requires disconnecting and reconnecting cables randomly until something breaks. We conduct live retrofits: we trace every cable from end to end, document it in a spreadsheet, then replace runs one at a time with properly managed, correctly labelled replacements — keeping the environment live throughout.</p><p>We re-route cables through D-ring cable managers and horizontal brush panels, replacing the characteristic "spaghetti" with structured lanes that maintain consistent 1U separation between patch runs. Every cable is cut to the exact required length — pre-made patch cords that are 2 metres too long wrapped around the rack are replaced with custom-length terminated cables that lie flat against the panel face.</p>',
      list: [
        'Live cabinet tracing — all existing connections documented before any change',
        'Custom-length patch cables replacing oversized pre-made cords',
        'D-ring and brush panel cable management restoring airflow to servers',
        'TIA-606 compliant machine-printed labels at both ends of every run',
        'As-built documentation delivered on completion including cable schedules',
      ],
    },
    {
      title: 'IDF Closet Retrofitting',
      text: '<p>Intermediate Distribution Frame (IDF) closets in multi-floor buildings frequently accumulate abandoned patch cords, dead-ended cables from decommissioned equipment, and unlabelled runs added by contractors over the years. We audit each IDF closet before starting — identifying which cables are active and which are dead — then remove all abandoned cabling (a fire hazard in ceiling voids), re-bundle active runs in cable managers, and relabel the patch panel to match the current floor layout.</p><p>Where the existing patch panel port assignment is illogical (e.g. desk positions not in sequential order across the panel), we re-patch the panel to a logical room layout so any engineer can identify any desk port in under 10 seconds by reading the panel labels.</p>',
    },
    {
      title: 'Post-Retrofit Testing and Documentation',
      text: '<p>After any retrofit, we conduct Fluke DSX verification testing on all re-terminated nodes to confirm that the new terminations pass Cat6 or Cat6A performance standards. This is particularly important in retrofits where existing cable runs are reused with new termination — the original cable may have been poorly installed with excessive untwisting at the old connector, and only a DSX test confirms the link performance is acceptable after re-termination.</p>',
    },
    {
      title: 'Frequently Asked Questions',
      text: '',
      list: [
        '<strong>Q: Can you retrofit a live server room without taking down servers?</strong><br/>A: Yes — this is standard practice. We work cable by cable, keeping all active connections live until we have the replacement run ready, then make the switch-over individually. Downtime per connection is under 30 seconds.',
        '<strong>Q: How long does a server room retrofit take?</strong><br/>A: A single rack with 24 patch cables typically takes 4–6 hours for a thorough retrofit with custom cables and label replacement. A full server room with 4–6 cabinets is typically a 2-day project.',
        '<strong>Q: What do we do with the old abandoned cables in the ceiling void?</strong><br/>A: Abandoned cables in ceiling voids should be removed — they are a fire load, a potential pathway for smoke propagation, and add weight to cable trays. We remove abandoned runs as part of the IDF cleanup scope.',
        '<strong>Q: Should we retrofit or completely rewire our old office?</strong><br/>A: If the existing cable runs are Cat6 or better and the cable routes are sensible, retrofit (re-terminate and re-label) is cost-effective. If the existing runs are Cat5e and you need 10G capability, a full rewire with Cat6A is justified.',
      ],
    },
  ],
};

export default function StructuredcablingretrofittingPage() {
  return (
    <>
      <StructuredData type="Article" data={{ headline: articleData.hero.title, datePublished: '2025-11-01', author: { '@type': 'Organization', name: 'NOCKO Information Technology' } }} />
      <HeaderWrapper />
      <main className="main" role="main">
        <Hero 
          variant="article" 
          title={articleData.hero.title} 
          subtitle={articleData.hero.subtitle}
          description={articleData.hero.description}
        />
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Structured Cabling', href: '/services/structured-cabling' }, { label: 'Article Details' }]} />
          <div className="article">
            <ArticleContent intro={articleData.intro} blocks={articleData.blocks} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
