import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import useAuthentication from "./use-authentication";

// Redirect the user to "app page" if its authenticated and try to reach "/authentication" routes.
export default function useRedirectIfAuthenticated() {
  const { isAuthenticated } = useAuthentication();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) history.push("/app");
  }, [history, isAuthenticated]);
}
