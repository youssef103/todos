import React from "react";
import { Switch } from "react-router-dom";
import { PublicRoute } from "./Config/PublicRoute";
import { Customer } from "../../Components/Customer/Customer";
import { CustomerTest } from "../../Components/Customer/CustomerTest";
import { CustomerProfile } from "../../Components/Customer/CustomerProfile";

const routes = [
  { path: "/customer", component: Customer },
  { path: "/customer/profile", component: CustomerProfile },
  { path: "/customer/test", component: CustomerTest }
];

export const CustomerRoutes = ({ isCustomer = false }) => (
  <Switch>
    {routes.map(customer => (
      <PublicRoute
        key={customer.path}
        exact
        isAuthenticated={isCustomer}
        path={customer.path}
        component={customer.component}
      />
    ))}
  </Switch>
);
