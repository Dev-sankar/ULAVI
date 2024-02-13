import React, {Fragment} from 'react';
import { Routes, Route} from 'react-router-dom';
import AdminNavbar from './adminNavber'
import UserDetails from './UserDetails';
import Dashboard from './adminDashboard'
import Users from './UserDetails';
import Serivce from './Services';
import ServiceDetail from './servicedetails'
// import OrderLandScape from './orderlandscape'
// import OrderGreenhouse from './ordergreehouse'
import Order from './orders'
function AdminHome(){
    return(
        <Fragment>
            
            <AdminNavbar></AdminNavbar>
            <Routes>
        <Route path="/Userdetails" element={<UserDetails/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/Serivce" element={<Serivce/>}/>
        <Route path="/ServiceDetail" element={<ServiceDetail/>}/>
        {/* <Route path="/OrderLandScape" element={<OrderLandScape/>}/>
        <Route path= "/OrderGreenhouse" element={<OrderGreenhouse/>}/> */}
        <Route path="/Order"  element={<Order/>}/>

      </Routes>

        </Fragment>
    )
}

export default  AdminHome;