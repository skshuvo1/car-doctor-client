import { FaArrowAltCircleRight } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({service}) => {

    // eslint-disable-next-line react/prop-types
    const {title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
  <figure><img className="h-full" src={img} alt="parts" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>Price: {price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline btn-warning"><FaArrowAltCircleRight></FaArrowAltCircleRight></button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;