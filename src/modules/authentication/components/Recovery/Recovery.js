import { Button, TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

function Recovery() {
  return (
    <Container>
      <h2 style={{ marginBottom: 50 }}> Recuperar senha </h2>

      <TextField
        style={{ marginBottom: 35 }}
        label="email"
        variant="standard"
      />

      <Button variant="outlined" color="primary" style={{ marginBottom: 35 }}>
        Recuperar
      </Button>

      <Link to="/auth"> Login </Link>
    </Container>
  );
}

export default Recovery;
