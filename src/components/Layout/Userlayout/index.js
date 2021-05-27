import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../services/UserContext';
import Sidebar from '../../Sidebar';
import DefaultLayout from '../defaultLayout';

const UserLayout = (props) => {
    const [user, setUser] = useContext(UserContext);
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])


    const menus = [
        {
            title: "Profile",
            link: "/profile"
        },
        {
            title: "Class",
            link: "/class"
        },
        {
            title: "Note",
            link: "/note"
        }
    ];
    
    if(user.userData.class_representative === true){
        menus.push({
            title: "Setting",
            link: "/setting"
        });
    }
    
    return(
        <DefaultLayout
            
        >
            <Sidebar menus={ menus }/>
            <div
                className="px-20 py-20"
                style={{
                    width: "100%", 
                    marginLeft: width * 18/100 + "px"
                }}
            >
                { props.children }
            </div>
        </DefaultLayout>
    );
}

export default UserLayout;