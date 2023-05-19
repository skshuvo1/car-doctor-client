import { useContext } from "react";
import { useLoaderData, } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'

const Checkout = () => {
    const service = useLoaderData();
    const {_id, title,img, price } = service;
    console.log(price);

    const { users } = useContext(AuthContext)
    console.log(users);
    console.log(service);

    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const order = {
            customer: name,
            email,
            date,
            _id,
            title,
            img
        
        }
        console.log(order);

        fetch(`http://localhost:3000/bookings/`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'success',
                    text: 'Service Booking Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col  ">

                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleOrder}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' defaultValue={users?.displayName} className="input input-bordered px-12" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>Email
                                    </label>
                                    <input type="email" defaultValue={users?.email} name="email" className="input input-bordered px-12" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name="date" className="input input-bordered px-12" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Due amount</span>
                                    </label>
                                    <input type="text" defaultValue={`$` + price} name='price' className="input input-bordered px-12" />

                                </div>
                            </div>
                            <div className="form-control mt-12">
                                <input className="btn btn-primary" type="submit" value="Order Now" />
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;