import React, { useEffect, useState } from 'react';
import Button from '../../../components/button';
import Card from '../../../components/card';
import AdminLayout from '../../../components/Layout/AdminLayout';
import Person from '../../../assets/img/person.png';
import AdminService from '../../../services/Admin.service';
import { useHistory, useParams } from 'react-router';

const AdminUserEdit = (props) => {
    const history = useHistory();
    const userNIM = useParams();

    const [user, setUser] = useState({});
    const [userTemp, setUserTemp] = useState({});
    
    useEffect(() => {
        setUser(AdminService.getUser(userNIM));
    },[userNIM])

    const updateUser = (nim) => {
        AdminService.updateUser(user);
        history.goBack();
    }

    const saveUser = (nim) => {
        AdminService.updateUser(user);
        history.goBack();
    }
    
    const deleteUser = (nim) => {
        AdminService.deleteUser(nim);
        history.goBack();
    }

    return(
        <div>
            <AdminLayout>
                <div className="title px-10 py-10"> User Edit </div>
                <Card className="default-card px-10 py-10">
                    {
                        JSON.stringify(user)
                    }
                </Card>
            </AdminLayout>
        </div>
    );
}

export default AdminUserEdit;