import React from "react";
import { NavStyle, NavLink } from "../styles/navStyle";
import {
  Home,
  VpnKey as LogIn,
  VpnKeyOutlined as SignUp,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import DrawerNav from "./Drawer";
import ProfileTab from "./ProfileTab";

const Nav = () => {
  let user = useSelector((state) => state.user);
  const links = {
    loggedIn: [{ icon: <Home />, name: "Home", to: "/", exact: true }],
    loggedOut: [
      { icon: <SignUp />, name: "Register", to: "/register" },
      { icon: <LogIn />, name: "Login", to: "/login" },
    ],
  };

  return user.username ? (
    <DrawerNav links={links.loggedIn} profile={<ProfileTab user={user} />} />
  ) : (
    <DrawerNav links={links.loggedOut} />
  );
  /* <NavStyle>
        <div>Logo</div>
        <ul>
          {user.username ? (
            <>
              <li>
                <NavLink activeClassName="active" to="/" exact={true}>
                  Home
                </NavLink>
              </li>
              <ProfileTab user={user} />
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
      </NavStyle> */
};

export default Nav;
