import { DatosUsuario } from "../../../dominio/entidades/DatosUsuario";
import { getCookie } from "../utils/FuncionCookie";
import NavBar from "../common/NavBar";
import SideBar from "../common/SideBar";
import { Outlet } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";

const LayoutView = () => {
  const userCookie = getCookie("session");
  const datos: DatosUsuario = JSON.parse(userCookie as string);
  const [mostrarSidebar, setMostrarSidebar] = useState(true);

  return (
    <>
      <NavBar
        datos={datos}
        modoLogin={false}
        mostrarSidebar={mostrarSidebar}
        setMostrarSidebar={setMostrarSidebar}
      />

      <Row>
        <Col sm={mostrarSidebar ? 2 : 0}>{SideBar(mostrarSidebar)}</Col>
        <Col sm={mostrarSidebar ? 10 : 12}>
          <Outlet></Outlet>
        </Col>
      </Row>
    </>
  );
};

export default LayoutView;
