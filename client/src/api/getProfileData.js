const getProfileData = async (id) => {
  let ProfileData = await fetch(`/api/profile/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    method: "GET",
  })
    .then((res) => res.json())

    .catch((err) => console.error(err));

  return ProfileData;
};

export default getProfileData;
