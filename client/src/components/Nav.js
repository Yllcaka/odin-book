import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavStyle } from "./styles/navStyle";
import { useSelector } from "react-redux";
const Nav = () => {
  // useState()
  const selector = useSelector((state) => state.user);
  return (
    <div>
      <NavStyle>
        <div>Logo</div>
        <ul>
          {selector.username ? (
            <>
              <li>
                <NavLink activeClassName="active" to="/" exact={true}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/profile">
                  Profile
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink activeClassName="active" to="/register">
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/login">
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </NavStyle>
    </div>
  );
};

export default Nav;
