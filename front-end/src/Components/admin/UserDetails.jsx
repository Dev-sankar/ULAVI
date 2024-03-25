import React, { useState, useEffect } from "react";
import { Button } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link } from "react-router-dom"


function Users() {
  const [users, setusers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    loadUser();
  }, []);



  // User GET Metoed

  const loadUser = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/users/profile`, { credentials: 'include' });
      const data = await response.json();
      setusers(data);
    }
    catch (error) { console.error('Error fetching data:', error); }
  };


  //User GET Method End





  // User Delete End


  const deleteUser = async (id) => {
    try {

      

      const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/users/userdeleted/${id}`, {
        method: 'DELETE',
        credentials: 'include' // Include credentials if necessary
      });

      if (!response.ok) {
        throw new Error('Failed to delete service details');
      }

      const data = await response.json();
      console.log('User deleted:', data);
   

      // Show success toast notification
      toast.success('User deleted successfully');
      await new Promise((resolve) => setTimeout(resolve, 3000));
      window.location.reload();

      return data;
    } catch (error) {
      console.error('Error deleting User:', error);

      // Show error toast notification
      toast.error('Error deleting User');
    }
  };

  //User Deleted End



  // Filters Start
const userss = users.filter((users) =>
users._id.toLowerCase().includes(searchTerm.toLowerCase())
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
      <Link to='/UserCreateForm' ><Button intent="success" style={{marginTop:"-8vh" ,marginLeft:"5vh"}}>Create User</Button></Link>

      <h1 style={{paddingLeft:'90vh'}}>Users</h1>
      <table>
        
        <thead>
          <tr>
          <th>ID</th>
            <th>Name</th>
            <th>email</th>
            

            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && userss.map((users) => ( // Check if ServiceDetails is an array before mapping over it
            <tr key={users._id}>
              <td>{users._id}</td>
              <td>{users.name}</td>
              <td>{users.email}</td>

              <td>
              
                <Button intent="danger" onClick={() => deleteUser(users._id)}> Delete</Button>
              </td>


            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
}



export default Users;