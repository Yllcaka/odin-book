import React, { useState } from "react";
import FriendListItem from "./FriendListItem";
import { List } from "@material-ui/core";

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map((friend) => (
        <FriendListItem key={friend._id} user={friend} />
      ))}
    </List>
  );
};

export default FriendList;
