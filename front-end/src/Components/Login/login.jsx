import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const loginUser = async (userData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/users/auth`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (!response.ok) {
      }
      const data = await response.json();
      if (data.success) {
        handleSuccess(data.message, data.role);
        localStorage.setItem('userInfo',JSON.stringify(data));
      } else {
        handleError(data.message);
      }
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginUser(formState);
    } catch (error) {
      toast.error('Error logging in');
      console.error(error);
    }
  };

  const handleSuccess = (message, role) => {
    toast.success(message);
    setTimeout(() => {
      if (role === 'admin') {
        // Redirect to the admin panel
        navigate('/admin');
      } else {
        // Redirect to the normal user landing page
        navigate('/');
      }
    }, 1000);
  };

  const handleError = (message) => {
    toast.error(message);
  };


  return (
    <>
    <Navbar></Navbar>
    <div className='login-body'> 
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="input-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleInputChange}
            required
          />
        </div>
       

        <button type="submit"className='button3' >Login</button>
        <div className="register-link">
  <p>Don't have an account?</p>
  <Link to="/register">Register</Link>
   </div>
      </form>
    </div>
    </div>
    <Footer></Footer>
    </>
    
  );
};

export default LoginForm;




