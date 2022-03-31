import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";



function PrivateRouteChild({ children }) {
  const { token } = useSelector((state) => state.auth);

  return !token ? <Navigate to="/login" replace /> : children;
}

export default PrivateRouteChild;