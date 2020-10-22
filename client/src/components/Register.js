import React from "react";
import registerApi from "../api/register";
import { Form, Label } from "./styles/formStyle";
import Button from "./styles/Button";
import Input from "./styles/Input";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    registerApi(e.target);
  };
  return (
    <Form onSubmit={handleSubmit} spacing={5}>
      <FormControl>
        <Label htmlFor="firstname">First Name:</Label>
        <Input type="text" name="firstname" />
      </FormControl>
      <FormControl>
        <Label htmlFor="lastname">Last Name: </Label>
        <Input type="text" name="lastname" />
      </FormControl>
      <FormControl>
        <Label htmlFor="username">Username: </Label>
        <Input type="text" name="username" />
      </FormControl>

      <FormControl>
        <Label htmlFor="gender">Gender:</Label>
        <Select name="gender">
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="F">F</MenuItem>
          <MenuItem value="others">other</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <Label htmlFor="email">E-mail: </Label>
        <Input type="text" name="email" />
      </FormControl>
      <FormControl>
        <Label htmlFor="password">Password: </Label>
        <Input type="password" name="password" />
      </FormControl>

      <div>
        <Button type="submit" variant="outlined">
          Register
        </Button>
      </div>
    </Form>
  );
};

export default Register;
