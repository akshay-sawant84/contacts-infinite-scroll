import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import ContactsScreen from "./Screens/ContactsScreen";

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useEffect(() => {
    let auth = localStorage.getItem("isLoggedIn");
    if (auth) {
      setisAuthenticated(true);
    }
  }, []);

  let routes = (
    <Switch>
      <Route exact path="/login" component={LoginScreen} />
      <Redirect to="/login" />
    </Switch>
  );

  if (isAuthenticated === true) {
    routes = (
      <Switch>
        <Route exact path="/" component={ContactsScreen} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return routes;
}

export default withRouter(App);
