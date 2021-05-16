import React, { useContext, useEffect } from 'react';
import './App.css';
import './assets/css/main.scss';
import { BrowserRouter} from 'react-router-dom';
import RootRouter from './router';
import { UserContext } from './services/UserContext';
import UserService from './services/User.service';
import { LayoutProvider } from './components/Layout/layoutContext';

const App = () =>{
    const [user, setUser] = useContext(UserContext);
    const userData = user;
    console.log(userData);

    useEffect(() => {
        if( UserService.isLoggedIn() ){
            userData["isLoggedIn"] = true;
            // userData["userType"] = auth.data["userType"];
            userData["userType"] = "user";
            userData["displayName"] = "User Aku";
            // userData["userData"] = auth.data;
            setUser(UserService.getCurrentUser);
            // console.log(userData);
        }
    },[]);

    return(
        <BrowserRouter>
            <LayoutProvider>
                <RootRouter>
                </RootRouter>
            </LayoutProvider>
        </BrowserRouter>
    )
}

export default App;
