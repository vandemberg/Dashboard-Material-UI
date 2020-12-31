import * as types from "./types";
import { api } from "./../../../services";

const login = ({ action }) => {
  const { user } = action;

  return { isAuthenticated: true, username: user.username, token: user.token };
};

const logout = () => {
  return {
    isAuthenticated: false,
    username: null,
    token: "",
  };
};

export const defaultState = (() => {
  if (!window)
    return {
      isAuthenticated: false,
      username: null,
      token: "",
    };

  const payload = JSON.parse(window.localStorage.getItem("authentication"));

  if (payload && payload.token) {
    api.defaults.headers.post["Authorization"] = payload.token;
  }

  return {
    isAuthenticated: !!payload,
    ...payload,
  };
})();

export function authenticationReducer(state, action) {
  switch (action.type) {
    case types.AUTHENTICATION_PERFORM_LOGIN:
      return login({ action });
    case types.AUTHENTICATION_PERFORM_LOGOUT:
      return logout();
    default:
      return state;
  }
}
