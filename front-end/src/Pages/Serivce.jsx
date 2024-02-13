import React,{Fragment} from "react";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Services from "../Components/serivce";

function Service(){

    return(
        <Fragment>

            <Navbar></Navbar>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-3 text-white mb-4 animated slideInDown">Services</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Services</li>
                </ol>
            </nav>
        </div>
    </div>
        <Services></Services>
        <Footer></Footer>




        </Fragment>
    )
}


export default Service;