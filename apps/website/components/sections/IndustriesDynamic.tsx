'use client';

import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';

// SSR включён: раньше секция грузилась только на клиенте и Google не видел её текст.
// Если в консоли появятся hydration-ошибки, вернуть ssr: false.
const Industries = dynamic(() => import('./Industries'), {
  loading: () => (
    <section className="industries-tabs section" id="industries" aria-busy="true" />
  ),
});

type Props = ComponentProps<typeof Industries>;

export default function IndustriesDynamic(props: Props) {
  return <Industries {...props} />;
}
