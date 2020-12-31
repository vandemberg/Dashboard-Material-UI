import { useContext } from "react";

import { Context } from "../contexts";

export default function useAuthentication() {
  return useContext(Context);
}
