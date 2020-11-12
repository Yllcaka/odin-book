import getFormData from "./getFormData";
const newProfilePic = (formData) => {
  const dataJson = new FormData(formData);
  // const dataJson = getFormData(formData);
  // console.log(dataJson);
  fetch("/api/profile/new/profilePic", {
    headers: {
      authorization: localStorage.getItem("jwtToken"),
    },
    body: dataJson,
    mode: "cors",
    method: "POST",
  });
  return dataJson;
};

export default newProfilePic;
