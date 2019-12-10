import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  render,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthenticated)
        return Component ? <Component {...props} /> : render(props);

      return (
        <Redirect
          to={{
            pathname: "/customer/test",
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);
