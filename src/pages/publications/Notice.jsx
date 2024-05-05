import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./notice.scss"
import AlumniList from '../../components/AlumniList'
import NoticeList from '../../components/NoticeList'

const Notice = () => {
    return (
        <div className="notice">
            <Sidebar />
            <div className="noticeContainer">
                <Navbar />
                <NoticeList />
            </div>
        </div>
    )
}

export default Notice