import React, { Fragment} from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
<a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
    <h1 className="name">ULAVI</h1>
</a>
<button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarCollapse">
    <div className="navbar-nav ms-auto p-4 p-lg-0">
        <a href="/" className="nav-item nav-link active">Home</a>
        <a href="/About" className="nav-item nav-link">About</a>
        <a href="/service" className="nav-item nav-link">Services</a>
        {/* //<a href="/Projects" className="nav-item nav-link">Projects</a> */}
        <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Order</a>
            <div className="dropdown-menu bg-light m-0">
                <a href="feature.html" className="dropdown-item">Features</a>
                <a href="quote.html" className="dropdown-item">Free Quote</a>
                <a href="team.html" className="dropdown-item">Our Team</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">404 Page</a>
            </div>
        </div>
        <a href="/Landscapepage" className="nav-item nav-link">Contact</a>
        <Link to="/login">  <button className=" button2"> Login <i className="bi bi-box-arrow-in-right"></i></button> </Link>

    </div>
</div>
</nav>

        </Fragment>
    )
};


export default Navbar;



