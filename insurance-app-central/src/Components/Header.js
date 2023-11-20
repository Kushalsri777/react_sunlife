import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/'
        </div>
    );
}

export default Header;