import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { link, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {
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
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/users/register`, {
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
        Navigate("/login")
        toast.success(data.message);
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
    <Navbar></Navbar>
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
    <Footer></Footer>
    </>
  );
};

export default RegistrationForm;