import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import Login from './pages/external/Login';
import Register from './pages/external/Register';
import Dashboard from './pages/dashboard';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <Router>
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/app" component={Dashboard} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </Router>
);

export default Routes;