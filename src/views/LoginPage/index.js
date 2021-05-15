import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/button';
import Input from '../../components/input';
import TopBar from '../../components/TopBar';
import AuthService from '../../services/Auth.service';
import { UserContext } from '../../services/UserContext';

const LoginPage = (props) => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useContext(UserContext);
    let userData = {...user};
    console.log(user);


    const login = (e) => {
        e.preventDefault();
        AuthService.login(username, password);
        
        if(true){
            userData["isLoggedIn"] = true;
            // userData["userType"] = auth.data["userType"];
            userData["userType"] = "user";
            userData["displayName"] = "User Aku";
            // userData["userData"] = auth.data;
            setUser(userData);
            console.log(userData);

            history.push('/dashboard');
        }
    }

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    return(
        <div>
            <TopBar />
            <div>
                <form onSubmit={ () => { login() } }>
                    <Input 
                        type="text"
                        onChange={ updateUsername } 
                        value={ username }
                    />
                    <Input 
                        type="password"
                        onChange={ updatePassword } 
                        value={ password }
                    />
                    <Button>
                        Login
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage;