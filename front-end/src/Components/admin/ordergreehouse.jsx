import React,{useState,useEffect,Fragment} from "react";


function OrderGreenhouse ()  {
    const [greenhouses, setgreenhouses] = useState([]);


    useEffect(() => {
        loadgreenhouse();
      }, []);
    
      const loadgreenhouse = async () => 
      {
         try 
         {
             const response = await fetch('http://localhost:5000/api/users/greenhouse');
              const data = await response.json(); 
              setgreenhouses(data); 
            } 
            catch (error) 
            { console.error('Error fetching data:', error); } };
    

    return(
        <Fragment>
            
            
            <table>
            <thead>
              <tr>
                <th>type</th>
                <th>design</th>
                <th>parts</th>
                <th>sizes</th>
                <th>style</th>
                <th>structure</th>
                <th>shape</th>
                <th>floor</th>
                <th>material</th>
                <th>roof</th>
                <th>name</th>
                <th>address</th>
                <th>number</th>
                <th>Date</th>
                <th>email</th>
                <th>image</th>


              </tr>
            </thead>
            <tbody>
              {Array.isArray(greenhouses) && greenhouses.map((greenhouses) => ( // Check if ServiceDetails is an array before mapping over it
                <tr key={greenhouses._id}>
                  <td>{greenhouses.type}</td>
                  <td>{greenhouses.design}</td>
                  <td>{greenhouses.parts}</td>
                  <td>{greenhouses.sizes}</td>
                  <td>{greenhouses.style}</td>
                  <td>{greenhouses.structure}</td>
                  <td>{greenhouses.shape}</td>
                  <td>{greenhouses.floor}</td>
                  <td>{greenhouses.material}</td>
                  <td>{greenhouses.roof}</td>
                  <td>{greenhouses.name}</td>
                  <td>{greenhouses.address}</td>
                  <td>{greenhouses.number}</td>
                  <td>{greenhouses.Date}</td>
                  <td>{greenhouses.email}</td>
                  <td><img src={greenhouses.image.url}></img></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>


    );
}



export default OrderGreenhouse;