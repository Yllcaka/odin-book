import React, { useEffect } from "react";
import homeApi from "../api/home";
const Home = () => {
  useEffect(() => {
    homeApi();
  }, []);
  return <div>Home</div>;
};

export default Home;
