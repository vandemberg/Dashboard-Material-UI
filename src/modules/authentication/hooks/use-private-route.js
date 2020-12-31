import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import useAuthentication from "./use-authentication";

export default function usePrivateRoute() {
  const { isAuthenticated } = useAuthentication();
  const history = useHistory();
  useEffect(() => {
    if (!isAuthenticated) history.push("/auth");
  }, [history, isAuthenticated]);
}
