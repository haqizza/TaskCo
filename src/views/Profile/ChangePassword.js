import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../services/UserContext';
import UserLayout from '../../components/Layout/Userlayout';
import Card from '../../components/card';
import Button from '../../components/button';
import Input from '../../components/input';
import UserService from '../../services/User.service';
import { useHistory } from 'react-router';

const ChangePassword = (props) => {
    const history = useHistory();
    const [user] = useContext(UserContext);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reNewPassword, setReNewPassword] = useState('');
    
    

    const updatePassword = () => {
        UserService.updatePassword(user.student_id);
        history.goBack();
    }

    const updateOldPassword = (e) => {
        setOldPassword(e.target.value);
    }
    
    const updateNewPassword = (e) => {
        setNewPassword(e.target.value);
    }
    
    const updateReNewPassword = (e) => {
        setReNewPassword(e.target.value);
    }

    return(
        <div>
            <UserLayout>
                <div className="title px-10 py-10">Ganti Password</div>
                <Card className="px-30 py-30 default-card flex-col justify-between flex-start">
                    <table className="width-100">
                        <tbody>
                        <tr>
                            <td>
                                Password Lama
                            </td>
                            <td>
                                <Input 
                                    type="password"
                                    className="default-input my-10 width-80"
                                    onChange={ updateOldPassword } 
                                    value={ oldPassword }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Password Baru
                            </td>
                            <td>
                                <Input 
                                    type="password"
                                    className="default-input my-10 width-80"
                                    onInput={ updateNewPassword } 
                                    value={ newPassword }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Konfirmasi Password Baru
                            </td>
                            <td>
                                <Input 
                                    type="password"
                                    className="default-input my-10 width-80"
                                    onInput={ updateReNewPassword } 
                                    value={ reNewPassword }
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <Button
                        className="default-button self-center"
                        onClick={ updatePassword }
                    >
                        Save
                    </Button>
                </Card>
            </UserLayout>
        </div>
    );
}

export default ChangePassword;