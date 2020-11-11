import React from "react";
import { AvatarNavLink } from "../styles/AvatarLink";
import { Avatar } from "@material-ui/core";

const ProfileTab = ({ user, ...props }) => {
  return (
    <AvatarNavLink {...props}>
      <Avatar>
        {user.profilePic ? user.profilePic : user.username[0].toUpperCase()}
      </Avatar>
    </AvatarNavLink>
  );
};

export default ProfileTab;
