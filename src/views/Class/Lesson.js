import React, { useContext, useEffect, useState } from 'react';
import UserLayout from '../../components/Layout/Userlayout';
import Card from '../../components/card';
import Button from '../../components/button';
import { useHistory } from 'react-router';
import { ClassContext } from '../../services/ClassContext';
import ClassService from '../../services/Class.service';

const Lesson = (props) => {
    const history = useHistory();
    const [clas] = useContext(ClassContext);
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        ClassService.getClassLessons(clas.class_id).then((res) => {
            setLessons(res)
        })
    },[clas]);

    const openLesson = (lesson_id) => {
        history.push('lesson/' + lesson_id);
    }

    return(
        <div>
            <UserLayout>
                <div className="flex-row justify-between flex-center px-10 py-10">
                    <div className="title">{clas.class_name}</div>
                    <Button onClick={ () => history.goBack() }>
                        Kembali
                    </Button>
                </div>
                <Card className="default-card px-30">
                    <div className="title-little my-15">Mata Kuliah</div>
                    <div className="flex-col justify-center my-10">
                    {
                    lessons.map((lesson) => (
                        <Card
                            key={ lesson.lesson_id }
                            className="violet-card white flex-row justify-between flex-center my-10 px-20 py-20"
                            onClick={ () => openLesson(lesson.lesson_id) }
                        >
                            <div>{ lesson.lesson_name }</div>
                        </Card>
                    ))
                    }
                    </div>
                </Card>
            </UserLayout>
        </div>
    );
}

export default Lesson;