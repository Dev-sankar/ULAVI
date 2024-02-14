import React,{Fragment,useEffect, useState} from "react";
import { Button,InputGroup } from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';
import {Link} from "react-router-dom"

function Service(){


    const [serivce, setserivce] = useState({
        name:'',
        category:'',
        description:'',
        image:'null'
    });

    
   


    useEffect(() => {
        loadservice();
      }, []);
    
      const loadservice = async () => 
      {
         try 
         {
             const response = await fetch('http://localhost:5000/api/users/Services',{ credentials: 'include'});
              const data = await response.json(); 
              setserivce(data); 
            } 
            catch (error) 
            { console.error('Error fetching data:', error); } };

          

    return(
        <Fragment>
             <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: '500px'}}>
                <p className="fs-5 fw-bold  name">Our Services</p>
                <h1 className="display-5 mb-5">Services That We Offer For You</h1>
            </div>
            <div className="row g-4">
                
            <div className="container" style={{ marginTop: '8%', textAlign: 'start',       fontFamily: 'Raleway,fantasy'
 }}>
  
        <div className="row">
    
          {Array.isArray(serivce) && serivce.map((serivce) => (
            <div key={serivce._id} className="col-md-4 mb-4">
              <div className="card" style={{ maxHeight: '600px', objectFit: 'cover', width: '90%' }}>
                <Link to={`/serivce/${serivce._id}`} style={{ textDecoration: 'none' }}>
                  {serivce.image && (
                    <div className="image-container">
                      <img
                        src={serivce.image.url}
                        className="card-img-top"
                        alt="Serivce Image"
                        style={{
                          maxHeight: '200px',
                          objectFit: 'cover',
                          cursor: 'pointer',
                          width: '100%',
                          borderRadius: '8px 8px 0 0',
                        }}
                      />
                      <div className="overlay">
                       
                      </div>
                    </div>
                  )}
                </Link>
                <div className="card-body">
                <h5 className="card-title">{serivce.name}</h5>
                  {/* <h5 className="card-title">{serivce.category}</h5> */}
                  <p className="card-text">{serivce.description}</p>
                  {/* <p className="card-text">{serivce.location}</p> */}
                  {/* <p className="card-text">Land Size: {serivce.landSize}</p>
                  <p className="card-text">Price: {serivce.rentOrLeasePrice}</p> */}
                   {/* <Link to={`/serivce/${serivce.name}`} className="view-details-btn">
                          View Details
                        </Link> */}
                 <Link to={`/ServiceDetail/${serivce.name}`}> <Button intent="primary"> view details</Button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
               
              
                
             
              
             
              
             
            </div>
        </div>
    </div>

        </Fragment>
    )
}

export default Service;