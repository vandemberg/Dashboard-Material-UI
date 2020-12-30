import {
  Button,
  CardActions,
  CardContent,
  TextField,
  List,
  ListItem,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Filter, Payment, Payments } from "./styles";

function PaymentsPage() {
  return (
    <>
      <Filter>
        <TextField
          type="text"
          name="filter"
          variant="outlined"
          label="Filtro"
          placeholder="Nome, E-mail ou Telefone"
          style={{ width: "70%" }}
        />

        <Button variant="contained" color="primary" style={{ width: "25%" }}>
          Filtrar
        </Button>
      </Filter>

      <Payments>
        <Tabs aria-label="simple tabs example" style={{ width: "100%" }}>
          <Tab className="active" label="PRÓXIMAS" />
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
    </>
  );
}

export default PaymentsPage;
