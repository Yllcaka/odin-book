import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  // Avatar,
  Typography,
  IconButton,
  colors,
} from "@material-ui/core";
import FriendList from "./FriendList";
import UploadProfilePic from "./UploadProfilePic";
import Avatar from "../Avatar";
const ProfileCard = ({ id, profile }) => {
  const { firstname, lastname, profilePic, username, friends } = profile;
  console.log(profile);
  return (
    <div>
      <Card>
        <CardHeader
          title={username}
          avatar={<Avatar profilePic={profilePic} username={username} />}
        />
        <CardContent>
          Full Name: {`${firstname} ${lastname}`}
          <UploadProfilePic />
        </CardContent>
        <FriendList friends={friends} />
      </Card>
    </div>
  );
};

export default ProfileCard;
