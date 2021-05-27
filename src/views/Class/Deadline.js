import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/button';
import Card from '../../components/card';
import UserLayout from '../../components/Layout/Userlayout';
import ClassService from '../../services/Class.service';
import UserService from '../../services/User.service';

const Deadline = () => {
    const history = useHistory();
    const [deadlines, setDeadlines] = useState([]);

    useEffect(() => {
        ClassService.getDeadlines().then((response) => {
            setDeadlines(response);
        });
    },[]);
    
    
    const openDeadline = (cl_assignment_id) => {
        history.push('/class/deadline/'+ cl_assignment_id);
    }
    
    const createDeadline = () => {
        var cl_assignment_id = ClassService.createDeadline();
        history.push('/class/deadline/'+ cl_assignment_id);
    }

    const checkDeadline = (date) => {
        console.log(UserService.getTimestamp());
        return UserService.getTimestamp() === date ? true : false;
    }

    return(
        <div>
            <UserLayout>
                <div className="flex-row justify-between flex-center px-10 py-10">
                    <div className="title">Deadline</div>
                    <div className="flex-row flex-center">
                        <Button
                            className="default-button mx-10"
                            onClick={ createDeadline }
                        >
                            Tambah Baru
                        </Button>
                        <Button onClick={ () => history.goBack() }>
                            Kembali
                        </Button>
                    </div>
                </div>
                <Card className="default-card px-30 py-30">
                {
                    deadlines.map((deadline) => (
                        <Card
                            className={"white flex-row justify-between flex-center my-15 px-20 py-15 " + (checkDeadline(deadline.cl_assignment_end) ? "default-card bg-red" : "violet-card")}
                            onClick={() => openDeadline(deadline.cl_assignment_id) }
                        >
                            <div>{ deadline.cl_assignment_name}</div>
                            <div>{ deadline.cl_assignment_end } { checkDeadline(deadline.cl_assignment_end) ? "(Hari Ini)" : null }</div>
                        </Card>
                    ))
                }
                </Card>
            </UserLayout>
        </div>
    );
}

export default Deadline;