import React, { createContext, useReducer } from "react";

import { $actions, authenticationReducer, defaultState } from "../store";

export const Context = createContext();

export function AuthenticationContext({ children }) {
  const [state, dispatch] = useReducer(authenticationReducer, defaultState);
  const { login, logout } = $actions(dispatch);

  return (
    <Context.Provider value={{ ...state, login, logout }}>
      {children}
    </Context.Provider>
  );
}
