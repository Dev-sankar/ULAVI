import React, { useState } from "react";
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GreenhouseForm = () => {
    const [currentContainer, setCurrentContainer] = useState(1);
    const [Service, setService] = useState('');
    const [Category, setCategory] = useState('');
    const [Width, setWidth] = useState('');
    const [Hight, setHight] = useState('');
    const [Maintainace, setMaintainace] = useState('');
    const [Location, setLocation] = useState('');
    const [name, setname] = useState('');
    const [address, setaddress] = useState('');
    const [number, setnumber] = useState('');
    const [WhatsAppnumber, setWhatAppnumber] = useState('');
    const [Date, setDate] = useState('');
    const [email, setemail] = useState('');
    const [image, setimage] = useState(null);
    const [loading, setLoading] = useState(false); // New loading state

    const navigate = useNavigate();

    const handleUpload = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true while uploading

        const formData = new FormData();
        formData.set('Service', Service);
        formData.set('Category', Category);
        formData.set('Width', Width);
        formData.set('Hight', Hight);
        formData.set('Maintainace', Maintainace);
        formData.set('Location', Location);
        formData.set('image', image);
        formData.set('name', name);
        formData.set('address', address);
        formData.set('number', number);
        formData.set('WhatsAppnumber', WhatsAppnumber);
        formData.set('Date', Date);
        formData.set('email', email);

        try {
            const response = await axios.post('http://localhost:5000/api/users/greenhouse', formData, {
                headers: {
                    "Content-Type": 'multipart/form-data'
                }
            });
            console.log(response);

            if (response.status === 201) {
                toast.success("Upload successful!");
                navigate('/');
            } else {
                toast.error("Upload failed.");
            }
        } catch (error) {
            toast.error("Error uploading: " + error);
            console.log(error);
        } finally {
            setLoading(false); // Set loading state to false when upload is complete
        }
    };

    const handleNextButtonClick = () => {
        setCurrentContainer(currentContainer + 1);
    };

    const handlePreviewButtonClick = () => {
        setCurrentContainer(currentContainer - 1);
    };

    return (
        <>
            <Navbar />
            <div className="servicepage">
                <div className="ventor-form">
                    {currentContainer === 1 && (
                        <form onSubmit={handleUpload}>
                            <h1>Service Details</h1>
                            <label htmlFor="Service">Enter your Service: <input type="text" id="Service" value={Service} name="Service" onChange={(e) => setService(e.target.value)} required />
                            <select id="Service" name="Service" onChange={(e) => setService(e.target.value)} value={Service} required>
                                <option value="HomeGraden">HomeGarden</option>
                                <option value="LandScape">Landscape</option>
                                <option value="Greenhouse">Greenhouse</option>
                            </select></label>
                            

                            <label htmlFor="Category"> What's Category of service:</label>
                            <input type="text" id="Category" value={Category} name="Category" onChange={(e) => setCategory(e.target.value)} required />

                            <label htmlFor="parts">Enter your land Width:</label>
                            <input type="text" id="Width" value={Width} onChange={(e) => setWidth(e.target.value)} name="Width" required />
                            <label htmlFor="style">Enter your land Height:</label>
                            <input type="text" id="Hight" value={Hight} onChange={(e) => setHight(e.target.value)} name="Hight" required />
                            <label htmlFor="Maintainace">Maintenance:  <input type="text" id="Maintainace" value={Maintainace} onChange={(e) => setMaintainace(e.target.value)} name="Maintainace" required />
                            <select id="Maintainace" name="Maintainace" onChange={(e) => setMaintainace(e.target.value)} value={Maintainace} required>
                                <option value="need">Need</option>
                                <option value="notneed">Not Need</option>
                            </select></label>
                           
                            <label htmlFor="Location">Enter your a Location:</label>
                            <input type="text" id="Location" value={Location} onChange={(e) => setLocation(e.target.value)} name="Location" required />
                            <label htmlFor="image">Enter your land image:</label>
                            <input type="file" id="image" onChange={(e) => setimage(e.target.files[0])} accept="image/*" name="image" required />
                            <button type="button" onClick={handleNextButtonClick}>Next</button>
                        </form>
                    )}
                    {currentContainer === 2 && (
                        <form onSubmit={handleUpload}>
                            <h1>Contact Details</h1>
                            <label htmlFor="name">Enter your Name:</label>
                            <input type="text" id="name" value={name} onChange={(e) => setname(e.target.value)} name="name" required />
                            <label htmlFor="address">Enter your Address:</label>
                            <input type="text" id="address" value={address} onChange={(e) => setaddress(e.target.value)} name="address" required />
                            <label htmlFor="number">Enter your Number:</label>
                            <input type="text" id="number" value={number} onChange={(e) => setnumber(e.target.value)} name="number" required />
                            <label htmlFor="WhatsAppnumber">Enter your WhatsApp Number:</label>
                            <input type="text" id="WhatsAppnumber" value={WhatsAppnumber} onChange={(e) => setWhatAppnumber(e.target.value)} name="WhatsAppnumber" required />
                            <label htmlFor="Date">Enter The Date:</label>
                            <input type="text" id="Date" value={Date} onChange={(e) => setDate(e.target.value)} name="Date" required />
                            <label htmlFor="email">Enter The Email:</label>
                            <input type="text" id="email" value={email} onChange={(e) => setemail(e.target.value)} name="email" required />
                            <button type="button" className="button89" onClick={handlePreviewButtonClick}>Previous</button>
                            <button type="submit">Upload</button>
                        </form>
                    )}
                    {loading && <div>Loading...</div>} {/* Render loader when loading state is true */}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GreenhouseForm;












