
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'animate.css/animate.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import "animate.css/animate.min.css";
import 'lightbox.js-react/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Serivce';
import Projects from './Pages/Projects'
import AdminHome from './Components/admin/adminHome'
import Login from './Components/Login/login'
import Register from './Components/Login/Register';
import GreeenhouseFrom from './Components/GreenhouseOrderFrom';
import ServiceDetail from './Components/LandscapePage'
// import Navbar from './Components/Navbar';
import  Contact from './Pages/Contact';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
    <ToastContainer />
    <Router>
      <Routes>

     
        <Route path="/" element={<Home/>}></Route>
        <Route path="/admin/*" element={<AdminHome/>}></Route>
        <Route path="/Service/*" element={<Service/>}></Route>
        <Route path="/About/*" element={<About/>}></Route>
        <Route path="/Projects/*" element={<Projects/>}></Route>
        <Route path="/ Contact/*" element={<Contact/>}></Route>
        <Route path="/login/*" element={<Login/>}></Route>
        <Route path='/register/*' element={<Register/>}></Route>
        <Route path='/GreeenhouseFrom/*' element={<GreeenhouseFrom/>}></Route>
        <Route path='/ServiceDetail/:name' element={<ServiceDetail/>}></Route>
        



      </Routes>
    </Router>

  
    </>
    
  );
}

export default App;
