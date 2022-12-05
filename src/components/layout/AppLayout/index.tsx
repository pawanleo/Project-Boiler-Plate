import React, { FunctionComponent } from 'react';

import Breadcrumb from '../Breadcrumb';

import classes from './appLayout.module.scss';
import { useAppSelector } from '../../../redux/hooks';

const AppLayout = () => {
    const header = useAppSelector((state) => state.layout.header)


    return (
        <></>
    );
};



AppLayout.defaultProps = {
    token: null,
};

export default AppLayout;
