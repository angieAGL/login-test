import React from "react";
import "../../css/navBar.css";
import { Navbar, Container } from "react-bootstrap";
import { ImExit } from "react-icons/im";
import { NavBarInterface } from "../Interfaces/NavBarInterface";

const logoEmpresa = require("../../assets/img/proInvesting.png");

const NavBar = ({ datos, modoLogin }: NavBarInterface) => {
  return (
    <Navbar className="navbar">
      <Container fluid>
        <Navbar.Brand>
          <img
            className="navbar-brand logo "
            src={logoEmpresa}
            alt="Muestra el logo de la empresa"
          />
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
