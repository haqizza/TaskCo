import React, { useEffect, useState } from 'react';
import Button from '../../../components/button';
import Card from '../../../components/card';
import AdminLayout from '../../../components/Layout/AdminLayout';
import AdminService from '../../../services/Admin.service';
import { ClassContext } from '../../../services/ClassContext';
import { UserContext } from '../../../services/UserContext';

const AdminClass = (props) => {
    const [clas, setClass] = UserContext(ClassContext);
    const [classes, setClasses] = useState([]);
    
    useEffect(() => {
        setClasses(AdminService.getClasses())
    },[])

    const deleteClass = (code) => {

    }

    return(
        <div>
            <AdminLayout>
                <div className="title px-10 py-10"> Class </div>
                <Card className="default-card px-10 py-10">
                {
                    classes.map((clas) => (
                        <Card className="default-card flex-row justify-between flex-center my-15">
                            <div>{ clas.title }</div>
                            <Button className="default-button bg-red" onClick={() => deleteClass(clas.code) }>
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

export default AdminClass;