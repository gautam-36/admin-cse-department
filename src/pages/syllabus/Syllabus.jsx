import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./syllabus.scss"
import AlumniList from '../../components/AlumniList'
import NoticeList from '../../components/NoticeList'
import NewsList from '../../components/NewsList'
import SyllabusList from '../../components/SyllabusList'

const Syllabus = () => {
    return (
        <div className="news">
            <Sidebar />
            <div className="newsContainer">
                <Navbar />
                <SyllabusList />
            </div>
        </div>
    )
}

export default Syllabus;