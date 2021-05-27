import React, { createContext, useState } from 'react';

export const ClassContext = createContext();

export const ClassProvider = (props) => {
    const [clas, setClass] = useState({
        faculty_id: "",
        study_program_id: "",
        course_id: "",
        class_id: "",
        lecturer_id: "",
        student_id: "",
        class_name: "",
        class_year: "",
        class_member: 0,
    });

    return(
        <ClassContext.Provider value={ [clas, setClass] }>
            { props.children }
        </ClassContext.Provider>
    );
}