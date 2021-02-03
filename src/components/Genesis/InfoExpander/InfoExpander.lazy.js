import React, { lazy, Suspense } from 'react';

const LazyInfoExpander = lazy(() => import('./InfoExpander'));

const InfoExpander = props => (
  <Suspense fallback={null}>
    <LazyInfoExpander {...props} />
  </Suspense>
);

export default InfoExpander;
