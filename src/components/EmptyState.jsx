import React from "react";
import { CardElement } from "./component-styles";
import * as Global from "../styles";

const EmptyState = () => {
  return (
    <CardElement emptyState>
      <Global.H3>Oops, there aren't any algorithms to see here!</Global.H3>
      <Global.P>Please try selecting another filter.</Global.P>
    </CardElement>
  );
};

export default EmptyState;
