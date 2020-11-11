import React, { useState } from "react";
import FriendListItem from "./FriendListItem";
import { List, ListSubheader } from "@material-ui/core";

const FriendList = ({ friends }) => {
  return (
    <List>
      <ListSubheader>Friends</ListSubheader>
      {friends.map((friend) => (
        <FriendListItem key={friend._id} user={friend} />
      ))}
    </List>
  );
};

export default FriendList;
