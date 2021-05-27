import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import Button from '../../components/button';
import Input from '../../components/input';
import UserLayout from '../../components/Layout/Userlayout';
import TextArea from '../../components/textArea';
import UserService from '../../services/User.service';
import { ClassContext } from '../../services/ClassContext';
import ClassService from '../../services/Class.service';
import { UserContext } from '../../services/UserContext';
import Card from '../../components/card';

const DeadlineView = () => {
    const history = useHistory();
    const [user] = useContext(UserContext);
    const [clas] = useContext(ClassContext);
    const [deadline, setDeadline] = useState({});
    const [deadlineName, setDeadlineName] = useState('');
    const [deadlineDesc, setDeadlineDesc] = useState('');
    const [deadlineEnd, setDeadlineEnd] = useState('');
    const [editStatus, setEditStatus] = useState(false);
    const deadline_id = useParams().deadline_id;
    

    useEffect(() => {
        ClassService.getDeadline(deadline_id).then((res) => {
            setDeadline(res);
        });
    },[deadline_id]);
    
    const editDeadline = () => {
        setDeadlineName(deadline.cl_assignment_name);
        setDeadlineDesc(deadline.cl_assignment_desc);
        setDeadlineEnd( UserService.getTimeISO(deadline.cl_assignment_end));
        setEditStatus(true);
    }

    const updateDeadlineDesc = (e) => {
        setDeadlineDesc(e.target.value);
    }

    const updateDeadlineName = (e) => {
        setDeadlineName(e.target.value);
    }

    const updateDeadlineEnd = (e) => {
        // console.log(e.target.value);
        setDeadlineEnd(e.target.value);
    }



    const upload = () => {

    }

    const download = () => {

    }

    const saveDeadline = () => {
        setDeadline({
            cl_assignment_id: deadline.cl_assignment_id,
            cl_assignment_name: deadlineName,
            cl_assignment_desc: deadlineDesc,
            cl_assignment_start: UserService.getTimestamp(),
            cl_assignment_end: UserService.getTimestamp(deadlineEnd)
        });
        UserService.updateDeadline(deadline);
    }

    const deleteDeadline = () => {
        ClassService.deleteDeadline(deadline_id);
    }

    return(
        <UserLayout className="flex-col">
        {
        editStatus ?
            <>
            <div className="flex-col px-30 py-20">
                <div className="flex-row justify-between flex-center">
                    <Input
                        className="default-input my-20 width-100 px-20 py-10 title-little"
                        value={ deadlineName }
                        onChange={ updateDeadlineName }
                    />
                    <div className="flex-row flex-center mx-10">
                        <Button onClick={ () => history.goBack() }>
                            Kembali
                            {/* { UserService.getTimestamp() } */}
                        </Button>
                    </div>
                </div>
                <Input
                    className="default-input my-10 px-20 py-20"
                    type="date"
                    value={ deadlineEnd }
                    onChange={ updateDeadlineEnd }
                />
                <TextArea
                    className="default-input my-10 px-20 py-20"
                    value={ deadlineDesc }
                    onChange={ updateDeadlineDesc }
                    rows="18"
                />
                <Card
                    className="default-input px-20 py-20 my-10"
                >   
                    <Button onClick={ upload }>
                        Upload
                    </Button>
                </Card>
                <Button
                    className="default-button my-10 self-end"
                    onClick={ saveDeadline }
                >
                    Simpan
                </Button>
            </div>
            </>
        :
            <>
            <div className="flex-row justify-between flex-center px-40 py-20">
                <div className="title">
                    { deadline.cl_assignment_name }
                </div>
                <div className="flex-row flex-center">
                    <Button
                        className="default-button mx-5"
                        onClick={ editDeadline }
                    >
                        Ubah
                    </Button>
                    <Button onClick={ () => history.goBack() }>
                        Kembali
                    </Button>
                </div>
            </div>
            <Card className="default-card flex-col mx-30 py-20">
                <div className="flex-row flex-center mx-30 my-10">
                    <div className="title-little light my-10">
                        Deskripsi
                    </div>
                    <Card className="default-card bg-grey white light width-fit">
                        { deadline.cl_assignment_end }
                    </Card>
                </div>
                <TextArea
                    className="default-input width-90 mx-30 px-20 py-20 my-10"
                    value={ deadline.cl_assignment_desc }
                    readOnly={ true }
                    rows="20"
                />
                <Card
                    className="default-input width-90 mx-30 px-20 py-20 my-10"
                    onClick={ download }
                >
                    File1
                </Card>
                <Button
                    className="default-button bg-red mx-20 my-10 self-end"
                    onClick={ deleteDeadline }
                >
                        Hapus
                </Button>
            </Card>
            </>
        }
        </UserLayout>
    );
}

export default DeadlineView;