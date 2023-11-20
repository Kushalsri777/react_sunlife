import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
        <NavLink to="/login" exact={true}>Login</NavLink> &nbsp;
        <NavLink to="/register">Register</NavLink> &nbsp;
        <NavLink to="/userd">UserDetails</NavLink> &nbsp;
        <NavLink to="/portfolio">Portfolio</NavLink> &nbsp;


    </div>
    );
}

export default Header;