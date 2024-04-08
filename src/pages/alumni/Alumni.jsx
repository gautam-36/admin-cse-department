import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./alumni.scss"
import AlumniList from '../../components/AlumniList'

const Alumni = () => {
    return (
        <div className="alumni">
            <Sidebar />
            <div className="alumniContainer">
                <Navbar />
                <AlumniList />
            </div>
        </div>
    )
}

export default Alumni