  import React from "react";
import "../../css/login.css";
import { Boton } from "../common/grids/botones/Boton";
import LoginValidation from "./LoginValidation";

const LoginView = () => {
  const {
    handleSubmit,
    onSubmit,
    usuarioValidar,
    contraseñaValidar,
    mensajeErrorUsuario,
    mensajeErrorContraseña,
  } = LoginValidation();

  return (
    <div className="container-fluid wrapper">
      <div className="row login">
        <h2 className="mb-3">Iniciar sesion </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form group mb-2">
            <label className="form-label">Usuario</label>
            <input
              type="text"
              className={
                mensajeErrorUsuario ? "form-control error" : "form-control"
              }
              placeholder="Ingrese el usuario"
              {...usuarioValidar}
            />
          </div>
          {<p style={{ color: "var(--color-error)" }}>{mensajeErrorUsuario}</p>}

          <div className="form group mb-2">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className={
                mensajeErrorContraseña ? "form-control error" : "form-control"
              }
              placeholder="Ingrese la contraseña"
              {...contraseñaValidar}
            />
          </div>
          {
            <p style={{ color: "var(--color-error)" }}>
              {mensajeErrorContraseña}
            </p>
          }

          <Boton text={"Entrar"} class_name={"w-100 mt-2"}></Boton>
        </form>
      </div>
    </div>
  );
};

export default LoginView;