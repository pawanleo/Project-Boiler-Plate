
import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "../components/layout/Loader";


const AppContainer = lazy(() => import("./AppContainer"));

/**
 * This is the main router component. Here we will declare any wrappers needed
 * for the react-router to work correctly
 *
 */

const RouterContainer = () => (

    <BrowserRouter >
        <Suspense fallback={<Loader />}>
            <AppContainer />
        </Suspense>
    </BrowserRouter>

);
export default RouterContainer