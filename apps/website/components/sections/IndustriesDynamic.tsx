'use client';

import dynamic from 'next/dynamic';

const Industries = dynamic(() => import('./Industries'), {
  ssr: false,
  loading: () => (
    <section className="industries-tabs section" id="industries" aria-busy="true" />
  ),
});

export default function IndustriesDynamic(props: any) {
  return <Industries {...props} />;
}
