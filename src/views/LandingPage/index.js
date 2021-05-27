import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/button';
import TopBar from '../../components/Topbar';

const LandingPage = (props) => {
    const history = useHistory();

    const goToLoginPage = () => {
        history.replace('/login');
    }

    return(
        <div>
            <TopBar>
                <Button onClick={ goToLoginPage }>
                    Login
                </Button>
            </TopBar>
            <div  className="margin-auto my-80 width-40">
                <div className="title-big text-center my-40 red-rose">
                    TaskCo
                </div>
            </div>
        </div>
    )
}

export default LandingPage;