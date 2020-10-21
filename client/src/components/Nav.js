import React from "react";
import { NavLink } from "react-router-dom";
import { NavStyle } from "./styles/navStyle";
const Nav = () => (
  <div>
    <NavStyle>
      <div>Logo</div>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/" exact={true}>
            Home
          </NavLink>
        </li>
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
      </ul>
    </NavStyle>
  </div>
);

export default Nav;
