import React, { useState } from "react";
import { Alert } from "reactstrap";

export const AlertNotification = ({ type, header, message }) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert
      color={type === "error" ? "danger" : type}
      isOpen={visible}
      toggle={onDismiss}
    >
      {header && <h4 className="alert-heading">{header}</h4>}
      <p>{message}</p>
    </Alert>
  );
};

AlertNotification.defaultProps = {
  type: "error"
};
