import React,{Fragment} from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Services from '../Components/serivce';
import Footer from '../Components/Footer';
import Project from '../Components/Project';
import Team from '../Components/Team';
import Feature from '../Components/Feature';
import About from './About';

function Home(){
    return(
        <Fragment>

     <Navbar></Navbar>
     <Hero></Hero>
    
     <Services></Services>
     <Project></Project>
     <Footer></Footer> 


        </Fragment>
    )
}

export default Home;