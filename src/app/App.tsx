import React, { lazy, Suspense } from 'react';
import Loader from '../components/layout/Loader';

function App() {
    const ReduxContainer = lazy(() => import('./ReduxContainer'));

    return (
        <Suspense fallback={<Loader />}>
            <ReduxContainer />
        </Suspense>
    );
}

export default App;