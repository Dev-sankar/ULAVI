import React, { Fragment} from 'react';
import { Link } from 'react-router-dom'

function AdminNavbar(){
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
<a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
    <h1 className="m-0">Admin</h1>
</a>
<button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0">
        <Link to="http://localhost:3000/admin/Dashboard" className="nav-item nav-link active">Dashboard</Link>
        <Link to="http://localhost:3000/admin/Serivce" className="nav-item nav-link">Services</Link>
        <Link to="http://localhost:3000/admin/ServiceDetail" className="nav-item nav-link">Services deatils</Link>
        <Link to="http://localhost:3000/admin/Userdetails" className="nav-item nav-link">Users</Link>
        <div className="nav-item dropdown">
        </div>
        <Link to="http://localhost:3000/admin/Order" className="nav-item nav-link">Orders</Link>
    </div>

</div>
</nav>

        </Fragment>
    )
};


export default AdminNavbar;



