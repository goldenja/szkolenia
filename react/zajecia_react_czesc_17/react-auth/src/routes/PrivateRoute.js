import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { token } = useSelector((state) => state.auth);
  //https://reactrouter.com/docs/en/v6/api#navigate

  return !token ? <Navigate to="/login" replace /> : <Outlet />;
}

export default PrivateRoute;