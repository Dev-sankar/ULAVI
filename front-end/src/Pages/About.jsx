import React,{Fragment} from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

function About(){
    return(
        <Fragment>



<Navbar></Navbar>


    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-end">
                <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                    <img className="img-fluid rounded" data-wow-delay="0.1s" src={require("../Assets/img/about.jpg")} />
                </div>
                <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
                    <h1 className="display-1  mb-0 name">1</h1>
                    <p className=" mb-4 name">Year of Experience</p>
                    <h1 className="display-5 mb-4">We Make Your Home Like A Garden</h1>
                    <p className="mb-4">
Home garden is a complex multi-functional land use system that combines multiple farming components of the homestead and provides environmental services, household needs, and employment and income generation opportunities to the households.</p>
                    <a className="btn btn py-3 px-4 sign" href="" style={{color:"white"}}>Explore More</a>
                </div>
                <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-5">
                        <div className="col-12 col-sm-6 col-lg-12">
                            <div className="border-start ps-4">
                            <i className="fa fa-users fa-3x mb-3 name"></i>
                                <h4 className="mb-3"></h4>
                                <span>This man is faced with the complete loss of productivity of his two acres of market and home garden.</span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-12">
                            <div className="border-start ps-4">
                                <i className="fa fa-users fa-3x mb-3 name"></i>
                                <h4 className="mb-3"></h4>
                                <span>The area is used as a place of work and for storage and processing of farm produce; it is also a place where people live and dispose of wastes.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   
  

<Footer></Footer>
        </Fragment>
    )
}

export default About;