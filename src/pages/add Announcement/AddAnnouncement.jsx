// email,phoneNumber and linked profile link have to add 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';
import "./addAnnouncement.scss"

const AddAnnouncement = () => {
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [url, setUrl] = useState('');


    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Upload the image first

            // Create a new notice object with the uploaded image URL
            const newAnnouncement = {
                description,
                date,
                url
            };

            // Submit the new alumni data to the server
            const announcementResponse = await axios.post('http://localhost:5000/api/alumni', newAnnouncement);

            // Handle success response here
            console.log('New Notice:', announcementResponse.data);

            // Reset the form fields
            setDescription('');
            setDate('');
            setUrl('');
            // Navigate to the alumni list page or show a success message
            alert('news added successfully!');
            navigate('/news');
        } catch (error) {
            // Handle error here
            console.error('Error:', error);
        }
    };


    return (
        <div className="newNotice">
            <Sidebar />
            <div className="newNoticeContainer">
                <Navbar />
                <div className="new-notice-page">
                    <h2>Add New Announcement</h2>
                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="description">Title of Announcement:</label>
                            <input
                                type="text"
                                id="description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">date:</label>
                            <input
                                type="text"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">URL:</label>
                            <input
                                type="text"
                                id="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}

                            />
                        </div>
                        <button onClick={handleSubmit} type="submit">Add Announcement</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default AddAnnouncement;



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
