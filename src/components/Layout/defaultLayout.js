import React, { useContext, useEffect, useRef, useState } from 'react';
import TopBar from '../TopBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../services/UserContext';

const DefaultLayout = (props) => {
    const [user, setUser] = useContext(UserContext);
    const userData = user["userData"];

    const [height, setHeight] = useState(0);
    const bar = useRef(null);

    useEffect(() => {
        setHeight(bar.current.clientHeight);
    }, [height]);

    const showExit = () => {

    }

    return(
        <div>
            <TopBar buttonAction={ showExit } ref = { bar }>
                <FontAwesomeIcon icon={ faUserCircle } /> {userData["displayName"]}
            </TopBar>
            <div
                className="main-container"
                style={{marginTop: height + 'px'}}
            >
                <div></div>
                { props.children }
            </div>
        </div>
    );
}

export default DefaultLayout;