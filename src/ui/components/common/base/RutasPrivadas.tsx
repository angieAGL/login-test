import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

export const RutasPrivadas = () => {
  const userCookie = Cookies.get("session");

  return userCookie ? <Outlet></Outlet> : <Navigate to={"/"} />;
};
