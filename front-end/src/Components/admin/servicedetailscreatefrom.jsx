import axios from  "axios";
import AdminNavbar from './adminNavber'
import React,{useState} from "react";
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ServiceDetailscreatefrom = () => {
    const [name, setname] = useState('');
  
    const [category, setcategory] = useState('');
    const [description,setdescription] = useState('');
    const [Price, setPrice] = useState("");
    const [Services, setServices] = useState("");
    const [image, setimage] = useState(null);


    const navigate = useNavigate();


    const handleUpload =  async(e) => {
        e.preventDefault();
        const formData = new FormData();
      
        formData.set('category',category);
        formData.set('description',description);
        formData.set('Price', Price);
        formData.set('Services', Services)
        formData.set('name', name);
        formData.set('image', image);



  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND}/api/users/ServicesDetails`,formData,
     { headers: {
        "Content-Type": 'multipart/form-data'
      }
         
    }
    );console.log(response);
    
    if (response.status===201) {
      toast.success("Upload successful!");
      navigate('/admin');
    
      // ...
    } else {
      toast.error("Upload failed.");
      // Display error message to user
      // ...
    }
  } catch (error) {
    toast.error("Error uploading: " + error);
    // Display error message to user
    // ...
  }

} 






return (
    <>
  
  <AdminNavbar></AdminNavbar>

    <div className="servicepage">
    <div className="ventor-form">
    <form onSubmit={handleUpload}>
      <h1> ServiceDetail </h1>
    
      <label htmlFor="name">ServiceDetail name:</label>
      <input type="text" id="name" value={name} onChange={(e)=> setname(e.target.value)}name="name" required />
   
      <label htmlFor="category">ServiceDetail Category:</label>
      <input type="text" id="category" value={category} onChange={(e)=> setcategory(e.target.value)} name="category" required />
      <label htmlFor="description">ServiceDetail Description:</label>
      <input type="text" id="description" value={description} onChange={(e)=> setdescription(e.target.value)} name="description" required />
      <label htmlFor="Price">ServiceDetail Price:</label>
      <input type="text" id="Price" value={Price} onChange={(e)=> setPrice(e.target.value)} name="Price" required />
      <label htmlFor="Services">Enter The Services:</label>
      <input type="text" id="Services" value={Services} onChange={(e)=> setServices(e.target.value)} name="Services" required />
      <label htmlFor="image">ServiceDetail image:</label>
      <input type="file" id="image" onChange={(e)=> setimage(e.target.files[0])} accept="image/*" name="image" required />
      <button type="submit">
        Upload
      </button>
      </form>
    </div>
    </div>
  

    </>

)




};


export default ServiceDetailscreatefrom;