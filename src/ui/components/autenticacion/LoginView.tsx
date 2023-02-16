import React, { useState } from "react";
import "../../css/login.css";
import "../../css/textos.css";
import Boton from "../common/grids/botones/Boton";
import LoginValidation from "./LoginValidation";
import { useInfraestructureRepository } from "../common/base/Dependencies";
import PopUp from "../common/PopUp";
import LoginEvents from "../../../presentacion/LoginEvents";

const logoEmpresa = require("../../assets/img/proInvesting.png");
const imgLogin = require("../../assets/img/imagenLogin.png");

const LoginView = () => {
  const { userRepositoy } = useInfraestructureRepository();
  const [respuesta, setRespuesta] = useState({
    exito: false,
    mensaje: "",
  });
  const {
    handleSubmit,
    usuarioValidar,
    contraseñaValidar,
    mensajeErrorUsuario,
    mensajeErrorContraseña,
  } = LoginValidation();

  const { onSubmit } = LoginEvents(userRepositoy, setRespuesta);

  console.log(respuesta);

  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <img
            className="navbar-brand logo"
            src={logoEmpresa}
            alt="Muestra el logo de la empresa"
          />
        </div>
      </nav>
      <div className="row ">
        <div className="col d-none d-lg-block col-12 col-lg-6 col-md-6 px-0 img-login">
          <img
            className="w-100"
            src={imgLogin}
            alt="Muestra el logo de la empresa"
          />
        </div>
        <div className="col p-5 ">
          <h2 className="text-center py-5 titulo">Iniciar sesión</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2 ">
              <label className="form-label login-texto">Usuario</label>
              <input
                type="text"
                className={
                  mensajeErrorUsuario
                    ? "form-control error"
                    : "form-control login"
                }
                placeholder="Ingrese el usuario"
                {...usuarioValidar}
              />
            </div>
            {
              <p style={{ color: "var(--color-error)" }}>
                {mensajeErrorUsuario}
              </p>
            }

            <div className="mb-2">
              <label className="form-label login-texto">Contraseña</label>
              <input
                type="password"
                className={
                  mensajeErrorContraseña
                    ? "form-control error"
                    : "form-control login"
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
            <div
              className="mb-4 text-end"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <a href="*">¿Olvidaste tu contraseña ?</a>
            </div>

            <div
              className="mb-4 text-center"
              data-bs-toggle="modal"
              data-bs-target="#modal"
            >
              <Boton text={"Iniciar sesión"}></Boton>
            </div>
          </form>
          {respuesta.mensaje ? (
            <PopUp id={"modal"} mensaje={respuesta.mensaje}></PopUp>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LoginView;
