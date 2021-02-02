import React, { lazy, Suspense } from 'react';

const LazyItem = lazy(() => import('./Item'));

const Item = props => (
  <Suspense fallback={null}>
    <LazyItem {...props} />
  </Suspense>
);

export default Item;
