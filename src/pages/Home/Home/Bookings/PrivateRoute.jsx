import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import {useLocation} from 'react-router-dom'



const PrivateRoute = ({children}) => {
    const location = useLocation()

    const {users, loading} = useContext(AuthContext);

    if(loading){
        return <progress className="progress w-56"></progress>;
    }
    if(users?.email){
        return children;
    }
    return <Navigate to='/login' state = {{from: location}} replace></Navigate>
};

export default PrivateRoute;