import getFormData from "./getFormData";
const addFriend = async (newFriendData) => {
  const newFriend = getFormData(newFriendData);

  fetch("/api/profile/add/friend", {
    headers: {
      authorization: localStorage.getItem("jwtToken"),
      body: newFriend,
      "Content-Type": "application/json",
    },
    mode: "cors",
    method: "PUT",
  });
};

export default addFriend;
