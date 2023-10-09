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
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: '/about',
        element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
      },
      {
        path: '/blog',
        element: <PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path: '/apply/:id',
        element: <PrivateRoute><ApplyDetails></ApplyDetails></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
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
