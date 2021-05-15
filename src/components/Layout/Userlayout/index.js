import React from 'react';
import DefaultLayout from '../defaultLayout';

const UserLayout = (props) => {
    return(
        <DefaultLayout>
            { props.children }
        </DefaultLayout>
    );
}

export default UserLayout;