import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from '../components/layout/Loader';
import { persistor, store } from '../redux/store';



const RouterContainer = lazy(() => import('./RouterContainer'));

/**
 * This is the main redux component, here we can add any providers and
 * necessary wrappers.zzz
 *
 * Right now we've added the actual redux provider and a
 * PersistGate to persist our store on page reload
 *
 */
const ReduxContainer=()=> (
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor}>
      <Suspense fallback={<Loader />}>
        <RouterContainer />
      </Suspense>
    </PersistGate>
  </Provider>
);
export default  ReduxContainer

