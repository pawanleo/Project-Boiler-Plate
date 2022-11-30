import React, { FunctionComponent } from 'react';
import { Col, Layout, Row } from 'antd';
import Breadcrumb from '../Breadcrumb';
import Sidebar from '../Sidebar';
import classes from './appLayout.module.scss';

const { Header, Content, Footer } = Layout;

/**
 * This is the main app layout component. We define elements like
 * header and sidebar, it will render any children passed as props inside
 * the layout content.
 *
 * In this case, we will connect this Parent component to redux to get the
 * pathname and other router functions to pass to @Breadcrumb and @Sidebar
 * since both have the same redux dependencies.
 *
 * @children        - Children prop, will render a react node inside the layout
 * @pathname        - (redux) the actual pathname from the router
 * @goTo            - (redux) function mapped to react-router-redux "push"
 */
const AppLayout = () => {

    const withHeader = !!token;
    const withSidebar = !!token;
    const withBreadcrumb = !!token;

    return (
        <Layout className="app-layout">
            {withHeader && (
                <Header className="header">
                    <span>My App</span>
                </Header>
            )}
            <Layout>
                {withSidebar && <Sidebar pathname={pathname} goTo={goTo} />}
                <Layout className="app-layout-content">
                    {withBreadcrumb && <Breadcrumb pathname={pathname} goTo={goTo} />}
                    <Content className="content">{children}</Content>
                    <Footer>
                        <Row>
                            <Col md={20}>{process.env.REACT_APP_NAME}</Col>

                        </Row>
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};



AppLayout.defaultProps = {
    token: null,
};

export default AppLayout;
