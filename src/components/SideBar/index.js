import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { LayoutContext } from '../Layout/layoutContext';

const Sidebar = (props) => {
    const menus = props.menus;
    const history = useHistory();

    const goTo = (link) => {
        history.replace(link);
    }

    const menuItems = menus.map((menu) => (
        <div
            key={ menu.title }
            className="menu-item"
            onClick={() => { goTo(menu.link) }}
        >{ menu.title }</div>
        )
    );

    return(
        <div className="sidebar">
            <div className="flex-col">
                { menuItems }
            </div>
        </div>
    );
}

export default Sidebar;