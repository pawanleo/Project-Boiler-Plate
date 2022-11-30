import React from 'react';
import { Menu, Layout } from 'antd';

import './sidebar.scss';
import menu from '../../../routing/menu';

const { Sider } = Layout;

/**
 * Sidebar component
 * This component handles the sidebar menu
 *
 * @pathname - (redux) the actual pathname from the router
 * @goTo     - (redux) function mapped to react-router-redux "push"
 *
 */
interface SideBarProps {
    pathname: string,
    goTo: () => any,

}
const Sidebar = ({ pathname, goTo }: SideBarProps) => {
    interface HandleClickProps {
        path: string
    }
    const handleClick = (path: HandleClickProps) => () => goTo(path);

    return (
        <Sider width={200} className="sidebar">
            <Menu mode="inline" selectedKeys={pathname} className="sidebar-menu">
                {menu[role].map(({ path, icon: Icon, title }) => (
                    <Menu.Item key={path} icon={<Icon />} onClick={handleClick(path)}>
                        {title}
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    );
};


export default Sidebar;
