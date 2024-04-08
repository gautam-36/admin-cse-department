import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import "./admin.scss"
import Sidebar from '../../components/sidebar/Sidebar';
import AdminList from '../../components/AdminList';

const Admin = () => {
    return (
        <div className="admin">
            <Sidebar />
            <div className='adminContainer'>
                <Navbar />
                <AdminList />
            </div>
        </div>
    );
};

export default Admin;