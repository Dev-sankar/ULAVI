import React,{useState,useEffect,Fragment} from "react";
import { Button } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function OrderGreenhouse ()  {
    const [greenhouses, setgreenhouses] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(() => {
        loadgreenhouse();
      }, []);
    
      const loadgreenhouse = async () => 
      {
         try 
         {
             const response = await fetch('http://localhost:5000/api/users/greenhouse',{ credentials: 'include'});
              const data = await response.json(); 
              setgreenhouses(data); 
            } 
            catch (error) 
            { console.error('Error fetching data:', error); } };





            const deleteGreenhouse = async (id) => {
              try {
                const response = await fetch(`http://localhost:5000/api/users/greenhouse/${id}`, {
                  method: 'DELETE',
                  credentials: 'include' // Include credentials if necessary
                });
            
                if (!response.ok) {
                  throw new Error('Failed to delete service details');
                }
            
                const data = await response.json();
                console.log('Greenhouse order deleted:', data);
                window.location.reload();
                
                // Show success toast notification
                toast.success('Greenhouse order deleted successfully');
            
                return data;
              } catch (error) {
                console.error('Error deleting Greenhouse order:', error);
                
                // Show error toast notification
                toast.error('Error deleting Greenhouse order');
              }
            };
    

            // Filters Start
const greenhousess = greenhouses.filter((greenhouses) =>
greenhouses._id.toLowerCase().includes(searchTerm.toLowerCase())
); 

// Filters End 

    return(
        <Fragment>
            
            <div className="user11">
            <div className="search-bar-container" style={{ marginLeft: '67%', marginTop: '7%' }}>
        <button style={{ backgroundColor: '', border: 'none', cursor: 'pointer' }}>
          <input
            type="text"
            placeholder="Search by ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginLeft: '10%' }}
          />
         
        </button>

      </div>
            <h1 style={{paddingLeft:'90vh'}}>Orders</h1>
            
            <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Service</th>
                <th>Category</th>
                <th>Width</th>
                <th>Hight</th>
                <th>Maintainace</th>
                <th>Location</th>
                <th>name</th>
                <th>address</th>
                <th>number</th>
                <th>WhatsAppnumber</th>
                <th>Date</th>
                <th>email</th>
                <th>image</th>
                <th>Action</th>


              </tr>
            </thead>
            <tbody>
              {Array.isArray(greenhouses) && greenhousess.map((greenhouses) => ( // Check if ServiceDetails is an array before mapping over it
                <tr key={greenhouses._id}>
                  <td>{greenhouses._id}</td>
                  <td>{greenhouses.Service}</td>
                  <td>{greenhouses.Category}</td>
                  <td>{greenhouses.Width}</td>
                  <td>{greenhouses.Hight}</td>
                  <td>{greenhouses.Maintainace}</td>
                  <td>{greenhouses.Location}</td>
                  <td>{greenhouses.name}</td>
                  <td>{greenhouses.address}</td>
                  <td>{greenhouses.number}</td>
                  <td>{greenhouses.WhatsAppnumber}</td>
                  <td>{greenhouses.Date}</td>
                  <td>{greenhouses.email}</td>
                  <td><img src={greenhouses.image.url} alt=""></img></td>

                <td>
                  
                    <Button  intent="danger" onClick={()=>deleteGreenhouse(greenhouses._id)} style={{marginLeft:"3vh"}}> Delete</Button>
                    </td>
                </tr>

                
              ))}
            </tbody>
          </table>
          </div>
        
        </Fragment>

        


    );
}



export default OrderGreenhouse;