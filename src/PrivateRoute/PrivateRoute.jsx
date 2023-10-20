import React, { useContext } from 'react';
import { UserContext } from '../Context/ContextData';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { users, loading } = useContext(UserContext);
    const location = useLocation();
    // console.log(location.pathname);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(users){
        return children;
    }


    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;