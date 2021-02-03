import React, { lazy, Suspense } from 'react';

const LazyOptionPicker = lazy(() => import('./OptionPicker'));

const OptionPicker = props => (
  <Suspense fallback={null}>
    <LazyOptionPicker {...props} />
  </Suspense>
);

export default OptionPicker;
