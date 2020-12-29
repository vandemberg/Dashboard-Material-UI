import React from "react";

import {
  Header,
  Main,
  Logo,
  HeaderProfile,
  Logout,
  AvatarProfile,
  SideBar,
  Payments,
  Payment,
  Filter,
} from "./styles";

import logo from "./assets/images/logo.png";
import { Link } from "react-router-dom";
import {
  AccountBox,
  WhatsApp,
  Payment as PaymentIcon,
  Person,
} from "@material-ui/icons";
import {
  Button,
  CardActions,
  CardContent,
  Divider,
  Input,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";

function App() {
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
            <ListItemIcon>
              <PaymentIcon />
              <ListItemText primary="Pagamentos" />
            </ListItemIcon>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <AccountBox />
              <ListItemText primary="Clientes" />
            </ListItemIcon>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Person />
              <ListItemText primary="Usuários" />
            </ListItemIcon>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <WhatsApp />
              <ListItemText primary="WhatsApp" />
            </ListItemIcon>
          </ListItem>
        </List>
      </SideBar>

      <Main>
        <Filter className="filter">
          <Input
            type="text"
            placeholder="Nome, E-mail ou Telefone"
            style={{ width: "50%", marginRight: 20 }}
          />
          <Button variant="contained" color="primary">
            Filtrar
          </Button>
        </Filter>

        <Payments className="payments">
          <Tabs aria-label="simple tabs example" style={{ width: "100%" }}>
            <Tab label="PRÓXIMAS" />
            <Tab label="PENDENTE" />
            <Tab label="TODAS" />
          </Tabs>

          <List>
            <ListItem>
              <Payment>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Vandemberg Silva Lima // (81) - 996961947
                    <span style={{ float: "right" }}>31/01/2021</span>
                  </Typography>

                  <Typography variant="body2" component="p">
                    DVD Panasonic 3 em 1
                  </Typography>

                  <Typography variant="body2" component="p">
                    Parcela 1/10
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button variant="contained" color="inherit" size="large">
                    Expandir
                  </Button>
                </CardActions>
              </Payment>
            </ListItem>
          </List>
        </Payments>
      </Main>
    </>
  );
}

export default App;
