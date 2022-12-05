import React from 'react';
import { startCase } from 'lodash';
import classes from './breadCrumb.module.scss';
import { RouteObject, useLocation, useMatches, useNavigate } from 'react-router-dom';
import { HOME_PAGE } from '../../../routing/routes';
import { Link } from 'react-router-dom';


const Breadcrumb = () => {

    let navigate = useNavigate()
    let location = useLocation()
    const pathname = location.pathname

    return (

        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"> <Link to={HOME_PAGE}>Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page"><Link to={HOME_PAGE}>Home</Link></li>
            </ol>
        </nav>
    );
};


export default Breadcrumb;
