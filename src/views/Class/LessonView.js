import React, { useContext, useEffect, useState } from 'react';
import UserLayout from '../../components/Layout/Userlayout';
import Card from '../../components/card';
import Button from '../../components/button';
import { useHistory, useParams } from 'react-router';
import { ClassContext } from '../../services/ClassContext';
import ClassService from '../../services/Class.service';

const LessonView = () => {
    const history = useHistory();
    const [clas] = useContext(ClassContext);
    const [lesson, setLesson] = useState({});
    const lesson_id = useParams().lesson_id;

    useEffect(() => {
        ClassService.getLesson(clas.class_id, lesson_id).then((res) => {
            setLesson(res);
        })
    },[clas, lesson_id]);

    const open = (page) => {
        history.push(lesson_id + '/'+ page);
    }

    return(
        <div>
            <UserLayout>
                <div className="flex-row justify-between flex-center px-10 py-10">
                    <div className="title">{ lesson.lesson_name }</div>
                    <Button onClick={ () => history.goBack() }>
                        Kembali
                    </Button>
                </div>
                <Card className="default-card px-30">
                    <div className="my-15">Pengampu: { lesson.lesson_lecturer }</div>
                    <div className="flex-col justify-center my-10">
                        <Card
                            className="violet-card white flex-row justify-between flex-center my-10 px-20 py-25"
                            onClick={ () => open('material-lecturer') }
                        >
                            <div className="light font-size-20">Materi Terkait dari Dosen</div>
                        </Card>
                        <Card
                            className="violet-card white flex-row justify-between flex-center my-10 px-20 py-25"
                            onClick={ () => open('material-student') }
                        >
                            <div className="light font-size-20">Materi Terkait dari Mahasiswa</div>
                        </Card>
                        <Card
                            className="default-card bg-light-grey flex-row justify-between flex-center my-10 px-20 py-25"
                            onClick={ () => open('task') }
                        >
                            <div className="light font-size-20">Tugas</div>
                        </Card>
                    </div>
                </Card>
            </UserLayout>
        </div>
    );
}

export default LessonView;