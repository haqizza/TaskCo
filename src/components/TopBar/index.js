import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const TopBar = (props) => {

    return(
        <div className="topbar width-100 flex-row">
            <h4 className="width-fit">TaskCo</h4>
            <FontAwesomeIcon icon={ faUserCircle } />
        </div>
    );
}

export default TopBar;