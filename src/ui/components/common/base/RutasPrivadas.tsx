import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../autenticacion/AuthContext";

export const RutasPrivadas = () => {
  const { loggeado } = React.useContext(AuthContext);

  console.log(loggeado);

  return loggeado ? <Outlet></Outlet> : <Navigate to={"/"} />;
};
