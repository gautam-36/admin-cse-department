import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AlumniForm from './AlumniForm';
import { Link } from 'react-router-dom';

const AlumniList = () => {
    const [alumni, setAlumni] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [currentAlumni, setCurrentAlumni] = useState(null);

    useEffect(() => {
        // Fetch alumni data using Axios
        axios.get('http://localhost:5000/api/alumni')
            .then(response => {
                console.log(response.data)
                setAlumni(response.data);
            })
            .catch(error => {
                console.error('Error fetching alumni data:', error);
            });
    }, []);

    const handleCreate = () => {
        setShowForm(true);
        setCurrentAlumni(null);
    };

    const handleEdit = (alumni) => {
        setShowForm(true);
        setCurrentAlumni(alumni);
    };

    const handleDelete = (alumniId) => {
        // Delete alumni from the data source
        axios.delete(`http://localhost:5000/api/alumni/${alumniId}`)
            .then(() => {
                setAlumni(prevAlumni => prevAlumni.filter(a => a.id !== alumniId));
                window.location.reload();
                alert("Alumin Deleted Successfully")

            })
            .catch(error => {
                console.error('Error deleting alumni:', error);
            });
    };

    return (
        <div className="alumni-list">
            <h2>Alumni List</h2>
            <div className="alumni-actions">
                <Link to="/alumni/newAlumni">
                    <button onClick={handleCreate}>Add New Alumni</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Graduation Year</th>
                        <th>Department</th>
                        <th>Placed In</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {alumni.map((a) => (
                        <tr key={a._id}>
                            <td>{a.name}</td>
                            <td>{a.batchYear}</td>
                            <td>{a.stream}</td>
                            <td>{a.company}</td>
                            <td>
                                <div className="alumni-actions modify-body">
                                    {/* <button onClick={() => handleEdit(a)}>Edit</button> */}
                                    <button onClick={() => handleDelete(a._id)}>Delete</button>
                                </div>
                            </td>
                            <td>{a.placedIn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showForm && (
                <AlumniForm
                    currentAlumni={currentAlumni}
                    onClose={() => setShowForm(false)}
                    onSubmit={(alumni) => {
                        if (currentAlumni) {
                            // Update existing alumni
                            axios.put(`http://localhost:5000/api/alumni/${currentAlumni.id}`, alumni)
                                .then(() => {
                                    setAlumni(prevAlumni => prevAlumni.map(a => a.id === currentAlumni.id ? alumni : a));
                                    setShowForm(false);
                                })
                                .catch(error => {
                                    console.error('Error updating alumni:', error);
                                });
                        } else {
                            // Add new alumni
                            axios.post('http://localhost:5000/api/alumni', alumni)
                                .then(response => {
                                    setAlumni(prevAlumni => [...prevAlumni, response.data]);
                                    setShowForm(false);
                                })
                                .catch(error => {
                                    console.error('Error adding new alumni:', error);
                                });
                        }
                    }}
                />
            )}
        </div>
    );
};

export default AlumniList;
