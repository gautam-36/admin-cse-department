import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const PublicationsList = () => {
    const [publication, setPublication] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [currentPublication, setCurrentPublication] = useState(null);

    useEffect(() => {
        // Fetch alumni data using Axios
        axios.get('http://localhost:5000/api/alumni')
            .then(response => {
                console.log(response.data)
                setPublication(response.data);
            })
            .catch(error => {
                console.error('Error fetching alumni data:', error);
            });
    }, []);

    const handleCreate = () => {
        setShowForm(true);
        setCurrentPublication(null);
    };

    // const handleEdit = (alumni) => {
    //     setShowForm(true);
    //     setCurrentAnnouncement(alumni);
    // };

    const handleDelete = (noticeId) => {
        // Delete alumni from the data source
        axios.delete(`http://localhost:5000/api/alumni/${noticeId}`)
            .then(() => {
                setPublication(prevNotice => prevNotice.filter(a => a.id !== noticeId));
                window.location.reload();
                alert("Notice Deleted Successfully")

            })
            .catch(error => {
                console.error('Error deleting notice:', error);
            });
    };

    return (
        <div className="notice-list">
            <h2>Publication</h2>
            <div className="notice-actions">
                <Link to="/publication/newPublication">
                    <button onClick={handleCreate}>Add New Publication</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>showing All Publications </th>
                        {/* <th>Graduation Year</th> */}
                        {/*   <th>Department</th>
                        <th>Placed In</th> */}
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {publication.map((a) => (
                        <tr key={a._id}>

                            <td>{a.stream}</td>
                            <td>
                                <div className="notice-actions modify-body">
                                    {/* <button onClick={() => handleEdit(a)}>Edit</button> */}
                                    <button onClick={() => handleDelete(a._id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default PublicationsList;
