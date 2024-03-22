import React, {Fragment} from 'react';
import { Routes, Route} from 'react-router-dom';
import AdminNavbar from './adminNavber'
import UserDetails from './UserDetails';
import Dashboard from './adminDashboard'


import Serivce from './Services';
import ServiceDetail from './servicedetails'
import OrderGreenhouse from './ordergreehouse'
import OrderLandScape from './orderlandscape';


function AdminHome(){
    return(
        <Fragment>
            
            <AdminNavbar></AdminNavbar>
            <Routes>
        <Route path="/Userdetails" element={<UserDetails/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
       
        <Route path="/Serivce" element={<Serivce/>}/>
        <Route path="/ServiceDetail" element={<ServiceDetail/>}/>
        <Route path='/OrderGreenhouse' element={<OrderGreenhouse/>}></Route>
        <Route path='/OrderLandScape'  element={<OrderLandScape/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
      


      </Routes>

      

        </Fragment>
    )
}

export default  AdminHome;