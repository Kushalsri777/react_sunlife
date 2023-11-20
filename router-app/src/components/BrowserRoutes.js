import React from 'react';
import {BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import UserDetails from './UserDetails';
import PageNotFound from './PageNotFound';
import Portfolio from './Portfolio';
import Header from './Header';

const routes = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
            <Route path="/login" component={Login} exact={true}/>
            <Route path="/register" component={Register}/>
            <Route path="/userd" component={UserDetails}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>


)
function BrowserRoutes(props) {
    return (
        <div>
            {routes}
        </div>
    );
}

export default BrowserRoutes;