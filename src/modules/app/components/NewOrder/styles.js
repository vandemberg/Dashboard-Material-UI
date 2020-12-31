import { Paper, Container as ContainerUI, TextField } from "@material-ui/core";
import styled from "styled-components";

export const Content = styled(Paper)`
  padding: 20px;
  width: 100%;
`;

export const Form = styled.form`
  margin-top: 50px;
`;

export const FormItem = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

export const Container = styled(ContainerUI)`
  height: 100%;
`;
