import { Card } from "@material-ui/core";
import styled from "styled-components";

export const Main = styled.main`
  background-color: var(--background);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Auth = styled(Card)`
  width: 600px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  padding-bottom: 35px;
`;

export const Footer = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 12px;
  top: 72%;
`;
