import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Blog from './Components/Blog/Blog';
import NavBar from './Components/Navbar/NavBar';
import Footer from './Components/Footer/Footer';
import FourPage from './Components/F404Page/FourPage';
import AuthProvider from './Components/Provider/AuthProvider';
import ClassicDetails from './Components/ReactTab/Details/ClassicDetails';
import LuxuryDetails from './Components/ReactTab/Details/LuxuryDetails';
import JeepDetails from './Components/ReactTab/Details/JeepDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <FourPage></FourPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
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
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/classicDetails/:id',
        element: <ClassicDetails></ClassicDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/classic/${params.id}`)
      },
      {
        path: '/luxuryDetails/:id',
        element: <LuxuryDetails></LuxuryDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/luxury/${params.id}`)
      },
      {
        path: '/jeepDetails/:id',
        element: <JeepDetails></JeepDetails>,
        loader: ({params})=>fetch(`http://localhost:5000/jeep/${params.id}`)
      }
      
    ]
  },
  {
    path: '/navbar',
    element: <NavBar></NavBar>
  },
  {
    path: '/footer',
    element: <Footer></Footer>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
