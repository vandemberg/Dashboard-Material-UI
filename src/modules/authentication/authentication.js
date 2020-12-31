import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login, Register, Recovery } from "./components";

import { Main, Auth } from "./global";
import { useRedirectIfAuthenticated } from "./hooks";

function Authentication() {
  useRedirectIfAuthenticated();

  return (
    <Main>
      <Auth>
        <Switch>
          <Route path="/auth" exact component={() => <Login />} />
          <Route path="/auth/register" component={() => <Register />} />
          <Route path="/auth/recovery" component={() => <Recovery />} />
        </Switch>
      </Auth>
    </Main>
  );
}

export default Authentication;
