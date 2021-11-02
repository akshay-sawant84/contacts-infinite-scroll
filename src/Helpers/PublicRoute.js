import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, auth, restricted, ...rest }) => (
  // restricted = false meaning public route
  // restricted = true meaning restricted route
  <Route
    {...rest}
    render={(props) =>
      auth === true && restricted ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

export default PublicRoute;
