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
import { useSelector } from "react-redux";
import FriendList from "./FriendList";
import UploadProfilePic from "./UploadProfilePic";
import Avatar from "../Avatar";
const ProfileCard = ({ id, profile }) => {
  const { _id: userId } = useSelector((state) => state.user);
  console.log();
  const { firstname, lastname, profilePic, username, friends } = profile;
  return (
    <div>
      <Card>
        <CardHeader
          title={username}
          avatar={<Avatar profilePic={profilePic} username={username} />}
        />
        <CardContent>
          Full Name: {`${firstname} ${lastname}`}
          {id === userId && <UploadProfilePic />}
        </CardContent>
        <FriendList friends={friends} />
      </Card>
    </div>
  );
};

export default ProfileCard;
