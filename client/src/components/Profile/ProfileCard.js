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

const ProfileCard = ({ profile }) => {
  const { firstname, lastname, profilePic, username } = profile;
  return (
    <div>
      <Card>
        <CardHeader
          title={username}
          avatar={<Avatar>{profilePic ? profilePic : username[0]}</Avatar>}
        />
        <CardContent>Full Name: ${`${firstname} ${lastname}`}</CardContent>
      </Card>
    </div>
  );
};

export default ProfileCard;
