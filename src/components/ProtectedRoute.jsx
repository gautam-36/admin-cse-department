import React from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = sessionStorage.getItem("data");
    // const [cookies]=useCookies(["Acesstoken"])
    console.log(isAuthenticated)



    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;