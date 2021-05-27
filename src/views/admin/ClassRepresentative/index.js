import React, { useEffect, useState } from 'react';
import Button from '../../../components/button';
import Card from '../../../components/card';
import AdminLayout from '../../../components/Layout/AdminLayout';
import Person from '../../../assets/img/person.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import AdminService from '../../../services/Admin.service';

const AdminClassRepresentative = (props) => {
    const [users, setUsers] = useState([]);
    const [usersRequest, setUserRequest] = useState([]);
    
    useEffect(() => {
        setUserRequest([
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
        ])
        setUsers([
            {
                image: "",
                nim: 1904111,
                name: "Mhs A"
            },
        ])
    },[])

    const approveClassRepresentative = (nim) => {
        AdminService.deleteClassRep(nim);
        window.location.reload();
    }

    const declineClassRepresentative = (nim) => {
        AdminService.deleteClassRep(nim);
        window.location.reload();
    }

    const deleteClassRepresentative = (nim) => {
        AdminService.deleteClassRep(nim);
        window.location.reload();
    }

    return(
        <div>
            <AdminLayout>
                <div className="title px-10 py-10"> Class Representative</div>
                <Card className="default-card px-10 py-10">
                {
                    usersRequest.map((user) => (
                        <Card className="default-card flex-row justify-between flex-center my-15">
                            <div className="flex-row flex-center">
                                { user.image || <img src={Person} alt="Person" height="40px" /> }
                                <div className="mx-10">
                                    { user.name }
                                </div>
                            </div>
                            
                            <div className="flex-row flex-center">
                                <div className="mx-10">
                                    Request
                                </div>
                                <Button className="icon-button mx-10" onClick={() => approveClassRepresentative(user.nim) }>
                                    <FontAwesomeIcon icon={ faCheck } />
                                </Button>
                                <Button className="icon-button mc-10" onClick={() => declineClassRepresentative(user.nim) }>
                                    <FontAwesomeIcon icon={ faTimes } />
                                </Button>
                            </div>
                        </Card>
                    ))
                }
                {
                    users.map((user) => (
                        <Card className="default-card flex-row justify-between flex-center my-15">
                            <div className="flex-row flex-center">
                                { user.image || <img src={Person} alt="Person" height="40px" /> }
                                <div className="mx-10">
                                    { user.name }
                                </div>
                            </div>
                            <Button className="default-button bg-red" onClick={() => deleteClassRepresentative(user.nim) }>
                                Hapus
                            </Button>
                        </Card>
                    ))
                }
                </Card>
            </AdminLayout>
        </div>
    );
}

export default AdminClassRepresentative;