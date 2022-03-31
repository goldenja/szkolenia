import React, {useState, useEffect} from 'react';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';
import {login} from '../../store/slices/authThunk'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate , useLocation } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState('zaphod@gmail.com');
    const [password, setPassword] = useState("42");
    const dispatch = useDispatch();
    const {token, loading} = useSelector((state) => state.auth);

    useEffect(() => {
        if (token) {
          const origin = location.state?.from?.pathname || '/home';
          return  navigate(origin);
        }
      }, [token]);
 
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login({email, password}));
    }

    return <div className="page">
        <div>
            <h2>Login</h2>
        </div>
        
        <form onSubmit={handleLogin}>
            <FormInput  onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" value={email}/>
            <FormInput onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" value={password}/>

            { loading ? <div className="loading"><span>Loading...</span></div> : <Button type="submit" name="Login"/>}

        </form>

    </div>;
}

export default Login;