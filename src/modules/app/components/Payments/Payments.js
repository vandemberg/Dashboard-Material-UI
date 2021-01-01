import React, { useEffect, useState } from "react";
import { api } from "../../../../services";
import {
  Button,
  TextField,
  List,
  ListItem,
  Typography,
  Paper,
} from "@material-ui/core";
import { Filter, Payments } from "./styles";
import PaymentCard from "../PaymentCard/PaymentCard";

import paymentData from "./data.json";

function PaymentsPage() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    api.get("payments").then((result) => {
      setPayments(result.data);
    });
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

      <Paper variant="elevation">
        <Payments>
          <Typography
            style={{ textAlign: "center", marginBottom: "20px" }}
            variant="h4"
          >
            Pagamentos a serem realizados
          </Typography>
          <List>
            {payments.map((value, index) => (
              <ListItem key={index}>
                <PaymentCard customer={{ ...value }} />
              </ListItem>
            ))}
          </List>
        </Payments>
      </Paper>
    </>
  );
}

export default PaymentsPage;
