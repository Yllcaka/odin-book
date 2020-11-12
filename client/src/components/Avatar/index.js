import React from "react";
import { Avatar } from "@material-ui/core";

const AvatarPic = ({ profilePic, username }) => (
  <Avatar src={profilePic}>
    {profilePic ? null : username[0].toUpperCase()}
  </Avatar>
);

export default AvatarPic;
