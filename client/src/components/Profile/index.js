import React, { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { useParams } from "react-router-dom";
import getProfileData from "../../api/getProfileData";
const Profile = () => {
  let { id } = useParams();
  console.log(id);
  const [profileData, setProfileData] = useState(null);
  const changeProfileData = () => {
    getProfileData(id)
      .then((res) => setProfileData(res))
      .then(() => console.log(profileData));
  };
  useEffect(() => {
    changeProfileData();
  }, [id]);
  return profileData ? (
    <div>
      <ProfileCard key={id} id={id} profile={profileData} />
    </div>
  ) : (
    <div />
  );
};

export default Profile;
