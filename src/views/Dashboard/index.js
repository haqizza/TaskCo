import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../services/UserContext';
import UserDashboard from './UserDashboard';
import AdminDashboard from './AdminDashboard';
import { LayoutProvider } from '../../components/Layout/layoutContext';

const Dashboard = (props) => {
    const [user, setUser] = useContext(UserContext);

    console.log("type : " + user["userType"]);
    
    // if(user["userType"] == "user"){
    //     dashboard = ();
    // }
    // else if(user["userType"] == "admin"){
    //     dashboard = ();
    // }
        
    return(
        <div>
            { user["userType"] == "user" ?
                <UserDashboard />
                :
                <AdminDashboard />
            }
        </div>
    );
}

export default Dashboard;