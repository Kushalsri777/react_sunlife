import React from 'react';
import { login, logout } from '../authRedux';
import { useDispatch, useSelector } from 'react-redux';

function AuthApp(props) {
    const sel = useSelector(state => state.loginLogout.boolVal)
    const dispatch = useDispatch()
    return (
        <div>
            <p>Auth App .... Login here to get discount</p>
            {sel ? (
                <div>
                    <p>Congratulations..... you got 50% off.
                        use USDF5677 coupon
                    </p>
                </div>
            ) : (
                <p>Not an authorised user...!</p>
            )}
            <div>
            <button onClick={()=> dispatch(login())}>Login</button>
            <button onClick={()=> dispatch(logout())}>Logout</button>
        </div>
        </div>
        
    );
}

export default AuthApp;