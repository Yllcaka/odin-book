import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavStyle } from "./styles/navStyle";
import { useSelector } from "react-redux";
const Nav = () => {
  // useState()
  const selector = useSelector((state) => state.user);
  console.log(selector);
  return (
    <div>
      <NavStyle>
        <div>Logo</div>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/" exact={true}>
              Home
            </NavLink>
          </li>
          {selector.token ? (
            <li>
              <NavLink activeClassName="active" to="/profile">
                Profile
              </NavLink>
            </li>
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
