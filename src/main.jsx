import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './Components/Services/Register/Register.jsx';
import './index.css'
import ScrollToTop from "./Components/ScrollToTop.jsx";
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
import AboutUs from './Components/OptionalPage/AboutUs.jsx';
import TermsAndConditions from './Components/OptionalPage/TermsAndConditions.jsx';
import PrivacyPolicy from './Components/OptionalPage/PrivacyPolicy.jsx';
import ErrorPage from './Components/Error/ErrorPage.jsx';
import AddProduct from './Components/AddProduct.jsx';
import UpdateProduct from './Components/UpdateProduct.jsx';
import MyCart from './Components/MyCart.jsx';
import Apple from './Components/Brand/Apple.jsx';
import Google from './Components/Brand/Google.jsx';
import Intel from './Components/Brand/Intel.jsx';
import Samsung from './Components/Brand/Samsung.jsx';
import Sony from './Components/Brand/Sony.jsx';
import Lenovo from './Components/Brand/Lenovo.jsx';

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
        path: '/Apple',
        element: <Apple></Apple>,
        loader: ()=>fetch('http://localhost:5000/product'),
        
      },
      {
        path: '/Google',
        element: <Google></Google>,
        loader: ()=>fetch('http://localhost:5000/product'),
        
      },
      {
        path: '/Intel',
        element: <Intel></Intel>,
        loader: ()=>fetch('http://localhost:5000/product'),
        
      },
      {
        path: '/Samsung',
        element: <Samsung></Samsung>,
        loader: ()=>fetch('http://localhost:5000/product'),
        
      },
      {
        path: '/Sony',
        element: <Sony></Sony>,
        loader: ()=>fetch('http://localhost:5000/product'),
        
      },
      {
        path: '/Lenovo',
        element: <Lenovo></Lenovo>,
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
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params})=>fetch(`http://localhost:5000/product/${params.id}`)
        
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
