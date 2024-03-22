import React,{useState,useEffect,Fragment} from "react";
import { Button} from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function OrderLandScape ()  {
    const [orderLandScapes, setorderLandScapes] = useState([]);


    useEffect(() => {
        loadorderLandScape();
      }, []);
    
      const loadorderLandScape = async () => 
      {
         try 
         {
             const response = await fetch('http://localhost:5000/api/users/Orderlandscape',{ credentials: 'include'});
              const data = await response.json(); 
              setorderLandScapes(data); 
            } 
            catch (error) 
            { console.error('Error fetching data:', error); } };
    




            const deleteLandscape = async (id) => {
              try {
                const response = await fetch(`http://localhost:5000/api/users/orderLandScape/${id}`, {
                  method: 'DELETE',
                  credentials: 'include' // Include credentials if necessary
                });
            
                console.log(response);
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
    

    return(
        <Fragment>
            
            <div className="user11">
            
            <table>
            <thead>
              <tr>
                <th>design</th>
                <th>type</th>
                <th>scale</th>
                <th>name</th>
                <th>address</th>
                <th>number</th>
                <th>Date</th>
                <th>email</th>
                <th>image</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {Array.isArray(orderLandScapes) && orderLandScapes.map((orderLandScapes) => ( // Check if ServiceDetails is an array before mapping over it
                <tr key={orderLandScapes._id}>
                  <td>{orderLandScapes.design}</td>
                  <td>{orderLandScapes.type}</td>
                  <td>{orderLandScapes.scale}</td>
                  <td>{orderLandScapes.name}</td>
                  <td>{orderLandScapes.address}</td>
                  <td>{orderLandScapes.number}</td>
                  <td>{orderLandScapes.Date}</td>
                  <td>{orderLandScapes.email}</td>
                  {/* <td><img src={orderLandScapes.image.url}></img></td> */}
                
                  <td>
           {orderLandScapes.name && orderLandScapes.image && orderLandScapes.image.url ? (
            <img src={orderLandScapes.image.url} alt={orderLandScapes.name} style={{ width: '300px', height: 'auto' }}  />
                ) : (
              <p>No image available</p>
                 )}
                </td>


                <td>
                    <Button intent='primary'>Update</Button> 
                    <Button  intent="danger" onClick={()=>deleteLandscape (orderLandScapes._id)}> Delete</Button>
                    </td>

                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </Fragment>


    );
}



export default OrderLandScape;