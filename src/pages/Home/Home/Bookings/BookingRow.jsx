// import { useState } from "react";
// import Swal from "sweetalert2";




const BookingRow = ({ booking, handleDelete, handleConfirm}) => {

    const { _id, date, price, title, img, email,status } = booking;
    
    
    

   
    return (
        <tr>
            <th>
                   
                       { status ==='confirm'?<button onClick={() => handleDelete(_id)} disabled className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>:
                       <button onClick={() => handleDelete(_id)}  className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>}
                
                
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td>
                <p>{date}</p>
            </td>
            <td><p>${price}</p></td>
            <th>
                {email}
            </th>
            <th>
        { status ==='confirm'? <span>confirmed</span>:
            <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">confirm</button>}
        </th>
        </tr>
    );
};

export default BookingRow;