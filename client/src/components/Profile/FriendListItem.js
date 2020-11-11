import React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const FriendListItem = ({ user }) => {
  const { _id: id, username, profilePic } = user;
  return (
    <ListItem>
      <ListItemAvatar>
        <Link to={`/profile/${id}`}>
          <Avatar>{profilePic ? profilePic : username[0].toUpperCase()}</Avatar>
        </Link>
      </ListItemAvatar>
      <ListItemText primary={username} />
    </ListItem>
  );
};

export default FriendListItem;
