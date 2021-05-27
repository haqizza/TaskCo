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

const MaterialView = () => {
    const history = useHistory();
    const [user] = useContext(UserContext);
    const [clas] = useContext(ClassContext);
    const [material, setMaterial] = useState({});
    const [materialName, setMaterialName] = useState('');
    const [materialDesc, setMaterialDesc] = useState('');
    const [materialPath, setMaterialPath] = useState('');
    const [editStatus, setEditStatus] = useState(false);
    const material_id = useParams().material_id;
    

    useEffect(() => {
        ClassService.getMaterial(clas.class_id, material_id).then((res) => {
            setMaterial(res);
        });
    },[clas, material_id]);
    
    const editMaterial = () => {
        setMaterialName(material.material_name);
        setMaterialDesc(material.material_desc);
        setMaterialPath(material.material_path);
        setEditStatus(true);
    }

    const updateMaterialDesc = (e) => {
        setMaterialDesc(e.target.value);
    }

    const updateMaterialName = (e) => {
        setMaterialName(e.target.value);
    }

    const updateMaterialPath = (e) => {
        // console.log(e.target.value);
        setMaterialPath(e.target.value);
    }

    const upload = () => {

    }

    const download = () => {

    }

    const saveMaterial = () => {
        setMaterial({
            material_id: material.material_id,
            material_name: materialName,
            material_desc: materialDesc,
            material_path: materialPath
        });
        UserService.updateMaterial(material);
    }

    const deleteMaterial = () => {
        ClassService.deleteMaterial(material_id);
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
                        value={ materialName }
                        onChange={ updateMaterialName }
                    />
                    <div className="flex-row flex-center mx-10">
                        <Button onClick={ () => history.goBack() }>
                            Kembali
                        </Button>
                    </div>
                </div>
                <TextArea
                    className="default-input my-10 px-20 py-20"
                    value={ materialDesc }
                    onChange={ updateMaterialDesc }
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
                    onClick={ saveMaterial }
                >
                    Simpan
                </Button>
            </div>
            </>
        :
            <>
            <div className="flex-row justify-between flex-center px-40 py-20">
                <div className="title">
                    { material.material_name }
                </div>
                <div className="flex-row flex-center">
                    <Button
                        className="default-button mx-5"
                        onClick={ editMaterial }
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
                </div>
                <TextArea
                    className="default-input width-90 mx-30 px-20 py-20 my-10"
                    value={ material.material_desc }
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
                    onClick={ deleteMaterial }
                >
                        Hapus
                </Button>
            </Card>
            </>
        }
        </UserLayout>
    );
}

export default MaterialView;