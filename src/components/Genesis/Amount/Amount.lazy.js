import React, { lazy, Suspense } from 'react';

const LazyAmount = lazy(() => import('./Amount'));

const Amount = props => (
  <Suspense fallback={null}>
    <LazyAmount {...props} />
  </Suspense>
);

export default Amount;
