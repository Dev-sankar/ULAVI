import React,{Fragment,useEffect, useState} from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button,InputGroup } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';
import Footer from "../Components/Footer"
import Navbar from './Navbar';


const ServiceDetail= () => {
  const [filters, setfilers]=useState([]);
  const [ServiceDetails, setServiceDetails] = useState({
    name:'',
    type:'',
    category:'',
    description:'',
    image:"null"
  }); // Initialize ServiceDetails as an empty array
  
  const {name}=useParams();
  useEffect(()=>{
    
  })
    console.log(name);
  useEffect(() => {
    loadService();
  }, []);

  const loadService = async () => 
  {
     try 
     {
         const response = await fetch(`http://localhost:5000/api/users/ServicesDetails/name/${name}`,{ credentials: 'include'});
          const data = await response.json(); 
          setServiceDetails(data); 
        } 
        catch (error) 
        { console.error('Error fetching data:', error); } };


  
    return(
    
        <Fragment>

<Navbar></Navbar>

<div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: '500px'}}>
                <p className="fs-5 fw-bold  name"><h1>Greenhouse Services</h1></p>
                {/* <h1 className="display-5 mb-5">Services That We Offer For You</h1> */}
            </div>
            </div>



<section id="portfolio-details" className="portfolio-details" >
{Array.isArray(ServiceDetails) && ServiceDetails.map((ServiceDetails) => (
      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-8">
            <div className="portfolio-details-slider swiper">
              <div className="swiper-wrapper align-items-center">
             
                <div className="swiper-slide">
                
                  <img   src={ServiceDetails.image.url}
                        className="card-img-top"
                        alt="Serivce Image"   style={{
                          maxHeight: '500px',
                          objectFit: 'cover',
                          cursor: 'pointer',
                          width: '100%',
                          borderRadius: '8px 8px 0 0',
                        }} />
                </div>
{/* 
                // <div className="swiper-slide">
                //   <img src="assets/img/portfolio/portfolio-2.jpg" alt=""  />
                // </div>

                // <div className="swiper-slide">
                //   <img src="assets/img/portfolio/portfolio-3.jpg" alt="" />
                // </div> */}

              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
              <li><strong>Name</strong>: {ServiceDetails.name}</li>
                <li><strong>type</strong>: {ServiceDetails.type}</li>
                <li><strong>category</strong>:{ServiceDetails.category}</li>
                {/* <li><strong>Project date</strong>: 01 March, 2020</li>
                <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li> */}
                <li><strong>description</strong>: {ServiceDetails.description}</li>
                <li></li>
                <li></li>
              <Button intent="primary">Order now</Button>
              </ul>
            </div>
            <div className="portfolio-description">
              {/* <h2>This is an example of portfolio detail</h2> */}
              <p>
              
             
              </p>

            </div>
          </div>
         
        </div>

      </div>
         ))};
      </section>




<Footer></Footer>

        </Fragment>






    
    )

    

}




export default  ServiceDetail;