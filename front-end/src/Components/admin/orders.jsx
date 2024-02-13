import { Link } from 'react-router-dom';
import OrderGreenhouse from './ordergreehouse'


function Order(){


    return(

        <Link to="/OrderGreenhouse">  <button className=" "> Greehouse <i className="bi bi-box-arrow-in-right"></i></button> </Link>

    )
}



export default Order;