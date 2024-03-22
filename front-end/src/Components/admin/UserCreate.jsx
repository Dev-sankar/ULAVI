import React, { useState } from 'react';
import AdminNavbar from '../admin/adminNavber'

import {  useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserCreateForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const Navigate=useNavigate();

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const registerUser = async (userData) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
  
      if (!response.ok) {
        toast.error('User all ready registering ');
        throw new Error('User all ready registering ');
      }
  
      const data = await response.json();
      if(response){
        toast.success(data.message);
        
        Navigate("/admin")
      }
    return data;
    }catch (error) {
      console.error(error);
      return error
    }
      
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await registerUser(formState);
      console.log(data);
    } catch (error) {
      
      console.error(error);
    }
  };

  return (
    <>
 <AdminNavbar></AdminNavbar>
    <div className=" Regcontainer">
      <form className="form-container" onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
        />
  
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
        />
  
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
        />
  
        <button type="submit">Register</button>
      </form>
      <ToastContainer />
    </div>
 
    </>
  );
};

export default UserCreateForm;