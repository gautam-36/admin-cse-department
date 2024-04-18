import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import "./newFaculty.scss"
import axios from 'axios';

const NewFaculty = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [joinYear, setJoinYear] = useState('');
    const [qualification, setQualification] = useState('');
    const [designation, setDesignation] = useState('');
    const [facultyType, setFacultyType] = useState('');
    const [confrence, setConfrence] = useState('');
    // const [portfolio, setPortfolio] = useState('');
    const [teaching, setTeaching] = useState('');
    const [research, setResearch] = useState('');
    const [national, setNational] = useState('');
    const [international, setInternational] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [bioDatas, setBioData] = useState(null);
    const [expertise, setExpertise] = useState(null);

    const navigate = useNavigate();

    const handleImageUpload = (e) => {
        setProfileImage(e.target.files[0]);

    };
    const handleBioDataUpload = (e) => {
        setBioData(e.target.files[0]);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // upload the image first 
            const formData = new FormData();
            formData.append('image', profileImage);
            const uploadResponse = await axios.post('http://localhost:5000/api/upload', formData, {

            })
            const imageUrl = uploadResponse.data.imageUrl
            console.log(imageUrl);

            // // upload bioData pdf 
            // const formDataa = new FormData();
            // formDataa.append('image', bioDatas);
            // const uploadBioData = await axios.post('http://localhost:5000/api/upload', formDataa, {

            // })
            // const bioDataUrl = uploadBioData.data.imageUrl



            // Create a new faculty object
            const newFaculty = {
                name,
                email,
                phone,
                joinYear,
                confrence,
                teaching,
                research,
                national,
                international,
                designation,
                facultyType,
                qualification,
                expertise,
                image: imageUrl,
                // bioData: bioDataUrl,

            };



            // Submit the new alumni data to the server
            const facultyResponse = await axios.post('http://localhost:5000/api/faculty', newFaculty);

            // Handle success response here
            console.log('New Alumni:', facultyResponse.data);

            // Reset the form fields
            setName('');
            setEmail('');
            setPhone('');
            setJoinYear('');
            setQualification('');
            setDesignation('');
            setFacultyType('');
            setConfrence('');
            setExpertise('');
            setTeaching('');
            setResearch('');
            setNational('');
            setInternational('');
          

            // setProfileImage(null);

            // Navigate to the faculty list page or show a success message
            alert('Faculty Member added successfully!');
            navigate('/faculty');

        }
        catch (error) {
            console.log('Error:', error);
        }




    };


    return (
        <div className="newFaculty">
            <Sidebar />
            <div className="newFacultyContainer">
                <Navbar />
                <div className="new-faculty-page">
                    <h2>Add New Faculty</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Phone Number:</label>
                            <input
                                type="number"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="joinYear">Year of Joining:</label>
                            <input
                                type="number"
                                id="joinYear"
                                value={joinYear}
                                onChange={(e) => setJoinYear(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="qualification">Highest Degree Qualification:</label>
                            <select
                                id="qualification"
                                value={qualification}
                                onChange={(e) => setQualification(e.target.value)}
                            >
                                <option value="">Select Highest Degree </option>
                                <option value="M.Tech">M.Tech</option>
                                <option value="ph.D.">ph.D.</option>

                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="designation">Designation:</label>
                            <select
                                id="designation"
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                            >
                                <option value="">Select Designation</option>
                                <option value="Assistant Professor">Assistant Professor</option>
                                <option value="Associate Professor">Associate Professor</option>
                                <option value="Professor">Professor</option>
                                <option value="Chairperson">Chairperson</option>
                                <option value="Dean">Dean</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="facultyType">Faculty Type:</label>
                            <select
                                id="facultyType"
                                value={facultyType}
                                onChange={(e) => setFacultyType(e.target.value)}
                            >
                                <option value="">Select </option>
                                <option value="Permanent">Permanent</option>
                                <option value="Contractual">Contractual</option>
                               
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="teaching">Years of Experience in Teaching:</label>
                            <input
                                type="number"
                                id="teaching"
                                value={teaching}
                                onChange={(e) => setTeaching(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="research">Years of Experience in Research:</label>
                            <input
                                type="number"
                                id="research"
                                value={research}
                                onChange={(e) => setResearch(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="national">National Journals:</label>
                            <input
                                type="number"
                                id="national"
                                value={national}
                                onChange={(e) => setNational(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="international">International Journals:</label>
                            <input
                                type="number"
                                id="international"
                                value={international}
                                onChange={(e) => setInternational(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="national">Seminar and Confrences:</label>
                            <input
                                type="number"
                                id="confrence"
                                value={confrence}
                                onChange={(e) => setConfrence(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">  Feild of  Research and Expertise :</label>
                            <input
                                type="text"
                                id="expertise"
                                value={expertise}
                                onChange={(e) => setExpertise(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="profileImage">Profile Image:</label>
                            <input
                                type="file"
                                id="profileImage"
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="bioData" className='file-input-label'>Upload Brief Bio Data:</label>
                            <input
                                type="file"
                                id="bioData"
                                accept=".pdf"
                                onChange={handleBioDataUpload}
                            />
                        </div> */}

                        <button onClick={handleSubmit} type="submit">Add Faculty</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewFaculty;