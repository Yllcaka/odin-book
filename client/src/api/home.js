const Home = () => {
  fetch("/api/home", {
    // method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("jwtToken"),
    },
    mode: "cors",
  })
    // .then((res) => console.log(res))
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
};

export default Home;
