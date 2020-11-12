import React, { useCallback } from "react";

import styled from "styled-components";
import { Form } from "../styles/formStyle";
import Button from "../styles/Button";
import InputStyled from "../styles/Input";
import newProfilePic from "../../api/newProfilePic";
const Input = styled(InputStyled)`
  max-width: 300px;
`;

const UploadProfilePic = () => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    newProfilePic(e.target);
  });

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <Button variant="outlined" component="label">
          New Profile Picture
          <input type="file" name="profilePic" style={{ display: "none" }} />
        </Button>
      </div>

      <div>
        <Button type="submit" variant="outlined">
          Create Post
        </Button>
      </div>
    </Form>
  );
};

export default UploadProfilePic;
