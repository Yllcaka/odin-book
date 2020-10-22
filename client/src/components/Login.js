import React from "react";
import { Form, Label } from "./styles/formStyle";
import Button from "./styles/Button";
import Input from "./styles/Input";
import loginApi from "../api/login";
import { FormControl } from "@material-ui/core";
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    loginApi(e.target);
    console.log("AAA");
  };
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
