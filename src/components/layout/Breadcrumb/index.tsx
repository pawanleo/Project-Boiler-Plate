import React from 'react';
import { Breadcrumb as AntBreadcrumb } from 'antd';
import { startCase } from 'lodash';
import { HOME_PATH } from '../../../routing/paths';

import classes from './breadCrumb.module.scss';

interface ReconstructPathProps {
    path: string,
    index: number
}
const reconstructPath = ({ path, index }: ReconstructPathProps) => {
    const newPath = path.split('/');
    const pathArr = newPath.filter((_path, i) => i <= index);
    return pathArr.join('/');
};

/**
 * Breadcrumb component
 * This component handles the breadcrumb given a pathname and a function to
 * go to a specific location
 *
 * @pathname - (redux) the actual pathname from the router
 * @goTo     - (redux) function mapped to react-router-redux "push"
 *
 */
interface BreadcrumbProps {
    pathname: string,
    goTo: () => any
}
const Breadcrumb = ({ pathname, goTo }: BreadcrumbProps) => {
    const locationItems = pathname ? pathname.split('/') : [];


    const handleClick = ({ path }: HandleClickProps) => () => {
        goTo(path);
    };

    return (
        <AntBreadcrumb className="breadcrumb">
            <AntBreadcrumb.Item
                className="clickable"
                onClick={handleClick(HOME_PATH)}
            >
                Home
            </AntBreadcrumb.Item>
            {locationItems.map((item, index) => (
                <AntBreadcrumb.Item
                    key={item}
                    className={index < locationItems.length - 1 ? 'clickable' : ''}
                    onClick={handleClick(reconstructPath(pathname, index))}
                >
                    {startCase(item)}
                </AntBreadcrumb.Item>
            ))}
        </AntBreadcrumb>
    );
};


export default Breadcrumb;
