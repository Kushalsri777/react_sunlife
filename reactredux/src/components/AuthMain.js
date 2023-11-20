import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login, logout } from '../actions/counterAction';
import AuthState from './AuthState';
import AuthApp from './AuthApp';

function AuthMain(props) {
    // const sel = useSelector(state => state.auth)
    // const dispatch = useDispatch()
    return (
        <div>
            
            <AuthState/>
            <AuthApp/>
            <div>
                <p></p>
            </div>
            

        </div>

    );
}

export default AuthMain;