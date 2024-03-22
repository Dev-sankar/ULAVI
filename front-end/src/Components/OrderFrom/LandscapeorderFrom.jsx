import React,{useState} from "react";
import {  useNavigate } from 'react-router-dom';
import Footer from '../Footer'
import Navbar from '../Navbar'
import axios from  "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LandscapeorderForm = () => {

  const [name, setname] = useState('');
  const [address, setaddress] = useState('');
  const [number, setnumber] = useState('');
  const [WhatsAppnumber,setWhatsAppnumber] = useState('');
  const [Date, setDate] = useState('');
  const [email, setemail] = useState('');
  const [image, setimage] = useState(null);


  const navigate = useNavigate();
  const handleUpload =  async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('name', name);
    formData.set('address', address);
    formData.set('number', number);
    formData.set('WhatsAppnumber', WhatsAppnumber);
    formData.set('Date', Date);
    formData.set('email', email);
    formData.set('image', image);
  
    

  try {
    const response = await axios.post('http://localhost:5000/api/users/orderLandScape',formData,
     { headers: {
        "Content-Type": 'multipart/form-data'
      }
         
    }
    );console.log(response);
    
    if (response.status===201) {
      toast.success("Upload successful!")
     navigate('/');
      // ...
    } else {
      toast.error("Upload failed.");
     
      
      // Display error message to user
      // ...
    }
  } catch (error) {
    toast.error("Error uploading: " + error);
    console.log(error);
    // Display error message to user
    // ...
  }
};

  return (
    <>
    <Navbar></Navbar>
    <div className="servicepage">
    <div className="ventor-form">
    <form onSubmit={handleUpload}>
      <h1>Personal Info</h1>

     


            <label htmlFor="name">Enter your name:</label>
      <input type="text" id="name" value={name} onChange={(e)=> setname(e.target.value)}name="name" required />
      <label htmlFor="address">Enter your address:</label>
      <input type="text" id="address" value={address} onChange={(e)=> setaddress(e.target.value)} name="address" required />
      <label htmlFor="number">Enter your PhoneNumber:</label>
      <input type="text" id="number" value={number} onChange={(e)=> setnumber(e.target.value)} name="number" required />
      <label htmlFor="WhatsAppnumber">Enter your WhatsAppnumber:</label>
      <input type="text" id="WhatsAppnumber" value={WhatsAppnumber} onChange={(e)=> setWhatsAppnumber(e.target.value)} name="WhatsAppnumber" required />
      <label htmlFor="Date">Date:</label>
      <input type="text" id="Date" value={Date} onChange={(e)=> setDate(e.target.value)}name="Date" required />
      <label htmlFor="email">Enter your Email:</label>
      <input type="email" id="email" value={email} onChange={(e)=> setemail(e.target.value)}name="email" required />
      <label htmlFor="image">Enter your image:</label>
      <input type="file" id="image" onChange={(e)=> setimage(e.target.files[0])} accept="image/*" name="image" required />
      <button type="submit">
        Upload
      </button>
      </form>
    </div>
    </div>

    <Footer></Footer>

    </>
   
  );
  
};



export default LandscapeorderForm;
