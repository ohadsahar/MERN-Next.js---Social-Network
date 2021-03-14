import React from "react";
import { useSelector } from "react-redux";
import { AlertParagraph } from "./styledAlert";

const Alert = () => {
  const alerts = useSelector((state) => state.alerts);

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <AlertParagraph
        danger={alert.alertType === "error" ? true : false}
        key={alert.id}
      >
        {alert.msg}
      </AlertParagraph>
    ))
  );
};

export default Alert;
