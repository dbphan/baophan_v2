import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// Views
import Dashboard from "./views/Dashboard";
// import ProductList from "./views/ProductList";
// import UserList from "./views/UserList";
// import Typography from "./views/Typography";
// import Icons from "./views/Icons";
// import Account from "./views/Account";
// import Settings from "./views/Settings";
// import SignUp from "./views/SignUp";
// import SignIn from "./views/SignIn";
// import UnderDevelopment from "./views/UnderDevelopment";
// import NotFound from "./views/NotFound";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <Route component={Dashboard} exact path="/dashboard" />
      </Switch>
    );
  }
}
