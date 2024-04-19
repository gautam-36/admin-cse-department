import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NoticeList = () => {
    const [notice, setNotice] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [currentNotice, setCurrentNotice] = useState(null);

    useEffect(() => {
        // Fetch alumni data using Axios
        axios.get('http://localhost:5000/api/alumni')
            .then(response => {
                console.log(response.data)
                setNotice(response.data);
            })
            .catch(error => {
                console.error('Error fetching alumni data:', error);
            });
    }, []);

    const handleCreate = () => {
        setShowForm(true);
        setCurrentNotice(null);
    };

    const handleEdit = (alumni) => {
        setShowForm(true);
        setCurrentNotice(alumni);
    };

    const handleDelete = (noticeId) => {
        // Delete alumni from the data source
        axios.delete(`http://localhost:5000/api/alumni/${noticeId}`)
            .then(() => {
                setNotice(prevNotice => prevNotice.filter(a => a.id !== noticeId));
                window.location.reload();
                alert("Notice Deleted Successfully")

            })
            .catch(error => {
                console.error('Error deleting notice:', error);
            });
    };

    return (
        <div className="notice-list">
            <h2>Notice</h2>
            <div className="notice-actions">
                <Link to="/notice/newNotice">
                    <button onClick={handleCreate}>Add New Notice</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>showing All Notices </th>
                      {/* <th>Graduation Year</th> */}
                        {/*   <th>Department</th>
                        <th>Placed In</th> */}
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {notice.map((a) => (
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

export default NoticeList;
