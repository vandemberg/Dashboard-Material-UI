import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { useAuthentication } from "../../../authentication";
import { Link, useHistory } from "react-router-dom";

import {
  AccountBox,
  WhatsApp,
  Payment as PaymentIcon,
} from "@material-ui/icons";

import {
  AvatarProfile,
  Header,
  HeaderProfile,
  Logo,
  Logout,
  SideBar,
} from "./styles";

import logo from "../../assets/images/logo.png";

function Layout({ children }) {
  const { logout, username } = useAuthentication();
  const history = useHistory();

  async function handleLogout() {
    await logout();

    history.push("/auth");
  }

  return (
    <>
      <Header position="fixed">
        <HeaderProfile>
          <AvatarProfile>
            <span style={{ fontSize: 16 }}>{username && username[0]}</span>
          </AvatarProfile>
          <Logout onClick={handleLogout}>Sair</Logout>
        </HeaderProfile>
      </Header>

      <SideBar variant="permanent" anchor="left" open={true}>
        <Link to="/app">
          <Logo src={logo} alt="Frey House" />
        </Link>

        <Divider />

        <Link
          to="/app/order"
          style={{ textDecoration: "none", fontWeight: "bold" }}
        >
          <Button variant="contained" color="default">
            GERAR NOVA VENDA
          </Button>
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
