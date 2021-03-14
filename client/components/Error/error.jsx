import React, { Fragment } from "react";

const Error = ({ type, errors }) => {
  return (
    <Fragment>
      {errors && type === "required" ? <p>This is field is required</p> : null}
    </Fragment>
  );
};

export default Error;
