import React,{useState,useEffect,Fragment} from "react";


function OrderLandScape ()  {
    const [orderLandScapes, setorderLandScapes] = useState([]);


    useEffect(() => {
        loadorderLandScape();
      }, []);
    
      const loadorderLandScape = async () => 
      {
         try 
         {
             const response = await fetch('http://localhost:5000/api/users/Orderlandscape');
              const data = await response.json(); 
              setorderLandScapes(data); 
            } 
            catch (error) 
            { console.error('Error fetching data:', error); } };
    

    return(
        <Fragment>
            
            
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
                <th>imgae</th>

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
                  {/* <td>{orderLandScapes.image.url}</td> */}
                

                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>


    );
}



export default OrderLandScape;