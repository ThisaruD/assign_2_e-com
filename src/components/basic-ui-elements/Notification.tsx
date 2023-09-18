import React, { FC } from "react";

import Alert from "react-bootstrap/Alert";

const Notification: FC<{ variant: string }> = ({ variant }) => {
  return (
    <Alert variant={variant}>This is a {variant} alert—check it out!</Alert>
  );
};

export default Notification;
