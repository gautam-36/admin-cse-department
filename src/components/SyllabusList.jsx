import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SyllabusList = () => {
    const [syllabus, setSyllabus] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [currentSyllabus, setCurrentSyllabus] = useState(null);

    useEffect(() => {
        // Fetch alumni data using Axios
        axios.get('http://localhost:5000/api/alumni')
            .then(response => {
                console.log(response.data)
                setSyllabus(response.data);
            })
            .catch(error => {
                console.error('Error fetching alumni data:', error);
            });
    }, []);

    const handleCreate = () => {
        setShowForm(true);
        setCurrentSyllabus(null);
    };

    const handleEdit = (alumni) => {
        setShowForm(true);
        setCurrentSyllabus(alumni);
    };

    const handleDelete = (noticeId) => {
        // Delete alumni from the data source
        axios.delete(`http://localhost:5000/api/alumni/${noticeId}`)
            .then(() => {
                setSyllabus(prevNotice => prevNotice.filter(a => a.id !== noticeId));
                window.location.reload();
                alert("Syllabus Deleted Successfully")

            })
            .catch(error => {
                console.error('Error deleting notice:', error);
            });
    };

    return (
        <div className="notice-list">
            <h2>Syllbus</h2>
            <div className="notice-actions">
                <Link to="/syllabus/newSyllabus">
                    <button onClick={handleCreate}>Add New Syllabus</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>showing All Syllabus </th>
                      {/* <th>Graduation Year</th> */}
                        {/*   <th>Department</th>
                        <th>Placed In</th> */}
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {syllabus.map((a) => (
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

export default SyllabusList;
