import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([])
    // console.log(services);

    useEffect(() => {
        fetch('http://localhost:3000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="text-center mt-12">
            <h3 className='text-red-400 font-bold mb-3'>Our Services</h3>
            <h2 className="text-5xl mb-3">Out Service Area</h2>
            <p className="w-1/2 m-auto">We treat our clients vehicles like it was our own. We take care of it and we are careful with it. Our goal is to always make the vehicles look like it just ..</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {
                services.map(service => <ServiceCard key = {service._id} service = {service}></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Services;