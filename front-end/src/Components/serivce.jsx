import React,{Fragment,useEffect, useState} from "react";
import { Button } from "@blueprintjs/core";
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
  <div className="container" style={{ marginTop: '8%', textAlign: 'start', fontFamily: 'Raleway, fantasy' }}>
    <div className="row">
      {Array.isArray(serivce) && serivce.map((serivce) => (
        <div key={serivce._id} className="col-md-4 mb-4">
          <div className="card2" style={{ height: '100%' }}>
            <Link to={`/serivce/${serivce._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              {serivce.image && (
                <div className="image-container">
                  <Link to={`/ServiceDetail/${serivce.name}`}>
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
                  </Link>
                  <div className="overlay"></div>
                </div>
              )}
            </Link>
            <div className="card-body" style={{ minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <h3 className="card-title mt-3">{serivce.name}</h3>
              <p className="card-text mt-2" style={{fontSize:"15px"}}>{serivce.description}</p>
              <Link to={`/ServiceDetail/${serivce.name}`}>
                <Button intent="success">View Details</Button>
              </Link>
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