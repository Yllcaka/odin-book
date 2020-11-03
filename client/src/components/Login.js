import React, { useCallback } from "react";
import { Form, Label } from "./styles/formStyle";
import Button from "./styles/Button";
import Input from "./styles/Input";
import loginApi from "../api/login";
import getUserData from "../api/getUserData";
import { FormControl } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    loginApi(e.target);
    // getUserData();
    // dispatch({
    //   type: "LOG_IN",
    // });
    // useSelector((state) => console.log(state));
  });
  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <Label htmlFor="email">E-mail:</Label>
        <Input type="email" name="email" />
      </FormControl>

      <FormControl>
        <Label htmlFor="password">Password: </Label>
        <Input type="password" name="password" />
      </FormControl>

      <div>
        <Button type="submit" variant="outlined">
          Login
        </Button>
      </div>
    </Form>
  );
};

export default Login;
