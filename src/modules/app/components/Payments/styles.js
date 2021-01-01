import { Card } from "@material-ui/core";
import styled from "styled-components";

export const Filter = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
  margin-top: 50px;
  padding-left: 50px;
`;

export const Payments = styled.section`
  padding: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Payment = styled(Card)`
  width: 100%;
  border-left-width: 10px;
  border-left-style: solid;
  border-left-color: var(--primary);
  margin-left: 10px;
  margin-top: 10px;
`;

export const Footer = styled.footer``;
