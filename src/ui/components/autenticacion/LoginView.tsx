import React, { useState } from "react";
import "../../css/login.css";
import "../../css/textos.css";
import BotonFormulario from "../common/grids/botones/BotonFormulario";
import LoginValidation from "./LoginHook";
import { useInfraestructureRepository } from "../common/base/Dependencies";
import PopUpInformativo from "../common/modal/PopUpInformativo";
import LoginEvents from "../../../presentacion/LoginEvents";
import { Form, Nav, Container, Row, Col } from "react-bootstrap";
import { DatosLogin } from "../Interfaces/DatosLoginInterface";
import { setCookie } from "../utils/funcionesCookie";
import { DatosUsuario } from "../../../dominio/entidades/DatosUsuario";

const logoEmpresa = require("../../assets/img/proInvesting.png");
const imgLogin = require("../../assets/img/imagenLogin.png");

const LoginView = () => {
  const { usuarioRepositoy } = useInfraestructureRepository();
  const [respuesta, setRespuesta] = useState({ exito: false, mensaje: "" });
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const { onSubmit } = new LoginEvents(usuarioRepositoy);

  const {
    handleSubmit,
    usuarioValidar,
    contraseñaValidar,
    mensajeErrorUsuario,
    mensajeErrorContraseña,
  } = LoginValidation();

  const funcionSubmit = (data: DatosLogin) => {
    onSubmit(data).then((response) => {
      setRespuesta(response);
      if (response.exito) {
        setMostrarPopUp(false);
        setCookie("session", response.datos as DatosUsuario);
        window.location.reload();
      } else {
        setMostrarPopUp(true);
      }
    });
  };

  return (
    <>
      <Nav className="navbar">
        <Container fluid>
          <img
            className="navbar-brand logo"
            src={logoEmpresa}
            alt="Muestra el logo de la empresa"
          />
        </Container>
      </Nav>
      <Row>
        <Col className="col d-none d-lg-block col-12 col-lg-6 col-md-6 px-0 img-login">
          <img
            className="w-100"
            src={imgLogin}
            alt="Muestra el logo de la empresa"
          />
        </Col>
        <Col className="col p-5 ">
          <h2 className="text-center py-5 titulo">Iniciar sesión</h2>
          <Form onSubmit={handleSubmit(funcionSubmit)}>
            <Form.Group className="mb-2 ">
              <Form.Label className="form-label login-texto">
                Usuario
              </Form.Label>
              <Form.Control
                type="text"
                className={
                  mensajeErrorUsuario
                    ? "form-control error"
                    : "form-control correcto"
                }
                placeholder="Ingrese el usuario"
                autoComplete="off"
                {...usuarioValidar}
              />
            </Form.Group>
            {
              <p style={{ color: "var(--color-error)" }}>
                {mensajeErrorUsuario}
              </p>
            }
            <Form.Group className="mb-2">
              <Form.Label className="form-label login-texto">
                Contraseña
              </Form.Label>
              <Form.Control
                type="password"
                className={
                  mensajeErrorContraseña
                    ? "form-control error"
                    : "form-control correcto"
                }
                placeholder="Ingrese la contraseña"
                autoComplete="off"
                {...contraseñaValidar}
              />
            </Form.Group>
            {
              <p style={{ color: "var(--color-error)" }}>
                {mensajeErrorContraseña}
              </p>
            }
            <div className="mb-4 text-end">
              <a href="*">¿Olvidaste tu contraseña ?</a>
            </div>
            <div className="mb-4 text-center">
              <BotonFormulario
                class_name={"btn-login"}
                text={"Iniciar Sesion"}
              ></BotonFormulario>
            </div>
          </Form>
          {PopUpInformativo(mostrarPopUp, setMostrarPopUp, respuesta.mensaje)}
        </Col>
      </Row>
    </>
  );
};

export default LoginView;
