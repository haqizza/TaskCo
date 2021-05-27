import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar';
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
            link: "/admin/class"
        },
        {
            title: "Class Representative",
            link: "/admin/class-representative"
        },
        {
            title: "User",
            link: "/admin/user"
        }
    ]
    
    return(
        <DefaultLayout>
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

export default AdminLayout;