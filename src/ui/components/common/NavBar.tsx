import React from "react";
import "../../css/navBar.css";
import { Navbar, Container } from "react-bootstrap";
import { ImExit } from "react-icons/im";
import { NavBarInterface } from "../Interfaces/NavBarInterface";
import { FaAlignJustify } from "react-icons/fa";

const logoEmpresa = require("../../assets/img/proInvesting.png");

const NavBar = ({
  datos,
  modoLogin,
  mostrarSidebar,
  setMostrarSidebar,
}: NavBarInterface) => {
  return (
    <Navbar className="navbar">
      <Container fluid>
        <Navbar.Brand>
          <img
            className="navbar-brand logo "
            src={logoEmpresa}
            alt="Muestra el logo de la empresa"
          />
          {modoLogin ? null : (
            <FaAlignJustify
              onClick={() => setMostrarSidebar?.(!mostrarSidebar)}
            ></FaAlignJustify>
          )}
        </Navbar.Brand>
        {modoLogin ? null : (
          <Navbar.Brand className="justify-content-end">
            <Navbar.Text className="nombre-texto me-3">
              {datos?.nombre}
            </Navbar.Text>
            <ImExit
              color="var(--color-principal-oscuro)"
              size={"30px"}
            ></ImExit>
          </Navbar.Brand>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
