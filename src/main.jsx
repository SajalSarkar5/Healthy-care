import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import ContextData from './Context/ContextData';
import ApplyDetails from './Pages/ApplyDetails';
import AboutUs from './Pages/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/apply/:id',
        element: <ApplyDetails></ApplyDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextData>
      <RouterProvider router={router} />
    </ContextData>

  </React.StrictMode>,
)
