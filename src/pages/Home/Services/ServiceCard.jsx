// import { FaArrowAltCircleRight } from "react-icons/fa";
import {Link} from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const ServiceCard = ({service}) => {

    // eslint-disable-next-line react/prop-types
    const {_id,title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
  <figure><img className="h-full" src={img} alt="parts" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Price: {price}</p>
    <div className="card-actions mt-4">
      <Link to={`/checkout/${_id}`}>
      <button className="btn btn-outline btn-primary">Book Now</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;