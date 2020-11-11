import React from "react";
import { NavLink } from "react-router-dom";
import { NavStyle } from "../styles/navStyle";
import { useSelector } from "react-redux";
import ProfileTab from "./ProfileTab";

const Nav = () => {
  let user = useSelector((state) => state.user);
  const { _id: userId } = user;
  return (
    <div>
      <NavStyle>
        <div>Logo</div>
        <ul>
          {user.username ? (
            <>
              <li>
                <NavLink activeClassName="active" to="/" exact={true}>
                  Home
                </NavLink>
              </li>
              <li>
                <ProfileTab
                  activeClassName="active"
                  user={user}
                  to={"/profile/" + userId}
                />
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
