import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import AuthProvider from './Provider/AuthProvider';
import Checkout from './pages/Checkout/Checkout';
import Bookings from './pages/Home/Home/Bookings/Bookings';
import PrivateRoute from './pages/Home/Home/Bookings/PrivateRoute';

const router = createBrowserRouter([

  {
    path: "/",
    element:<Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signup',
        element:<SignUp></SignUp>
      },
      {
        path:'checkout/:id',
        element:<Checkout></Checkout>,
        loader:({params}) => fetch(`http://localhost:3000/services/${params.id}`)
      },
      {
        path:'bookings',
        element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-6xl m-auto'>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </div>
  </React.StrictMode>,
)
