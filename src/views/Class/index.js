import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../services/UserContext';
import UserLayout from '../../components/Layout/Userlayout';
import Card from '../../components/card';
import Button from '../../components/button';
import Input from '../../components/input';
import { useHistory } from 'react-router';
import { ClassContext } from '../../services/ClassContext';
import ClassService from '../../services/Class.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Class = (props) => {
    const history = useHistory();
    const [user] = useContext(UserContext);
    const [clas, setClass] = useContext(ClassContext);
    const [inputClass, setInputClass] = useState('');
    const userTemp = user.userData;


    
    useEffect(() => {
        ClassService.getClass(userTemp.class_id)
            .then((res) => setClass(res));
        ClassService.saveCurrentClass(clas);
    },[])

    const joinClass = () => {
        ClassService.joinClass(inputClass);
    }

    const updateJoinClass = (e) => {
        setInputClass(e.target.value);
    }

    const enterClass = () => {
        history.push('/class/' + clas.class_id);
    }
    
    const viewClassMember = () => {
        history.push('/class/' + clas.class_id + '/member');
    }

    return(
        <UserLayout>
            <div className="mx-30">
                <div className="title px-10 py-10">Kelas Anda</div>
                    { userTemp.class_id === "" ?
                    <div className="px-30 py-50 flex-row justify-between flex-start">
                        <div className="margin-auto flex-col">
                            <div className="flex-row flex-center">
                                <div className="my-10 mx-10">Kode Kelas</div>
                                <Input
                                    className="default-input my-10 mx-10"
                                    value={ inputClass }
                                    onChange={ updateJoinClass }
                                />
                            </div>
                            <Button
                                className="default-button self-center my-10 mx-10"
                                onClick={() => joinClass }
                            >
                                Masuk Kelas
                            </Button>
                        </div>
                    </div>
                    :
                    (<Card
                        className="px-30 py-30 violet-card flex-col justify-between flex-start"
                        onClick={ enterClass }
                    >
                        <div className="title white">{ clas.class_name }</div>
                        <div className="white light my-20">Kode Kelas: { clas.class_id }</div>
                        <div className="my-40">
                        </div>
                        <div
                            className="white light flex-row flex-center justify-start"
                        >
                            <FontAwesomeIcon className="mx-10" icon={ faUserCircle } size="lg" /> { clas.member_number } Member
                        </div>
                    </Card>)}
            </div>
        </UserLayout>
    );
}

export default Class;