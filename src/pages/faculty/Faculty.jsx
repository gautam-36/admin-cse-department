import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./faculty.scss"
import FacultyList from '../../components/FacultyList';

const Faculty = () => {
    return (
        <div className="faculty">
            <Sidebar />
            <div className="facultyContainer">
                <Navbar/>
                <FacultyList/>
            </div>
        </div>
    );
};


export default Faculty;