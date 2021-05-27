import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Button from '../../components/button';
import Card from '../../components/card';
import UserLayout from '../../components/Layout/Userlayout';
import ClassService from '../../services/Class.service';
import { ClassContext } from '../../services/ClassContext';

const MaterialFromLecturer = () => {
    const history = useHistory();
    const [clas] = useContext(ClassContext);
    const [materials, setMaterials] = useState([]);
    const [lesson, setLesson] = useState({});
    const lesson_id = useParams().lesson_id;

    useEffect(() => {
        ClassService.getLesson(clas.class_id, lesson_id).then((res) => {
            setLesson(res);
        });
        ClassService.getMaterialsFromLecturer().then((res) => {
            setMaterials(res);
        });
    },[clas, lesson_id]);

    const createMaterial = () => {
        ClassService.createMaterial();
    }

    const openMaterial = (material_id) => {
        history.replace('/class/material/' + material_id);
    }
    
    return(
        <div>
            <UserLayout>
                <div className="flex-row justify-between flex-center px-10 py-10">
                    <div className="title">{/* lesson.lesson_name */}</div>
                    <div className="flex-row flex-center">
                        <Button
                            className="default-button mx-10"
                            onClick={ createMaterial }
                        >
                            Tambah Baru
                        </Button>
                        <Button onClick={ () => history.goBack() }>
                            Kembali
                        </Button>
                    </div>
                </div>
                <Card className="default-card px-30 py-30">
                    <div className="title-little">Materi Terkait Dari Dosen</div>
                    <div className="flex-col justify-center my-10">
                    {
                        materials.map((material) => (
                            <Card
                                className={"violet-card white flex-row justify-between flex-center my-10 px-20 py-20"}
                                onClick={() => openMaterial(material.material_id) }
                            >
                                <div>{ material.material_name}</div>
                            </Card>
                        ))
                    }
                    </div>
                </Card>
            </UserLayout>
        </div>
    );
}

export default MaterialFromLecturer;