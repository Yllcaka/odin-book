import React from "react";
import { AvatarNavLink } from "../styles/AvatarLink";

import Avatar from "../Avatar";
const ProfileTab = ({ user, ...props }) => {
  const { profilePic, username } = user;
  return (
    <AvatarNavLink {...props}>
      <Avatar profilePic={profilePic} username={username} />
    </AvatarNavLink>
  );
};

export default ProfileTab;
