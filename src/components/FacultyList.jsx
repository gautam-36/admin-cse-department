import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FacultyForm from './FacultyForm';
import { Link } from 'react-router-dom';

const FacultyList = () => {
    const [faculty, setFaculty] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [currentFaculty, setCurrentFaculty] = useState(null);

    useEffect(() => {
        // Fetch faculty data using Axios
        axios.get('http://localhost:5000/api/faculty')
            .then(response => {
                console.log(response.data)
                setFaculty(response.data);
            })
            .catch(error => {
                console.error('Error fetching faculty data:', error);
            });
    }, []);

    const handleCreate = () => {
        setShowForm(true);
        setCurrentFaculty(null);
    };

    const handleEdit = (faculty) => {
        setShowForm(true);
        setCurrentFaculty(faculty);
    };

    const handleDelete = (facultyId) => {
        // Delete faculty from the data source
        axios.delete(`http://localhost:5000/api/faculty/${facultyId}`)
            .then(() => {
                setFaculty(prevFaculty => prevFaculty.filter(a => a.id !== facultyId));
                window.location.reload();
            })
            .catch(error => {
                console.error('Error deleting faculty:', error);
            });
    };

    return (
        <div className="faculty-list">
            <h2>Faculty List</h2>
            <div className="faculty-actions">
                <Link to="/faculty/newFaculty">
                    <button>Add New Faculty</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Joining Year</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {faculty.map((a) => (
                        <tr key={a._id}>
                            <td>{a.name}</td>
                            <td>{a.joinYear}</td>
                            <td>CSE</td>
                            <td>
                                <div className="faculty-actions">
                                    {/* <button onClick={() => handleEdit(a)}>Edit</button> */}
                                    <button onClick={() => handleDelete(a._id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showForm && (
                <FacultyForm
                    currentFaculty={currentFaculty}
                    onClose={() => setShowForm(false)}
                    onSubmit={(faculty) => {
                        if (currentFaculty) {
                            // Update existing faculty
                            axios.put(`http://localhost:5000/api/faculty/${currentFaculty.id}`, faculty)
                                .then(() => {
                                    setFaculty(prevFaculty => prevFaculty.map(a => a.id === currentFaculty.id ? faculty : a));
                                    setShowForm(false);
                                })
                                .catch(error => {
                                    console.error('Error updating faculty:', error);
                                });
                        } else {
                            // Add new faculty
                            axios.post('http://localhost:5000/api/faculty', faculty)
                                .then(response => {
                                    setFaculty(prevFaculty => [...prevFaculty, response.data]);
                                    setShowForm(false);
                                })
                                .catch(error => {
                                    console.error('Error adding new faculty:', error);
                                });
                        }
                    }}
                />
            )}
        </div>
    );
};

export default FacultyList;
