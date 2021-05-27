import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../services/UserContext';
import UserLayout from '../../components/Layout/Userlayout';
import Card from '../../components/card';
import Button from '../../components/button';
import Input from '../../components/input';
import UserService from '../../services/User.service';
import Person from '../../assets/img/person.svg';
import TextArea from '../../components/textArea';
import { useHistory } from 'react-router';

const Profile = (props) => {
    const history = useHistory();
    const [user, setUser] = useContext(UserContext);
    let userTemp;
    userTemp = user.userData;
    
    useEffect(() => {
        setUser(UserService.getCurrentUser());
    },[])

    const changePhoto = () => {

    }

    const changePassword = () => {
        history.push('profile/change-password');
    }

    const saveUser = () => {

    }

    return(
        <div>
            <UserLayout>
                <div className="mx-30">
                    <div className="title px-10 py-10">Profile</div>
                    <Card className="px-30 py-30 default-card flex-row justify-between flex-start">
                        {/* <Card className="default-card flex-row justify-between flex-center my-15"> */}
                            <div className="flex-col flex-center width-30">
                                <img src={ Person } alt="Person" height="100px" />
                                <div className="text-link my-10" onClick={() => changePhoto()}>
                                    Ganti Foto
                                </div>
                                <hr className="width-60" height="2px" />
                                <div className="text-link my-10" onClick={() => changePassword()}>
                                    Ganti Password
                                </div>
                            </div>
                            <div className="flex-col flex-start width-70">
                                <div className="mx-5 my-5">Nama</div>
                                <Input 
                                    type="text"
                                    className="default-input my-10 width-95"
                                    value={ userTemp.student_name }
                                />
                                <div className="mx-5 my-5">NIM</div>
                                <Input 
                                    type="text"
                                    className="default-input my-10 width-95"
                                    value={ userTemp.student_id }
                                />
                                <div className="mx-5 my-5">Program Studi</div>
                                <Input 
                                    type="text"
                                    className="default-input my-10 width-95"
                                    value={ userTemp.study_program_name }
                                />
                                <div className="mx-5 my-5">Tempat Lahir</div>
                                <Input 
                                    type="text"
                                    className="default-input my-10 width-95"
                                    value={ userTemp.student_place_of_birth }
                                />
                                <div className="mx-5 my-5">Tanggal Lahir</div>
                                <Input 
                                    type="text"
                                    className="default-input my-10 width-95"
                                    value={ userTemp.student_date_of_birth }
                                />
                                <div className="mx-5 my-5">Jenis Kelamin</div>
                                <Input 
                                    type="text"
                                    className="default-input my-10 width-95"
                                    value={ userTemp.student_gender }
                                />
                                <div className="mx-5 my-5">Tahun Masuk</div>
                                <Input 
                                    type="text"
                                    className="default-input my-10 width-95"
                                    value={ userTemp.student_entry_year }
                                />
                                <div className="mx-5 my-5">Bio</div>
                                <TextArea
                                    className="default-input my-10 width-95"
                                    rows="5"
                                    value={ userTemp.student_bio }
                                />
                                <Button className="default-button self-end" onClick={() => saveUser()}>
                                    Save
                                </Button>
                            </div>
                        {/* </Card> */}
                    </Card>
                </div>
                
            </UserLayout>
        </div>
    );
}

export default Profile;