import jwt_decode from "jwt-decode";
import { IClient } from "../redux/clients/thunk";

export const getInfoFromToken = (): IClient | null => {
  const token = localStorage.getItem("token");
  if (token) {
    return jwt_decode(token);
  } else {
    return null;
  }
};
