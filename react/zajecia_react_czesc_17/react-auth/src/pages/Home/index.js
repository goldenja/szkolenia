import React, { useEffect} from 'react';
import {signOut} from '../../store/slices/authThunk';
import Button from '../../components/Button';
import {fetchUserData} from '../../store/slices/authThunk'
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();

    const {token} = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(fetchUserData({token}));
      }, []);

    return <div className="page">
        <h2>Home</h2>

        <div>
            <Button onClick={() => dispatch(signOut())} name="Sign Out"/>
        </div>

    </div>;
}

export default Home;