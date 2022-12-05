import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import Loader from '../components/layout/Loader';
import { store } from '../redux/store';



const RouterContainer = lazy(() => import('./RouterContainer'));

/**
 * This is the main redux component, here we can add any providers and
 * necessary wrappers.zzz
 *
 * Right now we've added the actual redux provider and a
 * PersistGate to persist our store on page reload
 *
 */
const ReduxContainer = () => (
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <RouterContainer />
    </Suspense>
  </Provider>
);
export default ReduxContainer

