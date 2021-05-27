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

const Setting = (props) => {
    const history = useHistory();
    const [user] = useContext(UserContext);
    const [clas, setClass] = useContext(ClassContext);
    const [class_id, setClass_id] = useState('');
    const userTemp = user.userData;

    
    useEffect(() => {
        // setClass(ClassService.getCurrentClass());
    },[])

    const createClass = () => {
        ClassService.createClass().then((res) => {
            setClass_id(res);
        });
        ClassService.getClass(class_id).then((res) => {
            setClass(res);
        });
    }

    const classSetting = () => {
        history.push('/setting/class');
    }

    return(
        <UserLayout>
            <div className="px-30">
                <div className="title px-10 py-10">Setting</div>
                {
                    userTemp.class_representative === "" ?
                    <Card className="default-card bg-grey white light font-size-22 px-20 py-15 my-10 width-30 text-center">
                        Request Class Representative
                    </Card>
                    :
                    <>
                    <Card className="default-card bg-green white light font-size-22 px-20 py-15 my-10 width-30 text-center">
                        Anda Adalah Class Representative
                    </Card>
                    {
                        user.class_id === "" ?
                        <Card
                            className="default-card flex-col justify-between flex-start px-30 py-60 my-20"
                            onClick={ createClass }
                        >
                            <div className="title light">Buat Kelas Baru</div>
                        </Card>
                        :
                        <Card
                            className="violet-card flex-col justify-between flex-start px-30 py-30 my-20"
                            onClick={ classSetting }
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
                        </Card>
                    }
                    </>
                }
            </div>
            <div className="call-admin text-link">
                <a href="https://wa.me/6289681865191" target="_blank" rel="noreferrer" >Hubungi Admin</a>
            </div>
        </UserLayout>
    );
}

export default Setting;