import React from "react";
import { Nav, Row } from "react-bootstrap";

const SideBar = () => {
  return (
    <Row>
      <Nav className="bg-light  min-vh-100">
        <Nav.Link
          className="nav nav-pills flex-column"
          href="/mantenimiento/demo"
        >
          Demo
        </Nav.Link>
        <Nav.Link
          className="nav nav-pills flex-column"
          href="/mantenimiento/usuario"
        >
          Usuario
        </Nav.Link>
      </Nav>
    </Row>
  );
};

export default SideBar;
