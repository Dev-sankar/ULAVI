import React,{useState} from "react";
import { json, Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "./Navbar";
import Footer from "./Footer";
import 'react-toastify/dist/ReactToastify.css';


const GreeenhouseFrom = () => {
  const [type, settype] = useState('');
  const [design, setdesign] = useState('');
  const [parts, setparts] = useState('');
  const [sizes, setsizes] = useState('');
  const [style, setstyle] = useState('');
  const [structure, setstructure] = useState('');
  const [shape, setshape] = useState('');
  const [floor, setfloor] = useState('');
  const [material, setmaterial] = useState('');
  const [roof, setroof] = useState('');
  const [name, setname] = useState('');
  const [address, setaddress] = useState('');
  const [number, setnumber] = useState('');
  const [Date, setDate] = useState('');
  const [email, setemail] = useState('');
  const [image, setimage] = useState(null);

  const handletypeChange = (e) => {
    settype(e.target.value);
  };


  const handledesignChange = (e) => {
    setdesign(e.target.value);
  };

  const handlepartsChange = (e) => {
    setparts(e.target.value);
  };

  const handlesizesChange = (e) => {
    setsizes(e.target.value);
  };


  const handlestyleChange = (e) => {
    setstyle(e.target.value);
  };

  const handlestructureChange = (e) => {
    setstructure(e.target.value);
  };

  const handleshapeChange = (e) => {
    setshape(e.target.value);
  };

  const handlefloorChange = (e) => {
    setfloor(e.target.value);
  };


  const handlematerialChange = (e) => {
    setmaterial(e.target.value);
  };


  const handleroofChange = (e) => {
    setroof(e.target.value);
  };


  const handlenameChange = (e) => {
    setname(e.target.value);
  };

  const handleaddressChange = (e) => {
    setaddress(e.target.value);
  };


  const handlenumberChange = (e) => {
    setnumber(e.target.value);
  };


  const handleDateChange = (e) => {
    setDate(e.target.value);
  };


  const handleemailChange = (e) => {
    setemail(e.target.value);
  };

  const handleimageChange = (e) => {
    setimage(e.target.file[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('type', type);
    formData.append('design', design);
    formData.append('parts', parts);
    formData.append('sizes', sizes);
    formData.append('style', style);
    formData.append('structure', structure);
    formData.append('shape', shape);
    formData.append('floor', floor);
    formData.append('name', name);
    formData.append('number', number);
    formData.append('Date', Date);
    formData.append('email', email);
    formData.append('image', image);
    try {
      const response = await fetch('http://localhost:5000/api/users/greenhouse', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('Upload successful!');
      } else {
        console.error('Upload failed.');
      }
    } catch (error) {
      console.error('Error uploading:', error);
    }
  };


return(
  <div className="Greenhouse-form">
      <h1>Greenhouse order from</h1>
      <label htmlFor="ShopName">type:</label>
      <input type="text" id="type" value={type} onChange={handletypeChange} required />
      <label htmlFor="Location">design:</label>
      <input type="text" id="design" value={design} onChange={handledesignChange} required />
      <label htmlFor="ShopType">parts:</label>
      <input type="text" id="parts" value={parts} onChange={handlepartsChange} required />
      <label htmlFor="Email">sizes:</label>
      <input type="email" id="Email" value={sizes} onChange={handlesizesChange} required />
      <label htmlFor="ShopTime">style:</label>
      <input type="text" id="style" value={style} onChange={handlestyleChange} required />
      <label htmlFor="ShopTime">structure:</label>
      <input type="text" id="structure" value={structure} onChange={handlestructureChange} required />
      <label htmlFor="ShopTime">shape:</label>
      <input type="text" id="shape" value={shape} onChange={handleshapeChange} required />
      <label htmlFor="ShopTime">floor:</label>
      <input type="text" id="floor" value={floor} onChange={handlefloorChange} required />
      <label htmlFor="ShopTime">material:</label>
      <input type="text" id="material" value={material} onChange={handlematerialChange} required />
      <label htmlFor="ShopTime">Roof:</label>
      <input type="text" id="roof" value={roof} onChange={handleroofChange} required />
            <label htmlFor="ShopTime">Name:</label>
      <input type="text" id="name" value={name} onChange={handlenameChange} required />
      <label htmlFor="ShopTime">Address:</label>
      <input type="text" id="addresss" value={address} onChange={handleaddressChange} required />
      <label htmlFor="ShopTime">Number:</label>
      <input type="text" id="number" value={number} onChange={handlenumberChange} required />
      <label htmlFor="ShopTime">Date:</label>
      <input type="text" id="Date" value={Date} onChange={handleDateChange} required />
      <label htmlFor="ShopTime">Email:</label>
      <input type="text" id="email" value={email} onChange={handleemailChange} required />
      <label htmlFor="ShopPhoto">Image:</label>
      <input type="file" id="image" value={image} onChange={handleimageChange} accept="image/*" required />
      <button type="button" onClick={handleUpload}>
        Upload
      </button>
    </div>
)

}




// const GreenhouseOrder = () => {
//   const [imageFile, setImageFile] = useState(null);
//     const [greenhouseorderstate, setgreenhouseorder] = useState ({
//         type: '',
//         design: '',
//         parts: '',
//         sizes: '',
//         style: '',
//         structure: '',
//         shape: '',
//         floor: '',
//         material:'',
//         roof: '',
//         name: '',
//         address: '',
//         number: '',
//         email: '',
//         image: null,
//     });

//     const navigate = useNavigate();

// const greenhouseuser = async (greenhouseorderstate) => {
//     try{
//         const response = await fetch('http://localhost:5000/api/users/greenhouse',{
//             method: 'POST',
//             body: FormData,
//         });
        
//         if (!response.ok) {
//             toast.error('Fail the order');
//             throw new Error('fail the order');
//           }
      
//           const data = await response.json();
//           if(response){
//             toast.success(data.message);
//           }
//           return data;
//     }
//     catch (error) {
//         console.error(error);
//         return error
//       }
//  };


// const handleInputChange = (event) => {
//     setgreenhouseorder({
//         ...greenhouseorderstate,
//         [event.target.type]: event.target.vale,
//         [event.target.design]: event.target.vale,
//         [event.target.parts]: event.target.vale,
//         [event.target.sizes]: event.target.vale,
//         [event.target.structure]: event.target.vale,
//         [event.target.shape]: event.target.vale,
//         [event.target.floor]: event.target.vale,
//         [event.target.material]: event.target.vale,
//         [event.target.roof]: event.target.vale,
//         [event.target.name]: event.target.vale,
//         [event.target.address]: event.target.vale,
//         [event.target.email]: event.target.vale,
//         [event.target.image]: event.target.vale,
//     });
// };


// const handleImageChange = (event) => {
//   setImageFile(event.target.files[0]);
// };


// const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const data = await greenhouseuser(greenhouseorderstate);
      

//          // console.log(data);
//     } catch (error) {
//         toast.error('Error registering user');
//         console.error(error);
//       }
//     };


  

//     return (
//         <>
//         <Navbar></Navbar>
//         <div className="Greenhouse-container">
//           <h2>Greenhouse order from</h2>
//           <form onSubmit={handleFormSubmit}>
//             <div className="green-field">
//               <label htmlFor="type">Type:</label>
//               <input
//                 type="type"
//                 name="type"
//                 value={greenhouseorderstate.type}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
    
//             <div className="green-field">
//               <label htmlFor="design">Design:</label>
//               <input
//                 type="design"
//                 name="design"
//                 value={greenhouseorderstate.password}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="green-field">
//               <label htmlFor="parts">Parts:</label>
//               <input
//                 type="parts"
//                 name="parts"
//                 value={greenhouseorderstate.parts}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>


//             <div className="green-field">
//               <label htmlFor="sizes">sizes:</label>
//               <input
//                 type="sizes"
//                 name="sizes"
//                 value={greenhouseorderstate.sizes}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>


//             <div className="green-field">
//               <label htmlFor="structure">structure:</label>
//               <input
//                 type="structure"
//                 name="structure"
//                 value={greenhouseorderstate.structure}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="green-field">
//               <label htmlFor="shape">shape:</label>
//               <input
//                 type="shape"
//                 name="shape"
//                 value={greenhouseorderstate.shape}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>


//             <div className="green-field">
//               <label htmlFor="floor">floor:</label>
//               <input
//                 type="floor"
//                 name="floor"
//                 value={greenhouseorderstate.floor}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>



//             <div className="green-field">
//               <label htmlFor="material">material:</label>
//               <input
//                 type="material"
//                 name="material"
//                 value={greenhouseorderstate.material}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="green-field">
//               <label htmlFor="roof">roof:</label>
//               <input
//                 type="roof"
//                 name="roof"
//                 value={greenhouseorderstate.roof}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="green-field">
//               <label htmlFor="name">name:</label>
//               <input
//                 type="name"
//                 name="name"
//                 value={greenhouseorderstate.name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
    

//             <div className="green-field">
//               <label htmlFor="address">address:</label>
//               <input
//                 type="address"
//                 name="address"
//                 value={greenhouseorderstate.address}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="green-field">
//               <label htmlFor="email">email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={greenhouseorderstate.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="green-field">
//               <label htmlFor="image">image:</label>
//                 <input type="file" name="image" accept="image/*" onChange={handleImageChange} required />
//             </div>
    
//             <button type="submit" className="greenbutton">submit</button>
//           </form>
         
//         </div>
//         <Footer></Footer>
//         </>
//       );

    

// };



export default GreeenhouseFrom ;

