const Home = async () => {
  const posts = await fetch("/api/home", {
    // method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("jwtToken"),
    },
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.error(err));

  return posts;
};

export default Home;
