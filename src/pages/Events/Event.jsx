import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./event.scss"
import AlumniList from '../../components/AlumniList'
import NoticeList from '../../components/NoticeList'
import EventsList from '../../components/EventsList'

const Event = () => {
    return (
        <div className="event">
            <Sidebar />
            <div className="eventContainer">
                <Navbar />
                <EventsList />
            </div>
        </div>
    )
}

export default Event