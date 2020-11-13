import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";
import Profile from "./Profile";
import Register from "./Register";
import Login from "./Login";
import "./styles/style.css";
//Redux Shiz
import { Provider } from "react-redux";
import store from "../containers/store";
import getUserData from "../containers/actions/getUser";

const App = () => {
  useEffect(() => {
    store.dispatch(getUserData());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <div style={{ display: "flex" }}>
          <Nav />
          <Switch>
            <Route path="/profile/:id">
              <Profile />
            </Route>

            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
