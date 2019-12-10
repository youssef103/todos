import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { ProtectedRoute } from "./Config";
import { AdminRouter } from "./AdminRoute";
import { CustomerRoutes } from "./CustomerRoute";

import TodosList from "../../Components/Todos/TodosList";
import { NotFound } from "../../Components/NotFound";

export default props => {
  const RenderAdminRouters = AdminRouter.map(admin => (
    <ProtectedRoute
      key={admin.path}
      exact
      isAuthenticated={true}
      path={admin.path}
      component={admin.component}
    />
  ));

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TodosList} />
        <Route exact path="/test" render={() => "Test component"} />
        {RenderAdminRouters}
        <CustomerRoutes isCustomer={false} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </Router>
  );
};
