import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate, Outlet } from "react-router-dom";

const PrivateRoute  = () => {
    const {token } = useSelector((state) => state.auth);
    let navigate = useNavigate();

    useEffect(() => {
      if (!token) {
        return  navigate('/Login');
      }
    }, [token]);


    return <Outlet />;
}

export default PrivateRoute;