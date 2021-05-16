import React, { useEffect, useState } from 'react';
import Sidebar from '../../SideBar';
import DefaultLayout from '../defaultLayout';

const AdminLayout = (props) => {
    const [currentClass, setCurrentClass] = useState('');
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [])

    const menus = [
        {
            title: "Class",
            link: "/class/" + currentClass
        },
        {
            title: "Users",
            link: "/users"
        }
    ]
    
    return(
        <DefaultLayout>
            <div className="flex-row justify-start">
                <Sidebar menus={ menus } />
                <div style={{width: (width - (width * 18/100)) + "px"}}>
                    { props.children }
                </div>
            </div>
        </DefaultLayout>
    );
}

export default AdminLayout;