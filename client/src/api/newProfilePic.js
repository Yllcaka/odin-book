import getFormData from "./getFormData";
const newProfilePic = (formData) => {
  const dataJson = new FormData(formData);
  fetch("/api/profile/new/profilePic", {
    headers: {
      authorization: localStorage.getItem("jwtToken"),
    },
    body: dataJson,
    mode: "cors",
    method: "PUT",
  });
  return dataJson;
};

export default newProfilePic;
