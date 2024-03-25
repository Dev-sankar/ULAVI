import React,{Fragment,useState} from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {  useNavigate } from 'react-router-dom';





const Contact = () => {

    

    const [name,setname] = useState('');
    const [Subject,setSubject] = useState('');
    const [Message,setMessage] = useState('');
    const [email,setemail] = useState('');

    const navigate = useNavigate();

    const handleUpload =  async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set('name', name);
        formData.set('Subject',Subject);
        formData.set('Message',Message);
        formData.set('email',email);
     

        try {
          const response = await axios.post(`${process.env.REACT_APP_BACKEND}/api/users/Conactpost`,formData,
           { headers: {
              "Content-Type": 'multipart/form-data',
             
            }
               
          }
          );console.log(response);

         
          if (response.status===201) {
            toast.success("Upload successful!");
            navigate('/');
          
            // ...
          } else {
            toast.error("Upload failed.");
            // Display error message to user
            // ...
          }
        } catch (error) {
          toast.error("Error uploading: " + error);
          console.log(error);
          // Display error message to user
          // ...
        }

} 






    

return(
    <Fragment>

<Navbar></Navbar>

<div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <p className="fs-5 fw-bold text-primary">Contact Us</p>
                    <h1 className="display-5 mb-5">If You Have Any Query, Please Contact Us</h1>
                    <p className="mb-4"> <a href="https://htmlcodex.com/contact-form"></a>.</p>
                    <form onSubmit={handleUpload}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" name="name"  value={name} onChange={(e) => setname(e.target.value)}placeholder="Your Name"  />
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Your Email" />
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" name="Subject"  value={Subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" name="Message"  value={Message} onChange={(e) => setMessage(e.target.value)} style={{height: '100px}'}}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn py-3 px-4 name" style={{background:"#033b06",color:"white"}} type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{minheight: '450px'}}>
                    <div className="position-relative rounded overflow-hidden h-100">
                        <iframe className="position-relative w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameborder="0" style={{minheight:'450px border:0}'}}allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

<Footer></Footer>


    </Fragment>
)

}


export default Contact;