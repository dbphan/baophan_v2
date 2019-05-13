import React, { Component } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

// Material helpers
import { MuiThemeProvider } from "@material-ui/core/styles";

// Theme
import theme from "./theme";
import "./assets/scss/index.scss";
import "react-perfect-scrollbar/dist/css/styles.css";

// Global variables
import GlobalContext from "./context/GlobalContext";

// Views
import Dashboard from "./views/Dashboard";

// Browser history
const browserHistory = createBrowserHistory();

export default class App extends Component {
  static contextType = GlobalContext;

  componentDidMount() {
    console.log("App", "componentDidMount");
    console.log("App", "context", this.context.isAuthenticated);
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Switch>
            <Redirect exact from="/" to="/dashboard" />
            <Route component={Dashboard} exact path="/dashboard" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}
