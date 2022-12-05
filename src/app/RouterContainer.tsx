
import React, { lazy, Suspense } from "react";
import { Router, Routes } from "react-router-dom";
import Loader from "../components/layout/Loader";
import { createBrowserHistory } from "history";


const AppContainer = lazy(() => import("./AppContainer"));

/**
 * This is the main router component. Here we will declare any wrappers needed
 * for the react-router to work correctly
 *
 */
const history = createBrowserHistory();

const RouterContainer = () => (


    <Router navigator={history}>   <Suspense fallback={<Loader />}>
        <AppContainer />
    </Suspense></Router>


);
export default RouterContainer