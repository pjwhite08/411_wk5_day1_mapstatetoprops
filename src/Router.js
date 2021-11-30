import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/HomeContainer'
import About from './components/About'
import Car from './containers/CarContainer'
import Dashboard from './containers/DashboardContainer'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default Router;