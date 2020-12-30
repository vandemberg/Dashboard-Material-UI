import React from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  Tab,
  Tabs,
} from "@material-ui/core";
import { Filter, Payments } from "./styles";
import PaymentCard from "../PaymentCard/PaymentCard";

const customer = {
  name: "Vandemberg Lima",
  phone: "(81) 9 9696-1947",
  dueDate: "15/01/2021",
  product: "DVD panasonic 3 em 1",
  totalPayment: 12,
  currentPayment: 1,
  cost: 25.0,
};

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
            <PaymentCard customer={{ ...customer }} />
          </ListItem>

          <ListItem>
            <PaymentCard customer={{ ...customer }} />
          </ListItem>

          <ListItem>
            <PaymentCard customer={{ ...customer }} />
          </ListItem>

          <ListItem>
            <PaymentCard customer={{ ...customer }} />
          </ListItem>

          <ListItem>
            <PaymentCard customer={{ ...customer }} />
          </ListItem>

          <ListItem>
            <PaymentCard customer={{ ...customer }} />
          </ListItem>
        </List>
      </Payments>
    </>
  );
}

export default PaymentsPage;
