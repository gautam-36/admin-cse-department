// email,phoneNumber and linked profile link have to add 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';
import "./newAlumni.scss"

const NewAlumni = () => {
    const [name, setName] = useState('');
    const [batchYear, setBatchYear] = useState('');
    const [stream, setStream] = useState('');
    const [classs, setClasss] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [roll, setRoll] = useState('');

    const navigate = useNavigate();

    const handleImageUpload = (e) => {
        setProfileImage(e.target.files[0]);

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Upload the image first
            const formData = new FormData();
            formData.append('image', profileImage);

            const uploadResponse = await axios.post('http://localhost:5000/api/upload', formData, {

            });
            // console.log("img link is:", uploadResponse.data.imageUrl)
            // console.log(uploadResponse)
            const imageUrl = uploadResponse.data.imageUrl;

            // Create a new alumni object with the uploaded image URL
            const newAlumni = {
                name,
                batchYear,
                classs,
                stream,
                company,
                position,
                roll,
                image: imageUrl,
            };

            // Submit the new alumni data to the server
            const alumniResponse = await axios.post('http://localhost:5000/api/alumni', newAlumni);

            // Handle success response here
            console.log('New Alumni:', alumniResponse.data);

            // Reset the form fields
            setName('');
            setRoll('');
            setBatchYear('');
            setProfileImage(null);
            setCompany('');
            setPosition('');
            setClasss('');
            setStream('');

            // Navigate to the alumni list page or show a success message
            alert('Alumni added successfully!');
            navigate('/alumni');
        } catch (error) {
            // Handle error here
            console.error('Error:', error);
        }
    };


    return (
        <div className="newAlumni">
            <Sidebar />
            <div className="newAlumniContainer">
                <Navbar />
                <div className="new-alumni-page">
                    <h2>Add New Alumni</h2>
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
                            <label htmlFor="roll">Roll Number:</label>
                            <input
                                type="text"
                                id="roll"
                                value={roll}
                                onChange={(e) => setRoll(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="batchYear">Batch:</label>
                            <input
                                type="number"
                                id="batchYear"
                                value={batchYear}
                                onChange={(e) => setBatchYear(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="classs">Stream:</label>
                            <select
                                id="classs"
                                value={classs}
                                onChange={(e) => setClasss(e.target.value)}
                            >
                                <option value="">Select Class</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="M.Tech.">M.Tech</option>
                                <option value="MCA">MCA</option>

                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="stream">Stream:</label>
                            <select
                                id="stream"
                                value={stream}
                                onChange={(e) => setStream(e.target.value)}
                            >
                                <option value="">Select Stream</option>
                                <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                <option value="Information Technology">Information Technology</option>
                                <option value="AI&ML">AI&ML</option>

                            </select>
                        </div>



                        <div className="form-group">
                            <label htmlFor="company">Company Name:</label>
                            <input
                                type="text"
                                id="company"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="position">Position:</label>
                            <input
                                type="text"
                                id="position"
                                value={position}
                                onChange={(e) => setPosition(e.target.value)}
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

                        <button onClick={handleSubmit} type="submit">Add Faculty</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default NewAlumni;



// demo code from chatgpt


// // AddAlumniForm.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import './AddAlumniForm.scss';

// const AddAlumniForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         batchYear: '',
//         department: '',
//         companyName: '',
//         image: null,
//     });
//     const [imageUrl, setImageUrl] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleInputChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleImageChange = (e) => {
//         setFormData({ ...formData, image: e.target.files[0] });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const imageData = new FormData();
//             imageData.append('image', formData.image);

//             // Upload image to the server
//             const response = await axios.post('http://localhost:5000/api/uploads', imageData);

//             // Get the image URL from the response
//             const imageUrl = response.data.imageUrl;

//             // Now send all the data including the image URL to your backend
//             const alumniData = {
//                 ...formData,
//                 imageUrl: imageUrl,
//             };

//             // Send data to the REST API
//             const apiResponse = await axios.post('http://localhost:5000/api/alumni', alumniData);

//             console.log(apiResponse.data); // Assuming API sends back some response

//             // Reset form fields after successful submission
//             setFormData({
//                 name: '',
//                 batchYear: '',
//                 department: '',
//                 companyName: '',
//                 image: null,
//             });
//             setImageUrl('');
//             setErrorMessage('');
//         } catch (error) {
//             console.error('Error:', error);
//             setErrorMessage('Failed to add alumni. Please try again later.');
//         }
//     };

//     return (
//         <div className="add-alumni-form-container">
//             <h2>Add Alumni</h2>
//             {errorMessage && <p className="error-message">{errorMessage}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
//                 <input type="text" name="batchYear" placeholder="Batch Year" value={formData.batchYear} onChange={handleInputChange} required />
//                 <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleInputChange} required />
//                 <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleInputChange} required />
//                 <input type="file" name="image" accept="image/*" onChange={handleImageChange} required />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default AddAlumniForm;
