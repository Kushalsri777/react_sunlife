import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../actions/counterAction';

function AuthApp(props) {
    const sel = useSelector(state => state.auth)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=> dispatch(login())}>Login</button>
            <button onClick={()=> dispatch(logout())}>Logout</button>
        </div>
    );
}

export default AuthApp;