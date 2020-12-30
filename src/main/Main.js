import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "../modules/app/App";
import GlobalStyle from "./../styles/global";

function Main() {
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        <Route path="/" exact component={() => <Redirect to="/app" />} />
        <Route path="/app" component={() => <App />} />
      </Switch>
    </Router>
  );
}

export default Main;
