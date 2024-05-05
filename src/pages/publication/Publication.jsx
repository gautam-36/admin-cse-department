import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./publication.scss"
import AlumniList from '../../components/AlumniList'
import NoticeList from '../../components/NoticeList'
import NewsList from '../../components/NewsList'
import PublicationsList from '../../components/PublicationsList'

const Publication = () => {
    return (
        <div className="publication">
            <Sidebar />
            <div className="publicationContainer">
                <Navbar />
                <PublicationsList />
            </div>
        </div>
    )
}

export default Publication;