import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";


const Bookings = () => {

    const { users } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    console.log(bookings);

    const url = `http://localhost:3000/bookings/?email=${users.email}`;
    useEffect(() => {
        
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            const remains = bookings.filter(booking => booking._id !== id);
                            setBookings(remains)
                            Swal.fire(
                                'Deleted!',
                                'Your booking has been deleted.',
                                'success'
                            )
                        }

                    })
            }
        })


    }

    const handleConfirm = (id) => {
        fetch(`http://localhost:3000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount){
alert('data confirmed')
const remaining = bookings.filter(booking => booking._id !==id);
const updated = bookings.find(booking => booking._id === id);
updated.status = 'confirm'
const newBooking = [updated, ...remaining];
console.log(newBooking);
setBookings(newBooking)

                }
            })


    }
   
    return (
        <div>
            {
                bookings.length > 0 ? <div><h3 className="m-8 font-bold text-5xl text-center">Your Bookings Are Here</h3>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Service Name</th>
                                <th>Date</th>
                                <th>Price</th>
                                <th>Email</th>
                                <th>Confirm Booking</th>
    
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleConfirm={handleConfirm}
                                ></BookingRow>)
                            }
    
    
                        </tbody>
    
    
                    </table>
                </div> 
                </div>
                :
               <div>
               <div className="alert alert-error shadow-lg justify-center mb-12 mt-8">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>No Bookings Yet !!!</span>
  </div>
</div>



</div>
            

            }
        </div>
    );
};


export default Bookings;
