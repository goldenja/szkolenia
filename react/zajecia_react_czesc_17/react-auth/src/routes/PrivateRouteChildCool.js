import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { Navigate , useLocation } from "react-router-dom";



function PrivateRouteChildCool({ children }) {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();

  return !token ? <Navigate to="/login" replace state={{ from: location }}  /> : children;
}

export default PrivateRouteChildCool;