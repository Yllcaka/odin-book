import React from "react";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  // Avatar,
} from "@material-ui/core";
import Avatar from "../Avatar";

import { AvatarLink as Link } from "../styles/AvatarLink";

const FriendListItem = ({ user }) => {
  const { _id: id, username, profilePic } = user;
  return (
    <ListItem>
      <ListItemAvatar>
        <Link to={`/profile/${id}`}>
          <Avatar profilePic={profilePic} username={username} />
        </Link>
      </ListItemAvatar>
      <ListItemText primary={username} />
    </ListItem>
  );
};

export default FriendListItem;
