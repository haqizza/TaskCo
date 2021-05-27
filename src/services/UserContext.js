import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState({
        isLoggedIn: false,
        userType: '',
        userData: {
            student_id: "",
            faculty_id: "",
            study_program_id: "",
            student_name: "",
            student_place_of_birth: "",
            student_date_of_birth: "",
            student_gender: "",
            student_entry_year: "",
            student_bio: "",
            user_picture: "",
            class_id: "",
            class_representative: false,
        }
    });

    return(
        <UserContext.Provider value={ [user, setUser] }>
            { props.children }
        </UserContext.Provider>
    );
}