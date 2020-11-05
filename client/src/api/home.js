const Home = async () => {
  const posts = await fetch("/api/home", {
    // method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("jwtToken"),
    },
    mode: "cors",
  })
    // .then((res) => console.log(res))
    .then((res) => res.json())
    .catch((err) => console.error(err));
  console.log(posts);
  return posts;
};

export default Home;
