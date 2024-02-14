import React,{useState,useEffect,Fragment} from "react";


function Serivce ()  {
    const [serivce, setserivce] = useState([]);
   


    useEffect(() => {
        loadservice();
      }, []);
    
      const loadservice = async () => 
      {
         try 
         {
             const response = await fetch('http://localhost:5000/api/users/Services',{ credentials: 'include'});
              const data = await response.json(); 
              setserivce(data); 
            } 
            catch (error) 
            { console.error('Error fetching data:', error); } };
    

    return(
        <Fragment>
            
            
            <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>type</th>
                <th>category</th>
                <th>description</th> 
                <th>image</th> 
              </tr>
            </thead>
            <tbody>
              {Array.isArray(serivce) && serivce.map((serivce) => ( // Check if ServiceDetails is an array before mapping over it
                <tr key={serivce._id}>
                  <td>{serivce.name}</td>
                  <td>{serivce.type}</td>
                  <td>{serivce.category}</td>
                  <td>{serivce.description}</td>
                  <td>
           {serivce.name && serivce.image && serivce.image.url ? (
            <img src={serivce.image.url} alt={serivce.name} />
                ) : (
              <p>No image available</p>
                 )}
                </td>

                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>


    );
}



export default Serivce;