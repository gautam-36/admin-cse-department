import React, { useState, useEffect } from 'react';
import Faculty from '../pages/faculty/Faculty';

const FacultyForm = ({ currentFaculty, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [joiningYear, setJoiningYear] = useState('');
    const [major, setMajor] = useState('');

    useEffect(() => {
        if (currentFaculty) {
            setName(currentFaculty.name);
            setJoiningYear(currentFaculty.joining_year);
            setMajor(currentFaculty.major);
        } else {
            setName('');
            setJoiningYear('');
            setMajor('');
        }
    }, [currentFaculty]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const faculty = {
            id: currentFaculty ? currentFaculty.id : Date.now(),
            name,
            joining_year: parseInt(joiningYear),
            major,
        };
        onSubmit(faculty);
    };

    return (
        <div className="faculty-form">
            <h3>{currentFaculty ? 'Edit Faculty' : 'Add New Faculty'}</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="joiningYear">Joining Year:</label>
                    <input
                        type="number"
                        id="joiningYear"
                        value={joiningYear}
                        onChange={(e) => setJoiningYear(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="major">Major:</label>
                    <input
                        type="text"
                        id="major"
                        value={major}
                        onChange={(e) => setMajor(e.target.value)}
                    />
                </div>
                <div className="form-actions">
                    <button type="submit">{currentFaculty ? 'Update' : 'Create'}</button>
                    <button type="button" className="cancel-button" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FacultyForm;