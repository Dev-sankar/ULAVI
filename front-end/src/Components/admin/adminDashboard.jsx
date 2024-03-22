import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {
  const [UserCount, setNewUserCount] = useState(0);
  const [SerivceCount, setNewSerivceCount] = useState(0);
  const [SerivcedetailCount, setNewSerivcedetailCount] = useState(0);
  const [GreenhouseCount, setGreenhouseCount] = useState(0);
  const [LandScapeCount, setLandScapeCount] = useState(0);



  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const newUserResponse =  await axios.get('http://localhost:5000/api/users/profile', { withCredentials: true, params: { isNew: true } });
        setNewUserCount(newUserResponse.data.length);

        const newServiceResponse = await axios.get('http://localhost:5000/api/users/Services',{ withCredentials: true, params: { isNew: true } });
        setNewSerivceCount(newServiceResponse.data.length);

        

        const newSerivcedetailResponse = await axios.get('http://localhost:5000/api/users/ServicesDetails',{ withCredentials: true, params: { isNew: true } });
        setNewSerivcedetailCount(newSerivcedetailResponse.data.length);

        const newGreenhouseResponse = await axios.get('http://localhost:5000/api/users/greenhouse', { withCredentials: true });
        setGreenhouseCount(newGreenhouseResponse.data.length);

        const newLandScapeResponse = await axios.get('http://localhost:5000/api/users/Orderlandscape', { withCredentials: true });
        setLandScapeCount(newLandScapeResponse.data.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div style={dashboardStyle}>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <div style={columnStyle}>
            <i className="fas fa-users" style={{fontSize:"30px"}}></i>
            <h2>Users</h2>
            <p style={{fontSize:"30px"}}>{UserCount}</p>
          </div>
        </div>
        <div style={cardStyle}>
          <div style={columnStyle}>
            <i className="fas fa-clipboard-list" style={{fontSize:"30px"}}></i>
            <h2>Service</h2>
            <p style={{fontSize:"30px"}}>{SerivceCount}</p>
          </div>
        </div>
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <div style={columnStyle}>
            <i className="fas fa-clipboard-list" style={{fontSize:"30px"}}></i>
            <h2>Service Details</h2>
            <p style={{fontSize:"30px"}}>{SerivcedetailCount}</p>
          </div>
        </div>
        <div style={cardStyle}>
          <div style={columnStyle}>
            <i className="fas fa-envelope" style={{fontSize:"30px"}}></i>
            <h2>Orders</h2>
            <p style={{fontSize:"30px"}}>{GreenhouseCount}</p>
          </div>
        </div>
        {/* <div style={cardStyle}>
          <div style={columnStyle}>
            <i className="fas fa-envelope"></i>
            <h2>Land Scape</h2>
            <p>{LandScapeCount}</p>
          </div>
        </div> */}
      </div>
      </div>
    </div>
  );
};
const dashboardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop:'5%',
  marginLeft:'15%',
};
const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
};
const cardStyle = {
  width: '35%',
  margin: '40px',
  padding: '3%',
  borderRadius: '5px',
  // color: 'white',
  backgroundImage: 'linear-gradient(to right, #033b06, #5cb85c )',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};
const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
export default Dashboard;