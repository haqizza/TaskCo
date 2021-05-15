import React from 'react';
import DefaultLayout from '../defaultLayout';

const AdminLayout = (props) => {
    return(
        <DefaultLayout>
            { props.children }
        </DefaultLayout>
    );
}

export default AdminLayout;