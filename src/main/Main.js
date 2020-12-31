import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "../modules/app/App";
import { AuthenticationContext } from "../modules/authentication";
import Authentication from "../modules/authentication/authentication";
import GlobalStyle from "./../styles/global";

function Main() {
  return (
    <AuthenticationContext>
      <Router>
        <GlobalStyle />

        <Switch>
          <Route path="/" exact component={() => <Redirect to="/app" />} />
          <Route path="/app" component={() => <App />} />
          <Route path="/auth" component={() => <Authentication />} />
        </Switch>
      </Router>
    </AuthenticationContext>
  );
}

export default Main;
