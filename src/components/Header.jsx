import React from "react";
import { NavContainer } from "./component-styles";

const Header = ({ children }) => {
  return (
    <>
      <NavContainer>
        <p>Home</p>
        <p>About</p>
      </NavContainer>
      {children}
    </>
  );
};

export default Header;
