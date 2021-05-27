import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import Button from '../../components/button';
import Input from '../../components/input';
import UserLayout from '../../components/Layout/Userlayout';
import { ClassContext } from '../../services/ClassContext';
import ClassService from '../../services/Class.service';
import Card from '../../components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Person from '../../assets/img/person.png';

const SettingClass = () => {
    const history = useHistory();
    const [clas] = useContext(ClassContext);
    const [classMemberReq, setClassMemberReq] = useState([]);
    const [classMember, setClassMember] = useState([]);
    const [className, setClassName] = useState('');
    

    useEffect(() => {
        ClassService.getClassMember(clas.class_id).then((res) => {
            setClassMember(res);
        });
        ClassService.getClassMemberReq(clas.class_id).then((res) => {
            setClassMemberReq(res);
        });
        setClassName(clas.class_name);
    },[clas]);
    
    const updateClassName = (e) => {
        setClassName(e.target.value);
    }

    const approveMember = (student_id) => {
        ClassService.approveMember(clas.class_id, student_id);
    }
    
    const declineMember = (student_id) => {
        ClassService.declineMember(clas.class_id, student_id);
    }

    const deleteMember = (student_id) => {
        ClassService.deleteMember(clas.class_id, student_id);
    }

    const updateClass = () => {
        ClassService.updateClass(clas, className);
    }

    return(
        <UserLayout className="flex-col">
            <div className="flex-col px-30 py-20">
                <table>
                    <tbody>
                        <tr>
                            <td>       
                                <div className="font-size-22 light">Nama Kelas</div>
                            </td>
                            <td>
                            <div className="flex-row flex-center">
                                <Input
                                    className="default-input my-20 width-100 px-20 py-10 title-little"
                                    value={ className }
                                    onChange={ updateClassName }
                                />
                                <Button
                                    className="default-button mx-10"
                                    onClick={ updateClass }
                                >
                                    Simpan
                                </Button>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="width-20">
                                <div className="font-size-22 light">Kode Kelas</div>
                            </td>
                            <td>
                                <div className="width-10 font-size-22 light">
                                    { clas.class_id }
                                </div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                <Card className="default-input px-20 py-20 my-20">
                    <div className="font-size-20">Anggota Mendaftar</div>
                    {
                        classMemberReq.map((user) => (
                            <Card className="default-card flex-row justify-between flex-center my-15">
                                <div className="flex-row flex-center">
                                    { user.image || <img src={Person} alt="Person" height="40px" /> }
                                    <div className="mx-10">
                                        { user.student_name }
                                    </div>
                                </div>
                                
                                <div className="flex-row flex-center">
                                    <Button className="icon-button mx-10" onClick={() => approveMember(user.student_id) }>
                                        <FontAwesomeIcon icon={ faCheck } />
                                    </Button>
                                    <Button className="icon-button mc-10" onClick={() => approveMember(user.student_id) }>
                                        <FontAwesomeIcon icon={ faTimes } />
                                    </Button>
                                </div>
                            </Card>
                        ))
                    }
                    {
                        classMember.map((user) => (
                            <Card className="default-card flex-row justify-between flex-center my-15">
                                <div className="flex-row flex-center">
                                    { user.image || <img src={Person} alt="Person" height="40px" /> }
                                    <div className="mx-10">
                                        { user.student_name }
                                    </div>
                                </div>
                                <Button className="default-button bg-red" onClick={() => deleteMember(user.student_id) }>
                                    Hapus
                                </Button>
                            </Card>
                        ))
                    }
                </Card>
            </div>
        </UserLayout>
    );
}

export default SettingClass;