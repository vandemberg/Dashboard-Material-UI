import React, { useEffect, useState } from "react";
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

import paymentData from "./data.json";

function PaymentsPage() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    setPayments(paymentData);
  }, []);

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
        <Tabs
          value={0}
          aria-label="simple tabs example"
          style={{ width: "100%" }}
        >
          <Tab label="PRÓXIMAS" />
          <Tab label="PENDENTE" />
          <Tab label="TODAS" />
        </Tabs>

        <List>
          {payments.map((value, index) => (
            <ListItem key={index}>
              <PaymentCard customer={{ ...value }} />
            </ListItem>
          ))}
        </List>
      </Payments>
    </>
  );
}

export default PaymentsPage;
