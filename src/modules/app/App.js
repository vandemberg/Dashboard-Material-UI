import React from "react";

import { Main } from "./global";
import { Route, Switch } from "react-router-dom";
import { Payments } from "./components/Payments";
import { Layout } from "./components/Layout";
import { NewOrder } from "./components/NewOrder";

import { usePrivateRoute } from "../authentication";

function App() {
  usePrivateRoute();

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

            <Route path="/app/order" exact component={() => <NewOrder />} />

            <Route path="/app/whatsapp" exact component={() => <div />} />
          </Switch>
        </Main>
      </Layout>
    </>
  );
}

export default App;
