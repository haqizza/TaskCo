import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Button from '../../components/button';
import Input from '../../components/input';
import UserLayout from '../../components/Layout/Userlayout';
import TextArea from '../../components/textArea';
import UserService from '../../services/User.service';

const NoteView = () => {
    const history = useHistory();
    const [note, setNote] = useState({});
    const note_id = useParams().note_id;
    const [noteName, setNoteName] = useState('');
    const [noteDesc, setNoteDesc] = useState('');
    const [editStatus, setEditStatus] = useState(false);
    
    useEffect(() => {
        UserService.getNote(note_id).then((response) => {
            setNote(response);
        });
    },[note_id]);
    
    const editNote = () => {
        setNoteName(note.note_name);
        setNoteDesc(note.note_desc);
        setEditStatus(true);
    }

    const changeVisibility = () => {
        UserService.changeNoteVisibility(note_id);
    }

    const updateNoteDesc = (e) => {
        setNoteDesc(e.target.value);
    }

    const updateNoteName = (e) => {
        setNoteName(e.target.value);
    }

    const saveNote = () => {
        setNote({
            note_id: note.note_id,
            note_name: noteName,
            note_desc: noteDesc,
            note_timestamp: UserService.getTimestamp(),
            publicity: note.publicity
        });
        UserService.updateNote(note);
    }
    
    const deleteNote = () => {
        UserService.deleteNote(note.note_id);
    }

    return(
        <>
        {
        editStatus ?
        <UserLayout className="flex-col">
            <div className="flex-row justify-between flex-center">
                <Input
                    className="default-input mx-30 my-20 width-90 px-20 py-10 title-little"
                    value={ noteName }
                    onChange={ updateNoteName }
                />
                <Button onClick={ () => history.goBack() }>
                    Kembali
                </Button>
            </div>
            <TextArea
                className="default-input width-90 mx-30 my-10 px-20 py-20"
                value={ noteDesc }
                onChange={ updateNoteDesc }
                rows="18"
            />
            <div className="text-right">
                <Button
                    className="default-button mx-30 my-10 self-end"
                    onClick={ saveNote }
                >
                    Simpan
                </Button>
            </div>
        </UserLayout>
        :
        <UserLayout className="flex-col">
            <div className="flex-row justify-between flex-center px-40 py-20">
                <div className="title">
                    { note.note_name }
                </div>
                <div className="flex-row flex-center">
                    <Button
                        className="default-button mx-5"
                        onClick={ editNote }
                    >
                        Ubah
                    </Button>
                    <Button
                        className={ "default-button mx-5 " +  (note.publicity ? "bg-green" : "")}
                        onClick={ changeVisibility }
                    >
                        { note.publicity ? "Publik" : "Privat"}
                    </Button>
                </div>
            </div>
            <TextArea
                className="default-input width-90 mx-30 px-20 py-20"
                value={ note.note_desc }
                readOnly={ true }
                rows="20"
            />
            <div className="text-right">
                <Button
                    className="default-button bg-red mx-30 my-10 self-end"
                    onClick={ deleteNote }
                >
                    Hapus
                </Button>
            </div>
        </UserLayout>
        }
        </>
    );
}

export default NoteView;