import React from "react";

export default React.createContext({
  token: null,
  ldap: null,
  name: null,
  incNumber: null,
  isOpen: true,
  isAuthenticated: false,
  login: (token, userId, fullName, tokenExpiration) => {},
  logout: () => {},
  getCookies: name => {},
  changeState: () => {}
});
