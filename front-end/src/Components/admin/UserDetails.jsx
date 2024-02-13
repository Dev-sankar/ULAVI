import React,{useState,useEffect,Fragment} from "react";


function Users  ()  {
    const [users, setusers] = useState([]);


    useEffect(() => {
        loadUser();
      }, []);
    
      const loadUser = async () => 
      {
         try 
         {
             const response = await fetch('http://localhost:5000/api/users/profile',{ credentials: 'include'});
              const data = await response.json(); 
              setusers(data); 
            } 
            catch (error) 
            { console.error('Error fetching data:', error); } };
    

    return(
        <Fragment>
            
            
            <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>email</th>
                <th>password</th>
                <th></th>

              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.map((users) => ( // Check if ServiceDetails is an array before mapping over it
                <tr key={users._id}>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>{users.password}</td>
                

                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>


    );
}



export default Users;