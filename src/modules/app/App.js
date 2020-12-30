import React from "react";

import { Main } from "./styles";
import { Route, Switch } from "react-router-dom";
import { Payments } from "./components/Payments";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Main>
          <Switch>
            <Route path="/app" exact component={() => <Payments />} />
            <Route
              path="/app/customers"
              exact
              component={() => <h1> customers </h1>}
            />
            <Route path="/app/users" exact component={() => <div></div>} />
            <Route path="/app/whatsapp" exact component={() => <div />} />
          </Switch>
        </Main>
      </Layout>
    </>
  );
}

export default App;
