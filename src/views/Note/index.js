import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/button';
import Card from '../../components/card';
import UserLayout from '../../components/Layout/Userlayout';
import UserService from '../../services/User.service';
import { UserContext } from '../../services/UserContext';

const Note = (props) => {
    const history = useHistory();
    const [notes, setNotes] = useState([]);
    

    useEffect(() => {
        UserService.getNotes().then((response) => {
            setNotes(response);
        });
    },[])
    
    const openNote = (note_id) => {
        history.push('/note/'+ note_id);
    }
    
    const createNote = () => {
        var note_id = UserService.createNote();
        history.push('/note/'+ note_id);
    }

    return(
        <UserLayout>
            <div className="px-30">
                <div className="flex-row justify-between flex-center px-10 py-10">
                    <div className="title">Catatan</div>
                    <Button onClick={() => createNote } >
                        Tambah Baru
                    </Button>
                </div>
                <Card className="default-card px-30 py-30">
                {
                    notes.map((note) => (
                        <Card
                            key={   note.note_id }
                            className="violet-card white flex-row justify-between flex-center my-15 px-20 py-15"
                            onClick={() => openNote(note.note_id) }
                        >
                            <div>{ note.note_name }</div>
                            <div>{ note.note_timestamp }</div>
                        </Card>
                    ))
                }
                </Card>
            </div>
        </UserLayout>
    );
}

export default Note;