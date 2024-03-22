import React, {Fragment} from "react";


function Footer(){
    return(
        <Fragment>
        
      <div className="container-fluid text-light footer mt-5 py-5 wow fadeIn One" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Our Office</h4>
                    <p className="mb-2"><i class="bi bi-geo-alt-fill"></i>     01 Mathavadi lane thirunelveli, Jaffna</p>
                    <p className="mb-2"><i class="bi bi-telephone-fill"></i>    +076 473 330 95</p>
                    <p className="mb-2"><i class="bi bi-envelope-fill"></i>    ULAVI@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Services</h4>
                    <a className="btn btn-link" href="">Green house</a>
                    <a className="btn btn-link" href="">Land Scape</a>
                    <a className="btn btn-link" href="">Home garden</a>
                    {/* <a className="btn btn-link" href="">Garden Maintenance</a>
                    <a className="btn btn-link" href="">Green Technology</a> */}
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Quick Links</h4>
                    <a className="btn btn-link" href="/About">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="/Service">Our Services</a>
                    {/* <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a> */}
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">Newsletter</h4>
                    <p>Approximately 3,700 pesticide products are currently approved for use in agriculture and the home garden. </p>
                    <div className="position-relative w-100">
                        <input className="form-control bg-light border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button"   className="btn btn py-2 position-absolute top-0 end-0 mt-2 me-2 sign" style={{color:"white"}}>SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    <div className="container-fluid copyright py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="border-bottom" href="#">@ULAVI</a>, All Right Reserved.
                </div>
                {/* <div className="col-md-6 text-center text-md-end">
                    
                    Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                </div> */}
            </div>
        </div>
    </div>

        </Fragment>
    )
}


export default Footer;