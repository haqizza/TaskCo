import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../services/UserContext';
import UserLayout from '../../components/Layout/Userlayout';
import Button from '../../components/button';
import Input from '../../components/input';
import { useHistory } from 'react-router';
import { ClassContext } from '../../services/ClassContext';
import ClassService from '../../services/Class.service';

const Schedule = () => {
    const history = useHistory();
    const [user] = useContext(UserContext);
    const [clas, setClass] = useContext(ClassContext);
    const [schedule, setSchedule] = useState('');
    const userTemp = user.userData;
    const [howTo, setHowTo] = useState(false);
    const source = "kteq6u11grejrhoe80qrq3ks0k@group.calendar.google.com"


    
    useEffect(() => {
        // ClassService.saveCurrentClass(clas);
    },[])

    const addSchedule = () => {
        console.log(clas);
        ClassService.addSchedule(clas, schedule);
    }

    const updateSchedule = (e) => {
        setSchedule(e.target.value);
    }

    const showHowTo = () => {
        setHowTo( howTo ? false : true);
    }

    return(
        <div>
            <UserLayout>
                <div className="flex-row px-10 py-10">
                    <div className="title">
                        Jadwal Kuliah
                    </div>
                    <Button onClick={ () => history.goBack() }>
                        Kembali
                    </Button>
                </div>
                { clas.class_schedule ?
                    <iframe
                        title="schedule"
                        src={"https://calendar.google.com/calendar/embed?src="+ clas.class_schedule +"&ctz=Asia%2FJakarta"}
                        className="default-card px-0 py-0 width-100"
                        height="800"
                        frameborder="0"
                        scrolling="no"
                    />
                    :
                    <div className="px-30 py-50 flex-col justify-between flex-start">
                        <div className="title-small text-center my-20">
                            Kelas Anda Belum Punya Kalender Jadwal Kuliah
                        </div>
                        <div className="margin-auto flex-col width-70">
                            {
                                user.userData.class_representative ?
                                <>
                                    <div className="flex-row flex-center justify-center">
                                        <div className="my-10 mx-10">ID Kalender</div>
                                        <Input
                                            className="default-input width-70 my-10 mx-10"
                                            value={ schedule }
                                            onChange={ updateSchedule }
                                        />
                                    </div>
                                    <Button
                                        className="default-button self-center my-10 mx-10"
                                        onClick={ addSchedule }
                                    >
                                        Tambah Kalender
                                    </Button>
                                    <div className="flex-col flex-center">
                                        <div
                                            className="default-card text-link text-center"
                                            onClick={ showHowTo }
                                        >
                                            Cara Membuat Kalender
                                        </div>
                                        {
                                            howTo ?
                                            <div className="px-50 px-10">
                                                <div className="my-10">
                                                    1. <a
                                                        href="https://calendar.google.com/calendar/u/0/r/settings/createcalendar"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-link"
                                                        >
                                                        Buat kalender baru di Google Calendar.
                                                    </a> 
                                                </div>
                                                <div className="my-10">
                                                    2. Isi nama dan deskripsi sesuai kelas.
                                                </div>
                                                <div className="my-10">
                                                    3. Setelah kalender berhasil dibuat, klik kalender yang telah dibuat, di bagian <span className="green">Setelan untuk kalender saya</span> di panel sebelah kiri.
                                                </div>
                                                <div className="my-10">
                                                    4. Lalu pilih <span className="green">Integrasikan kalender saya</span>.
                                                </div>
                                                <div className="my-10">
                                                    5. Salin <span className="green">ID Kalender</span> ke formulir di atas.
                                                </div>
                                            </div>
                                            : null
                                        }
                                    </div>
                                </>
                                :
                                <div className="text-center">
                                    Hubungi Perwakilan Kelas Anda
                                </div>
                            }
                        </div>
                    </div>    
                }
            </UserLayout>
        </div>
    );
}

export default Schedule;