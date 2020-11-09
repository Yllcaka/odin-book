const getUserData = async () => {
  let userData = await fetch("/api/profile", {
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("jwtToken"),
    },
    mode: "cors",
    method: "GET",
  })
    .then((res) => res.json())

    .catch((err) => console.error(err));

  return userData;
};

export default getUserData;
