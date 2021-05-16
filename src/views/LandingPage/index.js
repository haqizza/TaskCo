import React from 'react';
import { useHistory } from 'react-router';
import TopBar from '../../components/TopBar';

const LandingPage = (props) => {
    const history = useHistory();

    const goToLoginPage = () => {
        history.push('/login');
    }

    return(
        <div>
            <TopBar buttonAction = { goToLoginPage } >
                Login
            </TopBar>
            <h1 className="px-15" >TaskCo</h1>
        </div>
    )
}

export default LandingPage;