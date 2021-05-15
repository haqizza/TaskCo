import React, { createContext, useState } from 'react';

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
    return(
        <UserContext.Provider value={ [user, setUser] }>
            { props.children }
        </UserContext.Provider>
    );
}