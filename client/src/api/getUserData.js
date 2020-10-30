const getUserData = () => {
  let userData;
  let fetching = fetch("/api/profile", {
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("jwtToken"),
    },
    mode: "cors",
  })
    .then((res) => res.json())
    .then((data) => (userData = data))
    .then((data) => data)
    .catch((err) => console.error(err));
  console.log(fetching);
};

export default getUserData;
