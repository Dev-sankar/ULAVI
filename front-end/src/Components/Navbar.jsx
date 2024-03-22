import React, { Fragment} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function Navbar(){
//  const[isLogin, setIsLogin]=useState(false)

 const userInfo = JSON.parse(localStorage.getItem("userInfo"))

    function logout() {
        // Send a POST request to the server-side logout endpoint
        fetch('http://localhost:5000/api/users/logout', {
          method: 'POST',
          credentials: 'include'
        })
        .then(response => {
          if (response.ok) {
            setTimeout(() => {
                toast.success("logout succuss")
            }, 5000);
            localStorage.removeItem('userInfo');
            window.location.reload();
            window.location.href = '/';
            
          } else {
            throw new Error('Logout failed.');
          }
        })
        .catch(error => {
          console.error(error);
        });
      }
   

  
    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
<a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
    <h1 className="name"><img src={require("../Assets/img/Screenshot_from_2024-03-14_20-10-18-removebg-preview.png")} alt="logo" width="250px" height="90px" /></h1>
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
            {/* <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Order</a> */}
            <div className="dropdown-menu bg-light m-0">
                <a href="feature.html" className="dropdown-item">Features</a>
                <a href="quote.html" className="dropdown-item">Free Quote</a>
                <a href="team.html" className="dropdown-item">Our Team</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="404.html" className="dropdown-item">404 Page</a>
            </div>
        </div>
        <a href="/Contact" className="nav-item nav-link">Contact</a>
        <a href="" className="nav-item nav-link " > {userInfo? <Link to="/logout">  <a className="" style={{color:"green"}} onClick={logout}> {userInfo.name} </a> </Link>
         : <Link to="/login">   </Link>
        }</a>
        
   
        
        {userInfo? <Link to="/logout">  <button className=" button2" onClick={logout}> Logout <i className="bi bi-box-arrow-in-right"></i></button> </Link>
         : <Link to="/login">  <button className=" button2"> Login <i className="bi bi-box-arrow-in-right"></i></button> </Link>
        }
        
     
    </div>
</div>
</nav>

        </Fragment>
    )
};


export default Navbar;



