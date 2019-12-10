import React from "react";
import { Spinner } from "reactstrap";
import { AlertNotification } from "./Notifications/AlertNotification";

const Status = props => {
  if (props.loading) {
    return (
      <Spinner
        type="grow"
        color="primary"
        style={{ display: "flex", margin: "9em auto" }}
      />
    );
  }

  if (props.notification && props.notification.type) {
    return (
      <AlertNotification
        type={props.notification.type}
        message={props.notification.message}
      />
    );
  }

  return props.children;
};

export default Status;
