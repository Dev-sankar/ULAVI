import React, { useState, useEffect } from "react";
import { Button } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import axios from "axios";




function Serivce() {
  const [serivce, setserivce] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  
  const [id, setId] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState({url:""});

  const [show, setShow] = useState(false);
  
 
  


  const handleClose = () => setShow(false);
  const handleShow = (single) => {setShow(true);setId(single._id);setname(single.name);setdescription(single.description);setimage(single.image)};


  useEffect(() => {
    loadservice();
  }, []);


  //Serivce GET Start
  const loadservice = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/users/Services`, { credentials: 'include' });
      const data = await response.json();
      setserivce(data);
    }
    catch (error) { console.error('Error fetching data:', error); }
  };

  //Serivce GET End






//Serivce Deleted Start
  const deleteService = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/users/Services/${id}`, {
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
//Serivce Deleted End




// Serivce Update Start
  const handleUpload = async (e, id) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set('name', name);
    // formData.set('category', category);
    formData.set('description', description);
    formData.set('image', image);


    try {
      const response = await axios.put(`${process.env.REACT_APP_BACKEND}/api/users/Services/update/${id}`, formData,
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

  // Serivce Update End


// Filters Start
  const serivces = serivce.filter((serivce) =>
  serivce._id.toLowerCase().includes(searchTerm.toLowerCase())
); 

// Filters End 



  return (
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
      <Link to='/Servicecreatefrom' ><Button intent="success" style={{marginTop:"-8vh" ,marginLeft:"5vh"}} >Create Service</Button></Link>

      <h1 style={{paddingLeft:'90vh'}}>Services </h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          
            <th>description</th>
            <th>image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(serivce) && serivces.map((serivce) => ( // Check if ServiceDetails is an array before mapping over it
            <tr key={serivce._id}>
              <td>{serivce._id}</td>
              <td>{serivce.name}</td>
           
              <td>{serivce.description}</td>

              <td>
                {serivce.name && serivce.image && serivce.image.url ? (
                  <img src={serivce.image.url} alt={serivce.name} style={{ width: '300px', height: 'auto' }} />
                ) : (
                  <p>No image available</p>
                )}
              </td>

              <td>




                <Button intent="primary" style={{marginRight:"2vh"}} onClick={()=>handleShow(serivce)}>
                  Update
                </Button>

                


                <Button intent="danger" style={{marginRight:"4vh"}} onClick={() => deleteService(serivce._id)}> Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                    <form onSubmit={(e) => handleUpload(e,id)}>
                      <h1> ServiceDetail from</h1>

                      <label htmlFor="name">ServiceDetail name:</label>
                      <input type="text" id="name" value={name} onChange={(e) => {setname(e.target.value) }} name="name" required />
                   
                      <label htmlFor="description">Service Description:</label>
                      <input type="text" id="description" value={description} onChange={(e) => setdescription(e.target.value)} name="description" required />
                      <label htmlFor="image">ServiceDetail image:</label>
                      <img src={image.url}  alt="" style={{width:"10rem",height:"10rem"}} />
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

    


  );
}



export default Serivce;