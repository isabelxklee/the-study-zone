import React from "react";
import * as Global from "../styles";
import { NavContainer } from "./component-styles";

const Header = ({ children }) => {
  return (
    <>
      <NavContainer>
        <Global.InternalLink to="/">Home</Global.InternalLink>
        <Global.InternalLink to="/about">About</Global.InternalLink>
      </NavContainer>
      {children}
    </>
  );
};

export default Header;
