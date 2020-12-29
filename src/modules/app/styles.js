import { AppBar, Avatar, Card, Drawer } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled(AppBar)`
  display: flex;
  flex-direction: row !important;
  justify-content: flex-end;
  align-items: center;

  width: calc(100% - 250px);
  padding: 10px 40px 10px 250px;

  background-color: var(--primary) !important;
`;

export const HeaderProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const AvatarProfile = styled(Avatar)`
  font-size: 8px;
  width: 25px;
  height: 25px;
`;

export const Logout = styled(Link)`
  font-size: 16px;
  margin-left: 20px;
  margin-right: 35px;
  color: #fff;
  text-decoration: none;
`;

export const Logo = styled.img`
  width: 140px;
  height: 50px;
  margin-bottom: 10px;
`;

export const SideBar = styled(Drawer)`
  .MuiDrawer-paper {
    color: #fff;
    background-color: var(--font) !important;
    padding-top: 20px;
    align-items: center;
    width: 200px;
  }

  .MuiListItemText-root {
    color: #fff;
  }

  .MuiSvgIcon-root {
    color: #fff;
    margin-right: 10px;
  }
`;

export const Main = styled.main`
  padding: 20px;
  margin-top: 60px;
  margin-left: 200px;
  width: 100%;
  height: 100%;
`;

export const Filter = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const Payments = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Payment = styled(Card)`
  width: 100%;
  border-left-width: 10px;
  border-left-style: solid;
  border-left-color: var(--primary);
`;

export const Footer = styled.footer``;
