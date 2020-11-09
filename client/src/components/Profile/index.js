import React from "react";
import ProfileCard from "./ProfileCard";

const Profile = ({ profile }) => {
  return (
    <div>
      <ProfileCard profile={profile} />
    </div>
  );
};

export default Profile;
