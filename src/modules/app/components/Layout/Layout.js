import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import {
  AccountBox,
  WhatsApp,
  Payment as PaymentIcon,
  Person,
} from "@material-ui/icons";

import {
  AvatarProfile,
  Header,
  HeaderProfile,
  Logo,
  Logout,
  SideBar,
} from "./styles";

import logo from "./../../assets/images/logo.png";

function Layout({ children }) {
  return (
    <>
      <Header position="fixed">
        <HeaderProfile>
          <AvatarProfile>
            <span style={{ fontSize: 16 }}>V</span>
          </AvatarProfile>
          <Logout to="#">Sair</Logout>
        </HeaderProfile>
      </Header>

      <SideBar variant="permanent" anchor="left" open={true}>
        <Link to="#">
          <Logo src={logo} alt="Frey House" />
        </Link>

        <Divider />

        <List>
          <ListItem button>
            <Link to="/app">
              <ListItemIcon>
                <PaymentIcon />
                <ListItemText primary="Pagamentos" />
              </ListItemIcon>
            </Link>
          </ListItem>

          <ListItem button>
            <Link to="/app/customers">
              <ListItemIcon>
                <AccountBox />
                <ListItemText primary="Clientes" />
              </ListItemIcon>
            </Link>
          </ListItem>

          <ListItem button>
            <Link to="/app/users">
              <ListItemIcon>
                <Person />
                <ListItemText primary="Usuários" />
              </ListItemIcon>
            </Link>
          </ListItem>

          <ListItem button>
            <Link to="/app/whatsapp">
              <ListItemIcon>
                <WhatsApp />
                <ListItemText primary="WhatsApp" />
              </ListItemIcon>
            </Link>
          </ListItem>
        </List>
      </SideBar>

      {children}
    </>
  );
}

export default Layout;
