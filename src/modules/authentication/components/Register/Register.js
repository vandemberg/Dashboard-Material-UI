import { Button, TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

function Register() {
  return (
    <Container>
      <h2 style={{ marginBottom: 50 }}> Registro de usuário </h2>

      <TextField style={{ marginBottom: 10 }} label="name" variant="standard" />

      <TextField
        style={{ marginBottom: 10 }}
        label="username"
        variant="standard"
      />

      <TextField
        style={{ marginBottom: 10 }}
        label="email"
        variant="standard"
      />

      <TextField
        type="password"
        style={{ marginBottom: 10 }}
        label="senha"
        variant="standard"
      />

      <TextField
        type="password"
        style={{ marginBottom: 25 }}
        label="confirmação da senha"
        variant="standard"
      />

      <Button variant="outlined" color="primary">
        Cadastrar
      </Button>

      <Link to="/auth" style={{ marginBottom: 25, marginTop: 30 }}>
        Login
      </Link>
    </Container>
  );
}

export default Register;
