import {
  AUTHENTICATION_PERFORM_LOGIN,
  AUTHENTICATION_PERFORM_LOGOUT,
} from "./types";

import { api } from "../../../services";

export const $actions = (dispatch) => ({
  async login({ email, username, password, token }) {
    const user = { email, password, token, username };

    localStorage.setItem("authentication", JSON.stringify(user));
    api.defaults.headers.post["Authorization"] = user.token;

    dispatch({ type: AUTHENTICATION_PERFORM_LOGIN, user });
  },

  logout: () => {
    localStorage.removeItem("authentication");
    dispatch({ type: AUTHENTICATION_PERFORM_LOGOUT });
  },
});
