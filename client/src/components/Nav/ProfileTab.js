import React, { useState } from "react";
import {
  ListItem,
  Menu,
  MenuItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { NavLink } from "../styles/navStyle";
import logOut from "../../containers/actions/logOut";
import Button from "../styles/Button";
import Avatar from "../Avatar";

const ProfileTab = ({ user, ...props }) => {
  const { profilePic, username } = user;
  const dispatch = useDispatch();
  const { _id: userId } = user;

  const handleLogOut = () => {
    handleClose();
    localStorage.clear();
    dispatch(logOut());
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <ListItem
        button
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick}
        disableRipple={true}
      >
        <ListItemAvatar>
          <Avatar profilePic={profilePic} username={username} />
        </ListItemAvatar>

        <ListItemText>{username}</ListItemText>
      </ListItem>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <NavLink to={"/profile/" + userId}>Profile</NavLink>
        </MenuItem>
        <MenuItem onClick={handleLogOut}>Log-Out</MenuItem>
      </Menu>
    </>
  );
};

export default ProfileTab;
