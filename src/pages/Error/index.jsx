import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Uh oh, looks this page doesn't exist!</h1>
      <p>Error status: {error.statusText || error.message}</p>
    </div>
  );
};
export default Error;
