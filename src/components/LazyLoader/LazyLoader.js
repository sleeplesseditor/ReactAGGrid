import React, { PureComponent, Suspense } from 'react';
import Spinner from './Spinner/Spinner';

function LazyLoader(WrappedComponent) {
  return class Wrapped extends PureComponent {
    render() {
      return (
        <Suspense fallback={<Spinner />}>
          <WrappedComponent {...this.props} />
        </Suspense>
      )
    }
  }
}

export default LazyLoader;