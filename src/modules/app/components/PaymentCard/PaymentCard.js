import {
  Button,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import { Payment } from "../Payments/styles";

moment.locale("pt-br");

function PaymentCard({ payment }) {
  const {
    name,
    phone,
    product,
    pay_day,
    total,
    pieces,
    number_piece,
  } = payment;

  const [expand, setExpand] = useState(false);

  return (
    <Payment>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {`${name} // ${phone}`}
          <span style={{ float: "right" }}>
            {moment(pay_day, "YYYY-MM-DD").fromNow()}
          </span>
        </Typography>

        <Typography variant="body2" component="p">
          {product}
        </Typography>

        <Typography variant="body2" component="p">
          {`Parcela ${number_piece + 1}/${pieces}`}
        </Typography>

        <Typography variant="body2" component="p">
          {`Valor ${total}`}
        </Typography>
      </CardContent>

      {expand && (
        <>
          <CardActions>
            <TextField variant="outlined" label="Valor a ser pago" />

            <TextField
              variant="outlined"
              label="Juros"
              disabled
              style={{ marginRight: 18 }}
            />

            <Button variant="outlined" color="primary">
              Calcular Juros
            </Button>

            <Button variant="contained" color="primary">
              Pagar
            </Button>
          </CardActions>

          <CardActions>
            <Button variant="contained" color="secondary">
              IMPRIMIR CONTRATO
            </Button>

            <Button variant="contained" color="inherit" disabled>
              Abrir WHATSAPP
            </Button>
          </CardActions>
        </>
      )}

      <CardActions>
        <Button
          variant="contained"
          color="inherit"
          size="large"
          onClick={() => setExpand(!expand)}
        >
          {!expand ? "Expandir" : "Retrair"}
        </Button>
      </CardActions>
    </Payment>
  );
}

export default PaymentCard;
