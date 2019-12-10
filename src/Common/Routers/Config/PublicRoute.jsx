import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (!isAuthenticated) return <Component {...props} />;

      return (
        <Redirect
          to={{
            pathname: "/admin",
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);
