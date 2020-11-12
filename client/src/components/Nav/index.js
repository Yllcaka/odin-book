import React from "react";
import { NavLink } from "react-router-dom";
import { NavStyle } from "../styles/navStyle";
import { useSelector, useDispatch } from "react-redux";
import ProfileTab from "./ProfileTab";
import logOut from "../../containers/actions/logOut";
import Button from "../styles/Button";
const Nav = () => {
  let user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { _id: userId } = user;
  const handleLogOut = () => {
    localStorage.clear();
    dispatch(logOut());
  };
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
              <li>
                <Button onClick={handleLogOut}>Log-Out</Button>
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
