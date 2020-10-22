import styled from "styled-components";
import { MenuItem, InputLabel, FormControl } from "@material-ui/core";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Label = styled(InputLabel)`
  color: red;
`;
// const SelectField = styled(Select);
const Option = styled(MenuItem)``;
const FormField = styled(FormControl)``;

export { Form, Label };
