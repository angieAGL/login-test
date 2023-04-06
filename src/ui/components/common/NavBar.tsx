import React, { useState } from "react";
import "../../css/navBar.css";
import { Navbar, Container, Col } from "react-bootstrap";
import { NavBarInterface } from "../Interfaces/NavBarInterface";
import { FaAlignJustify } from "react-icons/fa";
import BotonCerrarSesion from "./grids/botones/BotonCerrarSesion";

const logoEmpresa = require("../../assets/img/proInvesting.png");

const NavBar = ({
  datos,

  mostrarSidebar,
  setMostrarSidebar,
}: NavBarInterface) => {
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  return (
    <Navbar className="navbar">
      <Container fluid>
        <Col lg={2} style={{ textAlign: "center" }}>
          <Navbar.Brand>
            <img
              className="navbar-brand logo"
              src={logoEmpresa}
              alt="Muestra el logo de la empresa"
            />
          </Navbar.Brand>
        </Col>
        <Col lg={1} style={{ textAlign: "start" }}>
          <Navbar.Brand>
            <FaAlignJustify
              className="icon-sidebar"
              style={{ cursor: "pointer" }}
              onClick={() => setMostrarSidebar?.(!mostrarSidebar)}
            ></FaAlignJustify>
          </Navbar.Brand>
        </Col>

        <Col style={{ textAlign: "right" }} sm={9}>
          <Navbar.Brand>
            <Navbar.Text className="nombre-texto me-3">
              {datos?.nombre}
            </Navbar.Text>
            <BotonCerrarSesion
              href={"#"}
              onClick={() => {
                setMostrarPopUp(true);
              }}
              mostrarPopUp={mostrarPopUp}
              mensaje={"¿Esta seguro que desea cerrar sesion?"}
              setMostrarPopUp={setMostrarPopUp}
            />
          </Navbar.Brand>
        </Col>
      </Container>
    </Navbar>
  );
};

export default NavBar;
