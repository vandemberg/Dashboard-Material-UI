import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { api } from "../../../../services";

import { Container } from "./styles";

function Register() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [confirmationPassword, setConfirmationPassword] = useState("");

  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    api.post("/users", {
      name,
      email,
      username,
      password,
      confirmation_password: confirmationPassword,
    });

    history.push("/auth");
  }

  return (
    <Container onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: 50 }}> Registro de usuário </h2>

      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: 10 }}
        label="name"
        variant="standard"
      />

      <TextField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: 10 }}
        label="username"
        variant="standard"
      />

      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: 10 }}
        label="email"
        variant="standard"
      />

      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        style={{ marginBottom: 10 }}
        label="senha"
        variant="standard"
      />

      <TextField
        value={confirmationPassword}
        onChange={(e) => setConfirmationPassword(e.target.value)}
        type="password"
        style={{ marginBottom: 25 }}
        label="confirmação da senha"
        variant="standard"
      />

      <Button variant="outlined" color="primary" type="submit">
        Cadastrar
      </Button>

      <Link to="/auth" style={{ marginBottom: 25, marginTop: 30 }}>
        Login
      </Link>
    </Container>
  );
}

export default Register;
