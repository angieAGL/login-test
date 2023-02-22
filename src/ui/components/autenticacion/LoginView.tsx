import { useState } from "react";
import "../../css/login.css";
import "../../css/textos.css";
import BotonFormulario from "../common/grids/botones/BotonFormulario";
import LoginValidation from "./LoginValidation";
import { useInfraestructureRepository } from "../common/base/Dependencies";
import PopUp from "../common/PopUp";
import LoginEvents from "../../../presentacion/LoginEvents";
import { useNavigate } from "react-router-dom";
import { Form, Nav, Container, Row, Col } from "react-bootstrap";

const logoEmpresa = require("../../assets/img/proInvesting.png");
const imgLogin = require("../../assets/img/imagenLogin.png");

const LoginView = () => {
  const { userRepositoy } = useInfraestructureRepository();
  const [respuesta, setRespuesta] = useState({ exito: false, mensaje: "" });
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const { onSubmit } = new LoginEvents(userRepositoy);

  const {
    handleSubmit,
    usuarioValidar,
    contraseñaValidar,
    mensajeErrorUsuario,
    mensajeErrorContraseña,
  } = LoginValidation();

  const navigate = useNavigate();

  const funcionSubmit = (data: any) => {
    onSubmit(data).then((response) => {
      setRespuesta(response);
      if (response.exito) {
        setMostrarPopUp(false);
        navigate("/mantenimiento");
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
                    : "form-control login"
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
                    : "form-control login"
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
              <BotonFormulario text={"Iniciar Sesion"}></BotonFormulario>
            </div>
          </Form>
          {PopUp(mostrarPopUp, setMostrarPopUp, respuesta.mensaje)}
        </Col>
      </Row>
    </>
  );
};

export default LoginView;
