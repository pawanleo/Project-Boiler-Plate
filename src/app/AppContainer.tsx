import React from "react";


import AppLayout from "../components/layout/AppLayout";
import { Route, Routes } from "react-router-dom";

import { LOGIN_PATH } from "../routing/routes";
import Login from "../Pages/AuthPages/Login";

/**
 * This is the main entry app component. Here we wll define the actual app layout
 * and locale provider
 *
 */

const AppContainer = () => {
    return (
        <AppLayout>
            <Routes>
                <Route path={LOGIN_PATH} element={<Login />} />
            </Routes>
        </AppLayout>
    );
};

export default AppContainer;
