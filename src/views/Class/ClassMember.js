import React, { useContext, useEffect, useState } from 'react';
import UserLayout from '../../components/Layout/Userlayout';
import Card from '../../components/card';
import Button from '../../components/button';
import { useHistory } from 'react-router';
import { ClassContext } from '../../services/ClassContext';
import ClassService from '../../services/Class.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const ClassMember = (props) => {
    const history = useHistory();
    const [clas] = useContext(ClassContext);
    const [classMember, setClassMember] = useState([]);

    useEffect(() => {
        ClassService.getClassMember(clas.class_id).then((res) => {
            setClassMember(res)
        })
    },[clas]);

    return(
        <div>
            <UserLayout>
                <div className="flex-row justify-between flex-center px-10 py-10">
                    <div className="title">{clas.class_name}</div>
                    <Button onClick={ () => history.goBack() }>
                        Kembali
                    </Button>
                </div>
                <Card className="default-card px-30 py-30">
                    <div className="title-little">Anggota</div>
                    <div className="flex-row justify-center">
                    {
                    classMember.map((member) => (
                        <Card
                            key={   member.student_id }
                            className="default-card flex-col flex-center my-20 mx-20 px-30 py-20 width-20"
                        >
                            <FontAwesomeIcon icon={ faUserCircle } size="7x" className="light-black my-10" />
                            <div className="font-size-26 light my-10">{ member.student_name }</div>
                        </Card>
                    ))
                    }
                    </div>
                </Card>
            </UserLayout>
        </div>
    );
}

export default ClassMember;