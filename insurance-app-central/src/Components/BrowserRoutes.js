import React from 'react';
import {BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Header from './Header';


const routes = (
    <BrowserRouter/>
    <div>
        <Header/>
    </div>
)
function BrowserRoutes(props) {
    return (
        <div>
            {routes}
        </div>
    );
}

export default BrowserRoutes;