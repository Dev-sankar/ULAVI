import React,{useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import { Button } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';
import axios from  "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';






const ServiceDetail= ({ match }) => {
  const [ServiceDetails, setServiceDetails] = useState([]); // Initialize ServiceDetails as an empty array
  const [searchTerm, setSearchTerm] = useState('');




  const [id, setId] = useState("");
  const [name, setname] = useState("");

  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Services, setServices] = useState("");
  const [image, setimage] = useState({url:""});

  const [show, setShow] = useState(false);
  
 
  


  const handleClose = () => setShow(false);
  const handleShow = (single) => {setShow(true);setId(single._id);setname(single.name);setcategory(single.category);setPrice(single.Price);setServices(single.Services);setdescription(single.description);setimage(single.image)};




  







  useEffect(() => {
    loadService();
  }, []);

  const loadService = async () => 
  {
     try 
     {
         const response = await fetch('http://localhost:5000/api/users/ServicesDetails',{ credentials: 'include'});
          const data = await response.json(); 
          setServiceDetails(data); 
        } 
        catch (error) 
        { console.error('Error fetching data:', error); } };





     






        
        const deleteServiceDetails = async (id) => {
          try {
            const response = await fetch(`http://localhost:5000/api/users/ServicesDetails/${id}`, {
              method: 'DELETE',
              credentials: 'include' // Include credentials if necessary
            });
        
            if (!response.ok) {
              throw new Error('Failed to delete service details');
            }
        
            const data = await response.json();
            console.log('Service details deleted:', data);
            window.location.reload();
            
            // Show success toast notification
            toast.success('Service details deleted successfully');
        
            return data;
          } catch (error) {
            console.error('Error deleting service details:', error);
            
            // Show error toast notification
            toast.error('Error deleting service details');
          }
        };





        // Serivcedetails  Update Start
  const handleUpload = async (e, id) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('name', name);
 
    formData.set('category', category);
    formData.set('Price', Price);
    formData.set('Services', Services)
    formData.set('description', description);
    formData.set('image', image);


    try {
      const response = await axios.put(`http://localhost:5000/api/users/ServicesDetails/update/${id}`, formData,
        {
          headers: {
            "Content-Type": 'multipart/form-data',
              
          },withCredentials: true 

        }
      ); console.log(response);

      if (response) {
        toast.success("Upload successful!");
        await new Promise((resolve) => setTimeout(resolve, 500));
        window.location.reload();


        // ...
      } else {
        toast.error("Upload failed.");
        // Display error message to user
        // ...
      }
    } catch (error) {
      console.log(error);
      toast.error("Error uploading: " + error);
      // Display error message to user
      // ...
    }

  }

  // Serivcedetails  Update End
        



  
// Filters Start
const ServiceDetailss = ServiceDetails.filter((ServiceDetails) =>
ServiceDetails._id.toLowerCase().includes(searchTerm.toLowerCase())
); 

// Filters End 



  return(
    <div className="user113">

     


         
         <div className="search-bar-container" style={{ marginLeft: '67%', marginTop: '7%' }}>
        <button style={{ backgroundColor: '', border: 'none', cursor: 'pointer' }}>
          <input
            type="text"
            placeholder="Search by ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginLeft: '10%' }}
          />
          {/* <FontAwesomeIcon icon={faSearch} style={{ color: 'white', paddingLeft: '10px' }} /> */}
        </button>

      </div>

        
      <Link to='/ServiceDetailscreatefrom' ><Button  intent="success" style={{marginTop:"-8vh" ,marginLeft:"5vh"}}>Create ServiceDetail</Button></Link>


      <h1 style={{paddingLeft:'90vh'}}>Service deatils</h1>
         <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              
                <th>Category</th>
                <th>Description</th>
                <th>Price</th>
                <th>Services</th>

                <th>image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(ServiceDetails) && ServiceDetailss.map((ServiceDetails) => ( // Check if ServiceDetails is an array before mapping over it
                <tr key={ServiceDetails._id}>
                  <td>{ServiceDetails._id}</td>
                  <td>{ServiceDetails.name}</td>
               
                  <td>{ServiceDetails.category}</td>
                  <td>{ServiceDetails.description}</td>
                  <td>{ServiceDetails.Price}</td>
                  <td>{ServiceDetails.Services}</td>
                  <td><img src={ServiceDetails.image.url} alt="" style={{ width: '200px', height: 'auto' }} ></img></td>
                  <td>
                  <Button intent="primary" onClick={()=>handleShow(ServiceDetails)} style={{marginTop:"-3vh"}}>Update</Button>
                    <Button  intent="danger" onClick={()=>deleteServiceDetails(ServiceDetails._id)}> Delete</Button>
                    </td>

                </tr>
              ))}
            </tbody>
            <tfoot>
             
            </tfoot>
            </table>



            <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                    <form onSubmit={(e) => handleUpload(e,id)}>
                      <h1> ServiceDetail </h1>

                      <label htmlFor="name">ServiceDetail name:</label>
                      <input type="text" id="name" value={name} onChange={(e) => {setname(e.target.value) }} name="name" required />
                   
                      <label htmlFor="category">Service Category:</label>
                      <input type="text" id="category" value={category} onChange={(e) => setcategory(e.target.value)} name="category" required />
                      <label htmlFor="description">Service Description:</label>
                      <input type="text" id="description" value={description} onChange={(e) => setdescription(e.target.value)} name="description" required />
                      <label htmlFor="Price">Service Price:</label>
                      <input type="text" id="Price" value={Price} onChange={(e) => setPrice(e.target.value)} name="Price" required />
                      <label htmlFor="Services">Enter The Services:</label>
                      <input type="text" id="Services" value={Services} onChange={(e) => setServices(e.target.value)} name="Services" required />
                      <label htmlFor="image">ServiceDetail image:</label>
                      <img src={image.url} alt="" style={{width:"10rem",height:"10rem"}} />
                      <input type="file" id="image" onChange={(e) => setimage(e.target.files[0])} accept="image/*" name="image"  />
                      <Button type="submit" intent="primary">
                        update
                      </Button>
                    </form>
                  
                  </Modal.Body>
                  <Modal.Footer>
                    <Button intent="danger" onClick={handleClose}>
                      Close
                    </Button>
                    
                  </Modal.Footer>
                </Modal>

            

          
                      
         

         
         
         

   

    </div>
  )
}

export default ServiceDetail;