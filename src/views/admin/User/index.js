import React, { useEffect, useState } from 'react';
import Button from '../../../components/button';
import Card from '../../../components/card';
import AdminLayout from '../../../components/Layout/AdminLayout';
import Person from '../../../assets/img/person.png';
import { useHistory } from 'react-router';
import AdminService from '../../../services/Admin.service';

const AdminUser = (props) => {
    const [users, setUsers] = useState([]);
    const history = useHistory();
    
    useEffect(() => {
        setUsers([
            {
                image: "",
                nim: 1904516,
                name: "Mhs Z"
            },
            {
                image: "",
                nim: 1904123,
                name: "Mhs K"
            },
            {
                image: "",
                nim: 1904111,
                name: "Mhs A"
            },
        ])
    },[])

    const banUser = (nim) => {
        AdminService.banUser(nim);
    }

    const deleteUser = (nim) => {
        AdminService.deleteUser(nim);
    }

    return(
        <div>
            <AdminLayout>
                <div className="title px-10 py-10"> Class </div>
                <Card className="default-card px-10 py-10">
                {
                    users.map((user) => (
                        <Card className="default-card flex-row justify-between flex-center my-15">
                            <div className="flex-row flex-center">
                                { user.image || <img src={Person} alt="Person" height="40px" /> }
                                <div className="mx-10">
                                    { user.name }
                                </div>
                            </div>
                            <div className="flex-row flex-center">
                                <Button className="default-button mx-5" onClick={() => banUser(user.nim) }>
                                    Ban
                                </Button>
                                <Button className="default-button bg-red mx-5" onClick={() => deleteUser(user.nim) }>
                                    Hapus
                                </Button>
                            </div>
                        </Card>
                    ))
                }
                </Card>
            </AdminLayout>
        </div>
    );
}

export default AdminUser;