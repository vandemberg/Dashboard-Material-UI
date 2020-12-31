import React, { useState } from "react";
import { Typography, TextField, Divider, Button } from "@material-ui/core";
import { Content, Container, Form, FormItem } from "./styles";

import { api } from "../../../../services";
import { useHistory } from "react-router-dom";

const currentDay = new Date();
const dd = String(currentDay.getDate()).padStart(2, "0");
const mm = String(currentDay.getMonth() + 1).padStart(2, "0");
const yyyy = currentDay.getFullYear();
const today = yyyy + "-" + mm + "-" + dd;

function NewOrder() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState(1);
  const [pieces, setPieces] = useState(1);
  const [interval, setInterval] = useState(30);
  const [date, setDate] = useState(today);

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const order = {
      name,
      phone,
      product,
      price,
      pieces,
      interval,
      date,
    };

    api.post("/orders", { order }).then((result) => {
      history.push("/app");
    });
  }

  return (
    <Container maxWidth="lg">
      <Content elevation={3}>
        <Typography variant="h5"> Cadastrar novo carnê </Typography>

        <Form onSubmit={handleSubmit}>
          <Divider />

          <Typography style={{ alignSelf: "flex-start", marginTop: 20 }}>
            Informações do cliente
          </Typography>
          <FormItem>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Nome do cliente"
              variant="outlined"
              style={{ width: 500 }}
            />

            <TextField
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              label="Telefone do cliente (WhatsApp)"
              variant="outlined"
              style={{ width: 500, marginLeft: 20 }}
            />
          </FormItem>

          <Typography style={{ alignSelf: "flex-start", marginTop: 20 }}>
            Informações da compra
          </Typography>

          <FormItem>
            <TextField
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              label="Nome do produto"
              variant="outlined"
              style={{ width: "100%" }}
            />
          </FormItem>

          <FormItem>
            <TextField
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              label="Preço"
              variant="outlined"
            />

            <TextField
              value={pieces}
              onChange={(e) => setPieces(e.target.value)}
              label="Quantidade de parcelas"
              type="number"
              variant="outlined"
              style={{ marginLeft: 20 }}
            />
          </FormItem>

          <FormItem>
            <TextField
              value={interval}
              onChange={(e) => setInterval(e.target.value)}
              label="Intervalo de dias entre as parcelas"
              type="number"
              variant="outlined"
              style={{ width: 400 }}
            />

            <TextField
              value={date}
              onChange={(e) => setDate(e.target.value)}
              label="Primeira parcela"
              type="date"
              variant="outlined"
              style={{ marginLeft: 20 }}
            />
          </FormItem>

          <FormItem style={{ justifyContent: "flex-end" }}>
            <Button variant="outlined" style={{ marginTop: 80 }} type="submit">
              CRIAR
            </Button>
          </FormItem>
        </Form>
      </Content>
    </Container>
  );
}

export default NewOrder;
