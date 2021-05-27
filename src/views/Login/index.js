import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/button';
import Input from '../../components/input';
import DefaultLayout from '../../components/Layout/defaultLayout';
import TopBar from '../../components/Topbar';
import AuthService from '../../services/Auth.service';
import ClassService from '../../services/Class.service';
import { ClassContext } from '../../services/ClassContext';
import UserService from '../../services/User.service';
import { UserContext } from '../../services/UserContext';


const Login = (props) => {
    const history = useHistory();
    const API_URL = 'http://127.0.0.1:4000/';
    const [user, setUser] = useContext(UserContext);
    const [clas, setClass] = useContext(ClassContext);
    
    const [username, setUsername] = useState("1900011");
    const [password, setPassword] = useState('');
    
    const save = async () => {
        await axios({
            url: API_URL + 'student?student_id=' + username,
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => {
            setUser({
                isLoggedIn: true,
                userType: password || 'user',
                userData: response.data[0]
            });
        });
    }
    
    const login = async (e) => {
        // e.preventDefault();
        let auth = AuthService.login(username, password) && check();
        if(auth){
            // save();
            let user = await UserService.getUser(username);
            let userData = user.userData;
            console.log(user);
            let clas = ClassService.getClass(userData.class_id);
            
            await setUser(user);
            setClass(clas);
            
            UserService.saveCurrentUser(user);
            ClassService.saveCurrentClass(clas);
            // console.log(user);

            if(user.userType === "admin"){
                history.replace('/admin/class');
            }
            else if(user.userType === "user"){
                history.replace('/profile');
            }
        }

    }

    const check = () => {
        if (!(username.length > 0) && !(password.length > 0)){
            alert("NIM or Password field is empty");
            return false;
        }
        return true;
    }

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    return(
        <>
            <TopBar/>
            <div  className="margin-auto my-40 width-40">
                <div className="flex-col">
                    <div className="title-big text-center my-40 red-rose">
                        Login
                    </div>
                    <Input 
                        type="text"
                        className="default-input text-center my-10"
                        onChange={ updateUsername } 
                        value={ username }
                        placeholder="NIM"
                        />
                    <Input 
                        type="password"
                        className="default-input text-center my-10"
                        onChange={ updatePassword } 
                        value={ password }
                        placeholder="Password"
                        />
                    <Button onClick={() => login()}  className="default-button my-10 width-30 self-center">
                        Login
                    </Button>
                    <div className="my-10 self-center">
                        Belum punya akun? <a href="/register">Daftar</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;