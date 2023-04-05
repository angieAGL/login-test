import React from "react";
import NavBar from "./common/NavBar";
import { Col, Container, Row } from "react-bootstrap";
import Boton from "./common/grids/botones/Boton";
import "../css/errorView.css";

const error = require("../assets/img/error404.png");

const ErrorView = () => {
  return (
    <>
      <NavBar modoHome={false} />
      <Container className="pag-error">
        <Row>
          <Col className="col d-none d-lg-block col-lg-6 robot-contenedor">
            <img
              src={error}
              className="robot-error"
              alt="Muestrar el numero 404 junto a un robot"
            />
          </Col>
          <Col className="col p-5 ">
            <h2 className=" titulo py-3">Pagina no encontrada</h2>
            <h4 className="error-texto py-3">
              No se ha encontrado la página que buscas. Puedes volver a la
              página anterior, visitar nuestra página de inicio o ponerte en
              contacto con nuestro equipo de asistencia técnica.
            </h4>
            <div className="">
              <Boton
                text={"Visitar la página de inicio"}
                type={"button"}
                href="/"
                class_name={"btn-error btn-error-texto me-3 mb-3"}
              />
              ,
              <Boton
                class_name={"btn-cerrar btn-error btn-error-texto mb-3"}
                text={"Contáctanos"}
                type={"button"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ErrorView;
