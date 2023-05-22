// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'; 
import logo from '../../../assets/logo.svg'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../../Provider/AuthProvider';

const Header = () => {

  const {users, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
logOut()
.then(() => {
  
})
.catch(console.error())
  }

  const navber = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/about'>About</Link></li>
  {users?.email?
  <>
  <li><button onClick={handleLogOut}>Log Out</button></li>
  <li><Link to='/bookings'>My Bookings</Link></li></>
  :
  <li><Link to='/login'>Login</Link></li>
  }
  </>
  return (
    <div className="navbar bg-base-100 mb-3">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navber}
        </ul>
    </div>
    <img src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navber}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-outline btn-warning">Appoinment</button>
  </div>
</div>
  );
};

export default Header;