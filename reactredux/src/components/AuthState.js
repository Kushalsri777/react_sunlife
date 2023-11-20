import React from 'react';
import { useSelector } from 'react-redux';

function AuthState(props) {
    const sel = useSelector(state => state.auth)
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
        </div>
    );
}

export default AuthState;