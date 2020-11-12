import React, { useCallback } from "react";

//Post Api
import postApi from "../../api/postApi";
//Client side
import { FormControl } from "@material-ui/core";
import styled from "styled-components";
import { Form, Label } from "../styles/formStyle";
import Button from "../styles/Button";
import InputStyled from "../styles/Input";

const Input = styled(InputStyled)`
  max-width: 300px;
`;

const CreatePost = () => {
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    await postApi.newPost(e.target);
  });

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl>
        <Label htmlFor="title">Title:</Label>
        <Input type="title" name="title" />
      </FormControl>

      <FormControl>
        <Label htmlFor="content">Content: </Label>
        <Input type="content" name="content" />
      </FormControl>
      <div>
        <Button type="submit" variant="outlined">
          Create Post
        </Button>
      </div>
    </Form>
  );
};

export default CreatePost;
