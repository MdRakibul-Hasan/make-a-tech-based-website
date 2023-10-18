import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './Components/Services/Register/Register.jsx';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LayOut from './Components/LayOut.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Services/Login/Login.jsx';
import AuthProvider from './Components/Services/AuthProvider.jsx';
import ServiceDetailes from './Components/Home/ServiceDetailes.jsx';
import ProtectedRoute from './Components/Services/ProtectedRoute/ProtectedRoute.jsx';
import Event from './Components/Event/Event.jsx';
import GetAQuote from './Components/OptionalPage/GetAQuote.jsx';
import AboutUs from './Components/OptionalPage/AboutUs.jsx';
import TermsAndConditions from './Components/OptionalPage/TermsAndConditions.jsx';
import PrivacyPolicy from './Components/OptionalPage/PrivacyPolicy.jsx';
import ErrorPage from './Components/Error/ErrorPage.jsx';
import AddProduct from './Components/AddProduct.jsx';
import UpdateProduct from './Components/UpdateProduct.jsx';
import MyCart from './Components/MyCart.jsx';
import Apple from './Components/Brand/Apple.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <ErrorPage></ErrorPage>,

    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('/data.json')

      },
      {
        path: '/servicedetailes/:id',
        element: <ProtectedRoute><ServiceDetailes></ServiceDetailes></ProtectedRoute>,
        loader: ()=>fetch('/data.json'),
        
      },
      {
        path: '/event',
        element: <ProtectedRoute> <Event></Event> </ProtectedRoute>,
        loader: ()=>fetch('/data.json'),
        
      },
      {
        path: '/apple',
        element: <Apple></Apple>,
        loader: ()=>fetch('http://localhost:5000/product'),
        
      },
      {
        path: '/addProduct',
        element: <ProtectedRoute> <AddProduct></AddProduct> </ProtectedRoute>,
        loader: ()=>fetch('/data.json'),
        
      },
      {
        path: '/myCart',
        element: <ProtectedRoute> <MyCart></MyCart> </ProtectedRoute>,
        loader: ()=>fetch('/data.json'),
        
      },
      {
        path: '/UpdateProduct',
        element: <ProtectedRoute> <UpdateProduct></UpdateProduct> </ProtectedRoute>,
        loader: ()=>fetch('/data.json'),
        
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },      
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/terms',
        element: <TermsAndConditions></TermsAndConditions>
      },
      {
        path: '/privacy',
        element: <PrivacyPolicy></PrivacyPolicy>
      },

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
       <RouterProvider router={router} />
       </AuthProvider>
  </React.StrictMode>,
)
