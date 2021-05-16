import React, { createContext, useState } from 'react';
import UserService from './User.service';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        isLoggedIn: false,
        userType: '',
        userData: {
            name: '',
            bio: '',
            displayName: ''
        }
    });

    // UserService.saveCurrentUser(user);
    // setUser(UserService.getCurrentUser());

    return(
        <UserContext.Provider value={ [user, setUser] }>
            { props.children }
        </UserContext.Provider>
    );
}