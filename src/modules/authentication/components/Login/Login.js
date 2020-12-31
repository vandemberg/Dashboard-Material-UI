import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuthentication } from "../../hooks";
import { api } from "./../../../../services";
import { Container } from "./styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuthentication();
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const result = await api.post("login", {
      password,
      email,
    });

    login(result.data);

    history.push("/app");
  }

  return (
    <Container onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: 50 }}> Autenticação </h2>

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
        style={{ marginBottom: 25 }}
        label="senha"
        variant="standard"
      />

      <Button variant="outlined" color="primary" type="submit">
        Entrar
      </Button>

      <Link to="/auth/recovery" style={{ marginBottom: 10, marginTop: 30 }}>
        Recuperar senha
      </Link>

      <Link to="/auth/register"> Criar conta </Link>
    </Container>
  );
}

export default Login;
