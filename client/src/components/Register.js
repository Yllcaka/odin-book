import React from "react";
import registerApi from "../api/register";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    registerApi(e.target);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name: <input type="text" name="firstname" />
      </label>
      <label>
        Last Name: <input type="text" name="lastname" />
      </label>
      <label>
        Username: <input type="text" name="username" />
      </label>
      <label>
        Gender:
        <select name="gender">
          <option>M</option>
          <option>F</option>
          <option>other</option>
        </select>
      </label>
      <label>
        E-mail: <input type="text" name="email" />
      </label>
      <label>
        Password: <input type="password" name="password" />
      </label>
      <button>Register</button>
    </form>
  );
};

export default Register;
