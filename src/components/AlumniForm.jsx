import React, { useState, useEffect } from 'react';

const AlumniForm = ({ currentAlumni, onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [major, setMajor] = useState('');

    useEffect(() => {
        if (currentAlumni) {
            setName(currentAlumni.name);
            setGraduationYear(currentAlumni.graduation_year);
            setMajor(currentAlumni.major);
        } else {
            setName('');
            setGraduationYear('');
            setMajor('');
        }
    }, [currentAlumni]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const alumni = {
            id: currentAlumni ? currentAlumni.id : Date.now(),
            name,
            graduation_year: parseInt(graduationYear),
            major,
        };
        onSubmit(alumni);
    };

    return (
        <div className="alumni-form">
            <h3>{currentAlumni ? 'Edit Alumni' : 'Add New Alumni'}</h3>
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
                    <label htmlFor="graduationYear">Graduation Year:</label>
                    <input
                        type="number"
                        id="graduationYear"
                        value={graduationYear}
                        onChange={(e) => setGraduationYear(e.target.value)}
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
                    <button type="submit">{currentAlumni ? 'Update' : 'Create'}</button>
                    <button type="button" className="cancel-button" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AlumniForm;