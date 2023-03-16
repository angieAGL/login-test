import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../utils/FuncionCookie";

export const RutasPrivadas = () => {
  const userCookie = getCookie("session");

  return userCookie ? <Outlet></Outlet> : <Navigate to={"/"} />;
};
