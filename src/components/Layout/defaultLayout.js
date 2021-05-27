import React, { useContext, useEffect, useRef, useState } from 'react';
import TopBar from '../Topbar';
import { UserContext } from '../../services/UserContext';
import { LayoutContext } from './layoutContext';
import Button from '../button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import AuthService from '../../services/Auth.service';

const DefaultLayout = (props) => {
    const [user] = useContext(UserContext);
    const [logoutButton, setLogoutButton] = useState(false);

    const [layout, setLayout] = useContext(LayoutContext);
    let layoutTemp = layout;
    const [height, setHeight] = useState(0);
    const bar = useRef(null);


    useEffect(() => {
        setHeight(bar.current.clientHeight);
        layoutTemp.topBarHeight = height;
        setLayout(layoutTemp);
    }, [height, layoutTemp, setLayout]);

    
    const showLogout = async () => {
        setTimeout(() => {
            setLogoutButton(true);
        },200)
    }
    
    const hideLogout = () => {
        setTimeout(() => {
            setLogoutButton(false);
        },500)
    }

    const logout = () => {
        AuthService.logout();
    }

    return(
        <div>
            <TopBar buttonOnClick={ props.buttonOnClick } ref = { bar }>
                <div
                    onMouseEnter={ () => showLogout() }
                    onMouseLeave={ () => hideLogout() }
                    className="flex-row"
                    >
                    <Button onClick={ () => showLogout() }>
                            <FontAwesomeIcon className="mx-5" size="1x" icon={ faUserCircle } />
                            {user.userData.student_name}
                    </Button>
                    <div className="flex-row flex-center">
                        {
                            logoutButton ?
                            <Button onClick={ () => logout() } className="default-button bg-red">Logout</Button>
                            : null
                        }
                    </div>
                </div>
            </TopBar>
            <div
                className="main-container"
                style={{marginTop: height + 'px'}}
            >
            <div className="flex-row justify-start">
                { props.children }
            </div>
            </div>
        </div>
    );
}

export default DefaultLayout;