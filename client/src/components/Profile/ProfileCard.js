import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  IconButton,
  colors,
} from "@material-ui/core";
import FriendList from "./FriendList";
const ProfileCard = ({ id, profile }) => {
  const { firstname, lastname, profilePic, username, friends } = profile;
  // console.log("This should happen after");
  console.log(friends);
  return (
    <div>
      <Card>
        <CardHeader
          title={username}
          avatar={
            <Avatar>
              {profilePic ? profilePic : username[0].toUpperCase()}
            </Avatar>
          }
        />
        <CardContent>Full Name: {`${firstname} ${lastname}`}</CardContent>
        <FriendList friends={friends} />
      </Card>
    </div>
  );
};

export default ProfileCard;
