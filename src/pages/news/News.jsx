import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import "./news.scss"
import AlumniList from '../../components/AlumniList'
import NoticeList from '../../components/NoticeList'
import NewsList from '../../components/NewsList'

const News = () => {
    return (
        <div className="news">
            <Sidebar />
            <div className="newsContainer">
                <Navbar />
                <NewsList />
            </div>
        </div>
    )
}

export default News;