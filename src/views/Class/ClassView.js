import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../services/UserContext';
import UserLayout from '../../components/Layout/Userlayout';
import Card from '../../components/card';
import Button from '../../components/button';
import Input from '../../components/input';
import { useHistory, useParams } from 'react-router';
import { ClassContext } from '../../services/ClassContext';
import ClassService from '../../services/Class.service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const ClassView = (props) => {
    const history = useHistory();
    const [clas] = useContext(ClassContext);
    const class_id = useParams().class_id;

    
    const open = (page) => {
        history.push('/class/' + page);
    }

    const viewClassMember = () => {
        history.push('/class/member');
    }

    return(
        <div>
            <UserLayout>
                <div className="title px-10 py-10">{clas.class_name}</div>
                <Card className="default-card px-30 py-30 flex-col justify-start">
                    <div className="light">Kode Kelas: { class_id }</div>
                    <div
                        className="light flex-row flex-center justify-start my-10 text-link"
                        onClick={ viewClassMember }
                    >
                        <FontAwesomeIcon icon={ faUserCircle } size="lg" />
                        <div className="mx-10 light">{ clas.member_number } Member</div>
                    </div>
                    <div className="flex-col flex-wrap">
                        <Card
                            className="violet-card white text-center title-little my-10 py-30"
                            onClick={ () => open('lesson') }
                        >
                            Mata Kuliah
                        </Card>
                        <Card 
                            className="violet-card white text-center title-little my-10 py-30"
                            onClick={ () => open('schedule') }
                            >
                            Jadwal Kuliah
                        </Card>
                        <Card
                            className="violet-card white text-center title-little my-10 py-30"
                            onClick={ () => open('deadline') }
                        >
                            Deadline
                        </Card>
                    </div>
                </Card>
            </UserLayout>
        </div>
    );
}

export default ClassView;