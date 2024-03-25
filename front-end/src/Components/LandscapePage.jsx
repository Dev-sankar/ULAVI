// ServiceDetail.js

import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { Button } from "@blueprintjs/core";
import Navbar from './Navbar';
import Footer from "../Components/Footer";

const ServiceDetail = () => {
  const [serviceDetails, setServiceDetails] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    loadService();
  }, []);

  const loadService = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND}/api/users/ServicesDetails/name/${name}`, { credentials: 'include' });
      const data = await response.json();
      setServiceDetails(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Fragment>
      <Navbar />
      <div className="container land333">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className="fs-5 fw-bold name"><h1> Services</h1></p>
        </div>
      </div>

      <section id="portfolio-details" className="portfolio-details">
        {serviceDetails.map((serviceDetail, index) => (
          <div className="container service-card " key={index}>
            <div className="row ">
              <div className="col-lg-6">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img src={serviceDetail.image.url} className="card-img-top" alt="Service Image" />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="portfolio-info ">
                  <h3>Project information</h3>
                  <ul>
                    <li><strong>Name :</strong> {serviceDetail.name}</li>
                    <li><strong>Category :</strong> {serviceDetail.category}</li>
                    <li><strong>Description :</strong> {serviceDetail.description}</li>
                    <li><strong>Price :</strong>{serviceDetail.Price}</li>
                    <li><strong>Services :</strong> {serviceDetail.Services}</li>
                    <Link to="/GreenhouseForm" ><Button intent="success" className="mt-5 buttonser">Book Now</Button></Link>
                  </ul>
                </div>
                <div className="portfolio-description">
                  {/* <h2>This is an example of portfolio detail</h2> */}
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </Fragment>
  );
}

export default ServiceDetail;
