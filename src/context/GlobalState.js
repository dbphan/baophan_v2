import React, { Component } from "react";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import GlobalContext from "./GlobalContext";

class GlobalState extends Component {
  state = {
    token: null,
    ldap: null,
    name: null,
    incNumber: null,
    isOpen: true,
    isAuthenticated: false,
    incNumber: null
  };

  componentDidMount() {
    console.log("GlobalState", "componentDidMount");
  }

  getCookies = name => {
    const { cookies } = this.props;
    return cookies.get(name);
  };

  login = dataObj => {
    const { cookies } = this.props;
    this.setState(dataObj);
    cookies.set("delivery-routing", dataObj, {
      path: "/",
      maxAge: 60 * 60
    });
  };

  logout = () => {
    const { cookies } = this.props;
    cookies.remove("delivery-routing", {
      path: "/"
    });
    this.setState({ token: null, userId: null, fullName: null });
  };

  changeState = obj => {
    this.setState(obj);
  };

  render() {
    const myCookie = this.getCookies("delivery-routing");
    return (
      <GlobalContext.Provider
        value={
          myCookie
            ? {
                ...myCookie,
                changeState: this.changeState
              }
            : {
                ...this.state,
                changeState: this.changeState
              }
        }
      >
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

GlobalState.propTypes = {
  cookies: instanceOf(Cookies).isRequired
};

export default withCookies(GlobalState);

/*

  token: myCookie.token,...myCookie,
                userId: myCookie.ldap,
                fullName: myCookie.name,
                login: this.login,
                logout: this.logout,
                loginTab: this.state.loginTab,
                changeTab: this.changeTab,
                isTHD: this.state.isTHD,
                setLoginType: this.setLoginType,
                changeState: this.changeState
      token: this.state.token,
                userId: this.state.userId,
                fullName: this.state.fullName,
                login: this.login,
                logout: this.logout,
                loginTab: this.state.loginTab,
                changeTab: this.changeTab,
                isTHD: this.state.isTHD,
                setLoginType: this.setLoginType,
                changeState: this.changeState

*/
