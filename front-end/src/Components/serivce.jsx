import React, {Fragment} from "react";
import { Link, useNavigate } from 'react-router-dom';

function service(){







    return(
        <Fragment>
             <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: '500px'}}>
                <p className="fs-5 fw-bold  name">Our Services</p>
                <h1 className="display-5 mb-5">Services That We Offer For You</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded d-flex h-100">
                        <div className="service-img rounded">
                            <img className="img-fluid" src={require("../Assets/img/service-1.jpg")} alt="" />
                        </div>
                        <div className="service-text rounded p-5">
                            <div className="btn-square rounded-circle mx-auto mb-3">
                                <img className="img-fluid" src={require("../Assets/img/icon/icon-3.png")} alt="Icon" />
                            </div>
                            <h4 className="mb-3">Landscaping</h4>
                            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a className="btn btn-sm" href=""><i className="fa fa-plus text-primary me-2"></i><Link to="/Landscapepage">Read More</Link></a>
                        </div>
                    </div>
                </div>
             
              
             
              
             
            </div>
        </div>
    </div>

        </Fragment>
    )
}

export default service;