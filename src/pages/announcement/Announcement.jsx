import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./announcement.scss"
import AlumniList from '../../components/AlumniList'
import NoticeList from '../../components/NoticeList'
import AnnouncementList from '../../components/AnnouncementList'

const Announcement = () => {
    return (
        <div className="announcement">
            <Sidebar />
            <div className="announcementContainer">
                <Navbar />
                <AnnouncementList />
            </div>
        </div>
    )
}

export default Announcement