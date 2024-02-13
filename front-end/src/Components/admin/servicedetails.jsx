import React,{Fragment,useEffect, useState} from "react";
import { Button } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';
import Table from 'react-bootstrap/Table';



const ServiceDetail= ({ match }) => {
  const [ServiceDetails, setServiceDetails] = useState([]); // Initialize ServiceDetails as an empty array

  useEffect(() => {
    loadService();
  }, []);

  const loadService = async () => 
  {
     try 
     {
         const response = await fetch('http://localhost:5000/api/users/ServicesDetails');
          const data = await response.json(); 
          setServiceDetails(data); 
        } 
        catch (error) 
        { console.error('Error fetching data:', error); } };

  return(
    <>

     
          
<Table responsive="sm">
  
            <thead>
              <tr>
                <th>Name</th>
                <th>type</th>
                <th>category</th>
                <th>description</th>
                <th>image</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {Array.isArray(ServiceDetails) && ServiceDetails.map((ServiceDetails) => ( // Check if ServiceDetails is an array before mapping over it
                <tr key={ServiceDetails._id}>
                  <td>{ServiceDetails.name}</td>
                  <td>{ServiceDetails.type}</td>
                  <td>{ServiceDetails.category}</td>
                  <td>{ServiceDetails.description}</td>
                  <td><img src={ServiceDetails.image.url}></img></td>
                  <td>
                    <Button intent='primary'>Update</Button> 
                    <Button  intent="danger"> Delete</Button>
                    </td>

                </tr>
              ))}
            </tbody>
          </Table>
                      
         

         
         
         
  
   

    </>
  )
}

export default ServiceDetail;